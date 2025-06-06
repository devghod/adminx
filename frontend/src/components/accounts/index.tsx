import { useEffect } from 'react';
import { useAccountStore } from '@/stores/accountStore';
import AccountDatatable from './AccountDatatable';

const Account = () => {
  const { getUsers, users, isLoading } = useAccountStore();

  useEffect(() => {
    fnGetUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUsers]);

  const fnGetUsers = () => getUsers();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <AccountDatatable accounts={users} fetchUsers={fnGetUsers} />
    </>
  );
};

export default Account;
