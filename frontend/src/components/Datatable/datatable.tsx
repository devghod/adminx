import {
  useReactTable,
  getCoreRowModel,
  flexRender,
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
import { useMemo } from 'react';

const Datatable = ({
  rowData,
  columnData,
  isLoading = false,
}: {
  rowData: any;
  columnData: any;
  isLoading: boolean;
}) => {
  const column = useMemo(() => columnData, [columnData]);
  const data = useMemo(() => rowData, [rowData]);

  const table = useReactTable({
    data,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
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
          <div className='max-h-[450px] overflow-y-auto'>
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
    </section>
  );
};

export default Datatable;
