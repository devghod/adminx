'use client';

import { useEffect } from 'react';
import { useAccountStore } from '@/stores/accountStore';
import { CardList } from '@/components/accounts/CardList';

const AccountPage = () => {
  const { getUsers, users, isLoading } = useAccountStore();

  useEffect(() => {
    const fnGetUsers = () => getUsers();
    fnGetUsers();
  }, [getUsers]);

  return (
    <>
      <CardList users={users} isLoading={isLoading} />
    </>
  );
};

export default AccountPage;
