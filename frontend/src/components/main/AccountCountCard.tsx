'use client';

import { UsersNetworkIcon } from '@/components/ui/icons';
import { useAccountStore } from '@/stores/accountStore';
import { useEffect, useMemo } from 'react';

const AccountCountCard = () => {
  const { getUsersStatistics, statistics, isLoading } =
    useAccountStore();

  const data = useMemo(() => statistics, [statistics]);

  useEffect(() => {
    getUsersStatistics();
  }, [getUsersStatistics]);

  if (isLoading) return <Skeleton />;

  return (
    <div className='w-40 px-6 py-5 shadow-xl rounded-xl bg-white dark:bg-black'>
      <div className='font-bold'>Accounts</div>
      <div className='flex flex-col gap-y-2 mt-4'>
        <div className='flex gap-x-4'>
          <UsersNetworkIcon className='bg-green-500/20 text-green-500 p-1 rounded w-7 h-7 self-center' />
          <div className=''>
            <div className='font-semibold'>
              {data.activeCount ?? 0}
            </div>
            <div className='text-green-500 font-semibold text-sm'>
              Active
            </div>
          </div>
        </div>
        <div className='flex gap-x-4'>
          <UsersNetworkIcon className='bg-red-500/20 text-red-500 p-1 rounded w-7 h-7 self-center' />
          <div className=''>
            <div className='font-semibold'>
              {data.inactiveCount ?? 0}
            </div>
            <div className='text-red-500 font-semibold text-sm'>
              Inactive
            </div>
          </div>
        </div>
        <div className='flex gap-x-4'>
          <UsersNetworkIcon className='bg-gray-500/20 text-gray-500 p-1 rounded w-7 h-7 self-center' />
          <div className=''>
            <div className='font-semibold'>{data.holdCount ?? 0}</div>
            <div className='text-gray-500 font-semibold text-sm'>
              Hold
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCountCard;

const Skeleton = () => (
  <div className='w-40 border px-6 py-5 rounded-lg bg-white dark:bg-black'>
    <div className='font-bold'>Accounts</div>
    <div className='flex flex-col gap-y-2 mt-4'>
      <div className='flex gap-x-4'>
        <UsersNetworkIcon className='bg-green-500/20 text-green-500 p-1 rounded w-7 h-7 self-center' />
        <div className=''>
          <div className='rounded-full w-12 h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
          <div className='text-green-500 font-semibold text-sm'>
            Active
          </div>
        </div>
      </div>
      <div className='flex gap-x-4'>
        <UsersNetworkIcon className='bg-red-500/20 text-red-500 p-1 rounded w-7 h-7 self-center' />
        <div className=''>
          <div className='rounded-full w-12 h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
          <div className='text-red-500 font-semibold text-sm'>
            Inactive
          </div>
        </div>
      </div>
      <div className='flex gap-x-4'>
        <UsersNetworkIcon className='bg-gray-500/20 text-gray-500 p-1 rounded w-7 h-7 self-center' />
        <div className=''>
          <div className='rounded-full w-12 h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
          <div className='text-gray-500 font-semibold text-sm'>
            Hold
          </div>
        </div>
      </div>
    </div>
  </div>
);
