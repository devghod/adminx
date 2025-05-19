'use client';

import { useEffect } from 'react';
import { useAccountStore } from '@/stores/accountStore';
import { CardListComponent } from '@/components/ui/CardList';

const AccountPage = () => {
  const { getUsers, users, isLoading } = useAccountStore();

  useEffect(() => {
    const fnGetUsers = () => getUsers();
    fnGetUsers();
  }, [getUsers]);

  return (
    <>
      <CardListComponent users={users} isLoading={isLoading} />
    </>
  );
};

export default AccountPage;
