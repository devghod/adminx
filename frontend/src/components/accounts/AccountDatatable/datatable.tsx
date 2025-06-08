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
  ReloadIcon,
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
import CreateAccountForm from '@/features/account/createEdit/form';
import DeleteAccount from '@/features/account/delete/form';

const Datatable = ({
  accounts = [],
  fetchUsers,
}: {
  accounts: TAccounts;
  fetchUsers: () => void;
}) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openCreateEdit, setOpenCreateEdit] = useState(false);
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
                theme='fill-primary'
                shape='rounded'
                size='xs'
                onClick={() => handleDetails(props.row.original)}
              >
                <ViewIcon />
              </Button>
            </ToolTip>
            <ToolTip title='Edit' className='text-xs'>
              <Button
                theme='fill-primary'
                shape='rounded'
                size='xs'
                onClick={() => handleCreateEdit(props.row.original)}
              >
                <EditIcon />
              </Button>
            </ToolTip>
            <ToolTip title='Delete' className='text-xs'>
              <Button
                theme='fill-danger'
                shape='rounded'
                size='xs'
                onClick={() => handleDelete(props.row.original)}
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

  const handleDetails = (data = {}): any => {
    setOpenDetail(true);
    setAccountDetails(data);
  };

  const handleCreateEdit = (data = {}): any => {
    setOpenCreateEdit(true);
    setAccountDetails(data);
  };

  const handleDelete = (data = {}): any => {
    setOpenDelete(true);
    setAccountDetails(data);
  };

  return (
    <>
      <div className='gap-x-1 flex'>
        <Button
          theme='fill-success'
          shape='rounded'
          size='sm'
          onClick={fetchUsers}
        >
          <ReloadIcon />
        </Button>

        <Button
          theme='fill-primary'
          shape='rounded'
          size='sm'
          onClick={() => handleCreateEdit()}
        >
          <AddIcon />
          Create Account
        </Button>
      </div>

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

      <CreateEditAccountModal
        open={openCreateEdit}
        onOpenChange={setOpenCreateEdit}
        data={accountDetails}
      />

      <DetailAccountModal
        open={openDetail}
        onOpenChange={setOpenDetail}
        details={accountDetails}
      />

      <DeleteDialog
        open={openDelete}
        onOpenChange={setOpenDelete}
        data={accountDetails}
      />
    </>
  );
};

export default Datatable;

const CreateEditAccountModal = ({
  open = false,
  onOpenChange,
  data = {},
}: {
  open?: boolean;
  onOpenChange?: any;
  data?: any;
}) => (
  <DialogMenu open={open} onOpenChange={onOpenChange} modal>
    <DialogMenuTitle>
      {data && data?._id ? 'Edit' : 'Create'} Account
    </DialogMenuTitle>
    <DialogMenuClose closeIcon />
    <DialogMenuDescription asChild>
      <CreateAccountForm data={data} />
    </DialogMenuDescription>
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
  </DialogMenu>
);

const DeleteDialog = ({
  open = false,
  onOpenChange,
  data = {},
}: {
  open?: boolean;
  onOpenChange?: any;
  data?: any;
}) => (
  <DialogMenu
    open={open}
    onOpenChange={onOpenChange}
    className='w-96'
  >
    <DialogMenuTitle>Delete Account</DialogMenuTitle>
    <DialogMenuDescription asChild>
      <DeleteAccount data={data} onClose={onOpenChange} />
    </DialogMenuDescription>
  </DialogMenu>
);
