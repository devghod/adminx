'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdownMenu';
import {
  ArrowDownIcon,
  GearIcon,
  LogOutIcon,
  UsersIcon,
  UserIcon,
  UserMaleIcon,
  UserFemaleIcon,
} from '@/components/ui/icons';
import { logout } from '@/features/login/authentications';
import { useAccountStore } from '@/stores/accountStore';

const fallbackImg =
  'data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg==';

const HeaderMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className='flex content-center'
          aria-label='Customise options'
        >
          <ProfileSection />
          <div className='content-center'>
            <ArrowDownIcon className='h-6 w-6 text-slate-400' />
          </div>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='space-y-1 border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg p-2 mt-2'>
        <DropdownMenuItem className='text-slate-800 dark:text-slate-200'>
          Profile <UsersIcon />
        </DropdownMenuItem>

        <DropdownMenuItem className='text-slate-800 dark:text-slate-200'>
          Settings <GearIcon />
        </DropdownMenuItem>

        <DropdownMenuSeparator className='h-px bg-slate-200 dark:bg-slate-800' />

        <DropdownMenuItem
          className='text-red-800 dark:text-red-500'
          onClick={() => logout()}
        >
          Logout <LogOutIcon />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;

const ProfileSection = () => {
  const { getProfile } = useAccountStore();

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return <ProfileDetails />;
};

const ProfileDetails = () => {
  const { profile, profileIsLoading: isLoading } = useAccountStore();
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState(profile);
  const [img, setImg] = useState(data?.image);

  useEffect(() => {
    setData(profile);
    setImg(profile?.image);
  }, [profile]);
  useEffect(() => setMounted(true), []);

  function handleImgFallback() {
    setImg(fallbackImg);
  }

  if (!mounted) return <ProfileDetailsSkeleton />;

  return (
    <>
      {isLoading && <ProfileDetailsSkeleton />}
      {!isLoading && mounted && (
        <div className='flex space-x-4 p-2'>
          {img ? (
            <Image
              src={img}
              width={10}
              height={10}
              sizes='10x10'
              alt='Profile Image'
              style={{ width: 'auto', height: 'auto' }}
              onError={handleImgFallback}
              blurDataURL={fallbackImg}
              loading='lazy'
            />
          ) : (
            <NoProfileImage gender={data?.gender} />
          )}
          <div className=''>
            <div className='text-xs font-bold text-gray-800 dark:text-gray-300'>
              {`${data?.first_name && data?.last_name ? `${data.first_name} ${data.last_name}` : 'Not assigned'}`}
            </div>
            <div className='text-xs text-gray-500'>
              {`${data?.email ? data.email : 'Not assigned'}`}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NoProfileImage = ({
  gender,
}: {
  gender: string | undefined;
}) => (
  <>
    {!gender && (
      <UserIcon className='w-10 h-10 bg-gray-500/20 dark:bg-gray-700/70 rounded-full' />
    )}
    {gender === 'male' && (
      <UserMaleIcon className='w-10 h-10 bg-gray-500/20 dark:bg-gray-700/70 rounded-full' />
    )}
    {gender === 'female' && (
      <UserFemaleIcon className='w-10 h-10 bg-gray-500/20 dark:bg-gray-700/70 rounded-full' />
    )}
  </>
);

const ProfileDetailsSkeleton = () => (
  <div className='flex space-x-4'>
    <div className='rounded-full w-10 h-10 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
    <div className='w-40 flex flex-col'>
      <div className='rounded-full w-full h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
      <div className='rounded-full w-full h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
    </div>
  </div>
);
