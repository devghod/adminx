'use client';

import { useState } from 'react';
import {
  HomeIcon,
  ServicesIcon,
  UsersIcon,
  TradeIcon,
  OpenSidebarSolidIcon,
  CloseSidebarSolidIcon,
} from '@/components/ui/icons';
import {
  NavMenuIndicator,
  NavMenuItem,
  NavMenuList,
  NavMenuRoot,
} from '@/components/ui/navigationMenu';
import { Button } from '@/components/ui/button';
import MenuLink from '@/components/dashboard/MenuLink';

const MenuData = [
  {
    title: 'Main',
    url: '/dashboard',
    icon: <HomeIcon className='w-5 h-5' />,
  },
  {
    title: 'Accounts',
    url: '/dashboard/accounts',
    icon: <UsersIcon className='w-5 h-5' />,
  },
  {
    title: 'Services',
    url: '/dashboard/services',
    icon: <ServicesIcon className='w-5 h-5' />,
  },
  {
    title: 'Trades',
    url: '/dashboard/trades',
    icon: <TradeIcon className='w-5 h-5' />,
  },
];

const MenuDashboard = () => {
  const [isShrink, setIsShrink] = useState<boolean>(false);

  const handleShrink = () =>
    isShrink ? setIsShrink(false) : setIsShrink(true);

  return (
    <div
      className={`transition-all duration-500
        ${isShrink ? 'w-40 md:w-64' : 'w-16'}`}
    >
      <div className='w-full text-right h-5'>
        <Button
          className='p-0 h-5 w-5 dark:text-slate-400'
          onClick={() => handleShrink()}
        >
          {isShrink ? (
            <CloseSidebarSolidIcon />
          ) : (
            <OpenSidebarSolidIcon />
          )}
        </Button>
      </div>
      <NavMenuRoot>
        <NavMenuList className='py-1 space-y-1'>
          {MenuData.map(({ title, url, icon }, index) => (
            <NavMenuItem key={index}>
              <MenuLink
                href={url}
                title={title}
                icon={icon}
                isShrink={isShrink}
              />
            </NavMenuItem>
          ))}
          <NavMenuIndicator />
        </NavMenuList>
      </NavMenuRoot>
    </div>
  );
};

export default MenuDashboard;
