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
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useEffect, useMemo, useState } from 'react';

const Datatable = ({
  rowData,
  columnData,
  size,
  page,
  total,
  isLoading = false,
  fnQuery,
  fnSetSize,
  fnSetFilters,
  searchBar = false,
}: {
  rowData: any;
  columnData: any;
  size: number;
  page: number;
  total: number;
  isLoading: boolean;
  searchBar?: boolean;
  fnQuery: (page: number, size: number, filters?: any) => void;
  fnSetSize: (size: number) => void;
  fnSetFilters: (filters: object) => void | undefined;
}) => {
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: page - 1, //initial page index
    pageSize: size, //default page size
  });

  const column = useMemo(() => columnData, [columnData]);
  const data = useMemo(() => rowData, [rowData]);

  const tableConfig = useReactTable({
    data,
    columns: column,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true, // turn off client-side pagination
    rowCount: total,
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

  const globalColumnSearch = useMemo(() => {
    return tableConfig.getAllColumns().map(col => col.id);
  }, [tableConfig]);

  useEffect(() => {
    const filtersSet: any = {};

    if (search) filtersSet.search = search;
    if (globalColumnSearch.length > 0) {
      filtersSet.fields = [...globalColumnSearch];
    }

    fnSetFilters(filtersSet);
    fnQuery(
      pagination.pageIndex + 1,
      pagination.pageSize,
      filtersSet,
    );
  }, [pagination, fnQuery, fnSetFilters, search, globalColumnSearch]);

  return (
    <section className='flex flex-col gap-y-2 max-w-[2000px] mx-auto bg-white dark:bg-black rounded-xl shadow-xl p-3 my-3 relative'>
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

      <div className=''>
        {searchBar && (
          <div className='flex space-x-4 justify-start bg-transparent'>
            <Input
              type='search'
              placeholder='Search here'
              onChange={e => setSearch(e.target.value)}
              value={search}
            />
          </div>
        )}
      </div>

      <div className='overflow-x-auto'>
        <div className='inline-block min-w-full border rounded-lg overflow-hidden'>
          <div className='max-h-[600px] overflow-y-auto'>
            <Table className='min-w-full border-collapse'>
              <TableHeader className=''>
                {tableConfig.getHeaderGroups().map(headerGroup => (
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
                {tableConfig.getRowModel().rows.map(row => (
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

      <PaginationComponent
        table={tableConfig}
        fnSetSize={() => fnSetSize}
      />
    </section>
  );
};

export default Datatable;

const PaginationComponent = ({
  table,
  fnSetSize,
}: {
  table: any;
  fnSetSize: any;
}) => (
  <div className='flex gap-x-1'>
    <Button
      onClick={() => table.firstPage()}
      disabled={!table.getCanPreviousPage()}
      shape='rounded'
      theme='outline-neutral'
      size='sm'
      className='text-xs'
    >
      {'<<'}
    </Button>
    <Button
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
      shape='rounded'
      theme='outline-neutral'
      size='sm'
      className='text-xs'
    >
      {'<'}
    </Button>
    <Button
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
      shape='rounded'
      theme='outline-neutral'
      size='sm'
      className='text-xs'
    >
      {'>'}
    </Button>
    <Button
      onClick={() => table.lastPage()}
      disabled={!table.getCanNextPage()}
      shape='rounded'
      theme='outline-neutral'
      size='sm'
      className='text-xs'
    >
      {'>>'}
    </Button>

    <Select
      className='h-8 p-0 w-14'
      items={[
        { value: 5, label: '5' },
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
        { value: 250, label: '250' },
        { value: 500, label: '500' },
        { value: 1000, label: '1000' },
      ]}
      defaultValue={table.getState().pagination.pageSize}
      placeholder='Limit'
      onChange={(e: any) => {
        table.setPageSize(Number(e.target.value));
        fnSetSize(Number(e.target.value));
      }}
    />
  </div>
);
