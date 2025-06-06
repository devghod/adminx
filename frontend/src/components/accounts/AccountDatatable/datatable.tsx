import { useState, useMemo } from 'react';
import { TUsers as TAccounts } from '@/stores/accountStore/type';
import { columns, columnHelper } from './constants';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  AddIcon,
  EditIcon,
  TrashIcon,
  ViewIcon,
} from '@/components/ui/icons';
import { ToolTip } from '@/components/ui/tooltips';
import {
  DialogMenu,
  DialogMenuClose,
  DialogMenuDescription,
  DialogMenuTitle,
} from '@/components/ui/dialog';

const Datatable = ({
  accounts = [],
  fetchUsers,
}: {
  accounts: TAccounts;
  fetchUsers: () => void;
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openEditCreate, setOpenEditCreate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [accountDetails, setAccountDetails] = useState({});

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
                shape='rounded'
                size='xs'
                onClick={() => handleDetails(props.row.original)}
              >
                <ViewIcon />
              </Button>
            </ToolTip>
            <ToolTip title='Edit' className='text-xs'>
              <Button
                variant='primary'
                shape='rounded'
                size='xs'
                onClick={() => setOpenEditCreate(true)}
              >
                <EditIcon />
              </Button>
            </ToolTip>
            <ToolTip title='Delete' className='text-xs'>
              <Button
                variant='danger'
                shape='rounded'
                size='xs'
                onClick={() => setOpenDelete(true)}
              >
                <TrashIcon />
              </Button>
            </ToolTip>
          </div>
        ),
      }),
      ...columns,
    ],
    [],
  );

  const table = useReactTable({
    columns: tableColumns,
    data: tableData as any,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleDetails = (data: any) => {
    setOpenDetail(true);
    setAccountDetails(data);
  };

  return (
    <>
      <Button
        variant='primary'
        shape='rounded'
        size='sm'
        onClick={() => fetchUsers()}
      >
        <AddIcon />
        Create Account
      </Button>

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

      <EditCreateAccountModal
        open={openEditCreate}
        onOpenChange={setOpenEditCreate}
      />

      <DetailAccountModal
        open={openDetail}
        onOpenChange={setOpenDetail}
        details={accountDetails}
      />

      <DeleteDialog open={openDelete} onOpenChange={setOpenDelete} />
    </>
  );
};

export default Datatable;

const EditCreateAccountModal = ({
  open = false,
  onOpenChange,
}: {
  open?: boolean;
  onOpenChange?: any;
}) => (
  <DialogMenu open={open} onOpenChange={onOpenChange} modal>
    <DialogMenuTitle>Create Account</DialogMenuTitle>
    <DialogMenuDescription>Your Form here</DialogMenuDescription>
    <DialogMenuClose position='right'>
      <Button variant='primary' size='md' shape='rounded'>
        Create
      </Button>
    </DialogMenuClose>
  </DialogMenu>
);

const DetailAccountModal = ({
  open = false,
  onOpenChange,
  details,
}: {
  open?: boolean;
  onOpenChange?: any;
  details?: any;
}) => (
  <DialogMenu open={open} onOpenChange={onOpenChange} modal>
    <DialogMenuTitle>Details Account</DialogMenuTitle>
    <DialogMenuClose closeIcon />
    <DialogMenuDescription asChild>
      <pre>{JSON.stringify(details, null, 2)}</pre>
    </DialogMenuDescription>
    <DialogMenuClose position='right'>
      <Button variant='outline' size='md' shape='rounded'>
        Close
      </Button>
    </DialogMenuClose>
  </DialogMenu>
);

const DeleteDialog = ({
  open = false,
  onOpenChange,
}: {
  open?: boolean;
  onOpenChange?: any;
}) => (
  <DialogMenu
    open={open}
    onOpenChange={onOpenChange}
    className='w-96'
  >
    <DialogMenuTitle>Delete Account</DialogMenuTitle>
    <DialogMenuDescription>Your Form here</DialogMenuDescription>
    <DialogMenuClose position='right'>
      <Button variant='danger' size='md' shape='rounded'>
        Yes
      </Button>
    </DialogMenuClose>
  </DialogMenu>
);
