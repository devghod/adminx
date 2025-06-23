'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  HomeIcon,
  ServicesIcon,
  UsersIcon,
  UserIcon,
  UserMaleIcon,
  UserFemaleIcon,
} from '@/components/ui/icons';
import {
  NavMenuIndicator,
  NavMenuItem,
  NavMenuLink,
  NavMenuList,
  NavMenuRoot,
} from '@/components/ui/navigationMenu';
import { useAccountStore } from '@/stores/accountStore';

const MenuData = [
  {
    title: 'Main',
    url: '/dashboard',
    icon: <HomeIcon />,
  },
  {
    title: 'Accounts',
    url: '/dashboard/accounts',
    icon: <UsersIcon />,
  },
  {
    title: 'Services',
    url: '/dashboard/services',
    icon: <ServicesIcon />,
  },
];

const fallbackImg =
  'data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg==';

const Link = ({ href, ...props }: any) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return <NavMenuLink href={href} {...props} active={isActive} />;
};

const MenuDashboard = () => {
  const { getProfile } = useAccountStore();

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <>
      <div className='border-b border-slate-100 dark:border-slate-800'>
        <ProfileSection />
      </div>

      <NavMenuRoot>
        <NavMenuList className='py-1 space-y-2'>
          {MenuData.map(({ title, url, icon }, index) => (
            <NavMenuItem key={index}>
              <Link href={url} title={title} icon={icon} />
            </NavMenuItem>
          ))}
          <NavMenuIndicator />
        </NavMenuList>
      </NavMenuRoot>
    </>
  );
};

export default MenuDashboard;

const ProfileSection = () => {
  return (
    <div className='py-4 px-6 border-b border-slate-100 dark:border-slate-800'>
      <ProfileDetails />
    </div>
  );
};

const ProfileDetails = () => {
  const { profile, isLoading } = useAccountStore();
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
        <div className='flex space-x-4'>
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
            <div className='text-sm font-medium text-gray-800 dark:text-gray-300'>
              {`${data?.first_name && data?.last_name ? `${data.first_name} ${data.last_name}` : 'Not assigned'}`}
            </div>
            <div className='text-sm text-gray-500'>
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
