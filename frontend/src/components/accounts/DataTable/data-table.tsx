import { useState, useMemo, useEffect } from 'react';
import { TUser } from '@/stores/accountStore/type';
import { columns } from './constants';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext(),
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className='h-24 text-center'
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    // <>
    //   <table className="table-auto w-full">
    //     <thead>
    //       <tr>
    //         {table.getHeaderGroups().map(headerGroup => (
    //           <th key={headerGroup.id} className='flex flex-row flex-nowrap'>
    //             {headerGroup.headers.map(header => (
    //               <div key={header.id} className='w-80 text-left border'>
    //                 {header.isPlaceholder
    //                   ? null
    //                   : flexRender(
    //                       header.column.columnDef.header,
    //                       header.getContext(),
    //                     )}
    //               </div>
    //             ))}
    //           </th>
    //         ))}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {table.getRowModel().rows.map(row => (
    //         <tr key={row.id} className='flex flex-row flex-nowrap'>
    //           {row.getVisibleCells().map(cell => (
    //             <td key={cell.id} className='w-80 text-left border'>
    //               {flexRender(
    //                 cell.column.columnDef.cell,
    //                 cell.getContext(),
    //               )}
    //             </td>
    //           ))}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </>
  );
};

export default AccountDatatable;
