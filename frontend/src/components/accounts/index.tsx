import { useEffect } from 'react';
import { useAccountStore } from '@/stores/accountStore';
import AccountDatatable from './AccountDatatable/AccountDatatable';

const Account = () => {
  const { getUsers, users, isLoading } = useAccountStore();

  useEffect(() => {
    const fnGetUsers = () => getUsers();
    fnGetUsers();
  }, [getUsers]);

  return (
    <>
      <AccountDatatable accounts={users} isLoading={isLoading} />
    </>
  );
};

export default Account;
