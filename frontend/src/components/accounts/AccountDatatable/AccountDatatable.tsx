import { useState, useMemo, useEffect } from 'react';
import { TUser } from '@/stores/accountStore/type';
import { columns } from './constants';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

const fallbackData: TUser[] = [];

const AccountDatatable = ({
  accounts,
  isLoading,
}: {
  accounts: TUser[];
  isLoading: boolean;
}) => {
  const [data, setData] = useState<TUser[]>([]);

  useEffect(() => {
    setData(accounts);
  }, [accounts]);

  const defaultColumns = useMemo(() => [...columns], [data]);

  const table = useReactTable({
    data: data || fallbackData,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <table className='table-auto w-full'>
        <thead className=''>
          <tr>
            {table.getHeaderGroups().map(headerGroup => (
              <th key={headerGroup.id} className='flex'>
                {headerGroup.headers.map(header => (
                  <div key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </div>
                ))}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext(),
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AccountDatatable;
