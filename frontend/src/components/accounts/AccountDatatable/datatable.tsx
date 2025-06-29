import { useState, useMemo, useEffect } from 'react';
import { TUsers as TAccounts } from '@/stores/accountStore/type';
import { useAccountStore } from '@/stores/accountStore';
import { columns, columnHelper } from './constants';
import { Button } from '@/components/ui/button';
import {
  AddIcon,
  EditIcon,
  PasswordIcon,
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
import ChangePasswordForm from '@/features/account/changePassword/form';
import { Datatable } from '@/components/Datatable';

const AccountDatatable = () => {
  const {
    users: accounts,
    size,
    page,
    filters,
    totalUsers,
    isLoading,
    getUsersPaginated: fetchUsersPaginated,
    setSize,
    setPage,
    setFilters,
  } = useAccountStore();
  const [openDetail, setOpenDetail] = useState(false);
  const [openCreateEdit, setOpenCreateEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [accountDetails, setAccountDetails] = useState({});

  useEffect(() => {
    setPage(1);
  }, [setPage]);

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
            <ToolTip title='Change Password' className='text-xs'>
              <Button
                theme='fill-success'
                shape='rounded'
                size='xs'
                onClick={() =>
                  handleChangePassword(props.row.original)
                }
              >
                <PasswordIcon />
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

  const handleChangePassword = (data = {}): any => {
    setOpenChangePassword(true);
    setAccountDetails(data);
  };

  return (
    <>
      <div className='gap-x-1 flex'>
        <Button
          theme='fill-success'
          shape='rounded'
          size='sm'
          onClick={() => fetchUsersPaginated(page, size, filters)}
          isLoading={isLoading}
        >
          <ReloadIcon />
        </Button>

        <Button
          theme='fill-primary'
          shape='rounded'
          size='sm'
          onClick={() => handleCreateEdit()}
          disabled={isLoading}
        >
          <AddIcon />
          Create Account
        </Button>
      </div>

      <Datatable
        rowData={tableData as TAccounts}
        columnData={tableColumns}
        isLoading={isLoading}
        size={size}
        page={page}
        total={totalUsers}
        searchBar
        fnQuery={fetchUsersPaginated}
        fnSetSize={setSize}
        fnSetFilters={setFilters}
      />

      <CreateEditAccountModal
        open={openCreateEdit}
        onOpenChange={setOpenCreateEdit}
        data={accountDetails}
      />

      <ChangePasswordModal
        open={openChangePassword}
        onOpenChange={setOpenChangePassword}
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

export default AccountDatatable;

const ChangePasswordModal = ({
  open = false,
  onOpenChange,
  data = {},
}: {
  open?: boolean;
  onOpenChange?: any;
  data?: any;
}) => (
  <DialogMenu open={open} onOpenChange={onOpenChange} modal>
    <DialogMenuTitle>Account Change Password</DialogMenuTitle>
    <DialogMenuClose closeIcon />
    <DialogMenuDescription asChild>
      <ChangePasswordForm data={data} onClose={onOpenChange} />
    </DialogMenuDescription>
  </DialogMenu>
);

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
      <CreateAccountForm data={data} onClose={onOpenChange} />
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
