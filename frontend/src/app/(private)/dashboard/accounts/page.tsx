'use client';

import { useEffect, useState } from 'react';
import { useAccountStore, type TUser } from '@/stores/accountStore';
import { getCookie } from 'cookies-next';

const AccountPage = () => {
  const { getUsers, users, isLoading } = useAccountStore();
  const token = getCookie('session');

  useEffect(() => {
    console.log(token)
    const fnGetUsers = () => getUsers();
    fnGetUsers();
  }, [getUsers]);

  return (
    <>
      Accounts
      {token || 'none'}
    </>
  );
};

export default AccountPage;
