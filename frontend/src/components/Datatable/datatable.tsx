import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from '@tanstack/react-table';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { LoadingIcon } from '@/components/ui/icons';
import { Button } from '../ui/button';
import { useEffect, useMemo, useState } from 'react';

const Datatable = ({
  rowData,
  columnData,
  size,
  page,
  total,
  isLoading = false,
  fnQuery,
}: {
  rowData: any;
  columnData: any;
  size: number;
  page: number;
  total: number;
  isLoading: boolean;
  fnQuery: (page: number, size: number) => void;
}) => {
  const [pagination, setPagination] = useState({
    pageIndex: page - 1, //initial page index
    pageSize: size, //default page size
  });
  const column = useMemo(() => columnData, [columnData]);
  const data = useMemo(() => rowData, [rowData]);

  useEffect(() => {
    fnQuery(pagination.pageIndex + 1, pagination.pageSize);
  }, [pagination, fnQuery]);

  const table = useReactTable({
    data,
    columns: column,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true, // turn off client-side pagination
    rowCount: total,
    // debugTable: true, // turn on table debug
    state: {
      pagination,
    },
    initialState: {
      pagination: {
        pageIndex: page - 1, //custom initial page index
        pageSize: size, //custom default page size
      },
    },
  });

  return (
    <section className='max-w-[1200px] mx-auto bg-white dark:bg-black rounded-xl shadow-md p-3 my-5 relative'>
      {isLoading && (
        <div className='absolute inset-0 bg-white/90 dark:bg-black/90 rounded-xl pointer-events-none'>
          <div className='flex flex-col items-center justify-center h-full'>
            <LoadingIcon />
            <span className='mt-2 text-gray-600 font-medium text-lg select-none'>
              Loading...
            </span>
          </div>
        </div>
      )}

      <div className='overflow-x-auto'>
        <div className='inline-block min-w-full border rounded-lg overflow-hidden'>
          <div className='max-h-[600px] overflow-y-auto'>
            <Table className='min-w-full border-collapse'>
              <TableHeader className=''>
                {table.getHeaderGroups().map(headerGroup => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <TableHead
                        key={header.id}
                        className='py-3 px-3 bg-gray-100 dark:bg-gray-800 text-md sm:text-sm font-bold sm:font-semibold '
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody className='divide-y'>
                {table.getRowModel().rows.map(row => (
                  <TableRow
                    key={row.id}
                    className='hover:bg-gray-100 dark:hover:bg-gray-800'
                  >
                    {row.getVisibleCells().map(cell => (
                      <TableCell
                        key={cell.id}
                        className='py-2 px-3 text-md sm:text-sm '
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <PaginationComponent table={table} />
    </section>
  );
};

export default Datatable;

const PaginationComponent = ({ table }: { table: any }) => (
  <>
    <Button
      onClick={() => table.firstPage()}
      disabled={!table.getCanPreviousPage()}
    >
      {'<<'}
    </Button>
    <Button
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      {'<'}
    </Button>
    <Button
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      {'>'}
    </Button>
    <Button
      onClick={() => table.lastPage()}
      disabled={!table.getCanNextPage()}
    >
      {'>>'}
    </Button>
    <select
      value={table.getState().pagination.pageSize}
      onChange={e => {
        table.setPageSize(Number(e.target.value));
      }}
    >
      {[10, 20, 30, 40, 50].map(pageSize => (
        <option key={pageSize} value={pageSize}>
          {pageSize}
        </option>
      ))}
    </select>
  </>
);
