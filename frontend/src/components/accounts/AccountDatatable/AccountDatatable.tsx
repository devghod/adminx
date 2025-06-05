import React, { useMemo } from 'react';
import { TUsers as TAccounts } from '@/stores/accountStore/type';
import { columns, columnHelper } from './constants';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { EditIcon, TrashIcon, ViewIcon } from '@/components/ui/icons';
import { ToolTip } from '@/components/ui/tooltips';

const AccountDatatable = ({
  accounts = [],
  fetchUsers,
}: {
  accounts: TAccounts;
  fetchUsers: () => void;
}) => {
  const tableData: TAccounts = useMemo(() => {
    if (accounts.length === 0) return [];
    return accounts;
  }, [accounts]);

  const tableColumns = useMemo(
    () => [
      columnHelper.display({
        id: 'actions',
        cell: (props: any) => (
          <div className='inline-flex rounded-md gap-1'>
            <ToolTip title='Details' className='text-xs'>
              <Button
                variant='primary'
                size='xs'
                onClick={() => {
                  console.debug(props.row.original._id);
                }}
              >
                <ViewIcon />
              </Button>
            </ToolTip>
            <ToolTip title='Edit' className='text-xs'>
              <Button
                variant='primary'
                size='xs'
                onClick={() => {
                  console.debug(props.row.original._id);
                }}
              >
                <EditIcon />
              </Button>
            </ToolTip>
            <ToolTip title='Delete' className='text-xs'>
              <Button
                variant='danger'
                size='xs'
                onClick={() => {
                  console.debug(props.row.original._id);
                  fetchUsers();
                }}
              >
                <TrashIcon />
              </Button>
            </ToolTip>
          </div>
        ),
      }),
      ...columns,
    ],
    [fetchUsers],
  );

  const table = useReactTable({
    columns: tableColumns,
    data: tableData as any,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <table className='table-auto w-full'>
        <thead className=''>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
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
