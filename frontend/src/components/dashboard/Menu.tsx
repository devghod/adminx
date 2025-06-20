'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { HomeIcon, ServicesIcon, UsersIcon } from '../ui/icons';
import {
  NavMenuIndicator,
  NavMenuItem,
  NavMenuLink,
  NavMenuList,
  NavMenuRoot,
} from '../ui/navigationMenu';

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

const ProfileData = {
  email: 'admin@mail.com',
  name: 'Admin Level',
  profile: 'https://placehold.co/32x32',
};

const fallbackImg =
  'data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg==';

const Link = ({ href, ...props }: any) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return <NavMenuLink href={href} {...props} active={isActive} />;
};

const MenuDashboard = () => {
  return (
    <>
      <div className='inset-shadow-sm dark:inset-shadow-gray-800/50 border-b border-slate-100 dark:border-slate-800'>
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
    <div className='py-4 px-6 inset-shadow-sm dark:inset-shadow-gray-800/50 border-b border-slate-100 dark:border-slate-800'>
      <ProfileDetails
        src={ProfileData.profile}
        fallbackSrc={fallbackImg}
        data={ProfileData}
      />
    </div>
  );
};

const ProfileDetails = ({
  src,
  fallbackSrc,
  data,
}: {
  src: string;
  fallbackSrc: string;
  data: any;
}) => {
  const [mounted, setMounted] = useState(false);
  const [img, setImg] = useState(src);

  useEffect(() => setMounted(true), []);

  function handleImgFallback() {
    setImg(fallbackSrc);
  }

  if (!mounted)
    return (
      <Image
        src={fallbackImg}
        style={{ width: 'auto', height: 'auto' }}
        width={32}
        height={32}
        sizes='32x32'
        alt='Loading Profile'
      />
    );

  return (
    <div className='flex space-x-4'>
      <Image
        src={img}
        width={32}
        height={32}
        sizes='32x32'
        alt='Profile Image'
        style={{ width: 'auto', height: 'auto' }}
        onError={handleImgFallback}
        blurDataURL={fallbackImg}
        loading='lazy'
      />
      <div className=''>
        <div className='text-sm font-medium text-gray-800 dark:text-gray-300'>
          {`${data?.name ? data.name : 'Not assigned'}`}
        </div>
        <div className='text-sm text-gray-500'>
          {`${data?.email ? data.email : 'Not assigned'}`}
        </div>
      </div>
    </div>
  );
};
