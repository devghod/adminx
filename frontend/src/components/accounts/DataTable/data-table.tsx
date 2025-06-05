import { useMemo } from 'react';
import { TUser } from '@/stores/accountStore/type';
import { columns } from './constants';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const fallbackData: TUser[] = [];

const AccountDatatable = ({
  accounts,
}: {
  accounts: TUser[];
  fetchUsers: () => void;
}) => {
  const data = useMemo(
    () => (!accounts ? Array(4).fill({}) : [...accounts]),
    [accounts],
  );

  const defaultColumns: any = useMemo(
    () =>
      columns.map(column => ({
        ...column,
        cell: <Skeleton />,
      })) || columns,
    [],
  );

  const table = useReactTable({
    data: data || fallbackData,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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

      <PaginationController table={table} />
    </div>
  );
};

export default AccountDatatable;

const PaginationController = ({ table }: { table: any }) => {
  return (
    <div className='flex items-center justify-end space-x-2 py-3'>
      <Button
        variant='outline'
        size='sm'
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </Button>
      <Button
        variant='outline'
        size='sm'
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className='animate-pulse bg-gray-200 dark:bg-gray-700 h-4 rounded-full'></div>
  );
};
