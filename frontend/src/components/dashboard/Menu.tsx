'use client';

import { useEffect, useState, useTransition } from 'react';
import {
  HomeIcon,
  // ServicesIcon,
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
import { ToolTip } from '@/components/ui/tooltips';
import { toggleSidebar, toggleSidebarStatus } from '@/hooks/sidebar';
import MenuLink from '@/components/dashboard/MenuLink';

const MenuData = [
  {
    title: 'Main',
    url: '/dashboard',
    icon: <HomeIcon className='w-5 h-5' />,
  },
  {
    title: 'Account',
    url: '/dashboard/accounts',
    icon: <UsersIcon className='w-5 h-5' />,
  },
  // {
  //   title: 'Service',
  //   url: '/dashboard/services',
  //   icon: <ServicesIcon className='w-5 h-5' />,
  // },
  {
    title: 'Trade',
    url: '/dashboard/trades',
    icon: <TradeIcon className='w-5 h-5' />,
  },
];

const MenuDashboard = () => {
  const [isShrink, setIsShrink] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const handleShrink = () => {
    startTransition(async () => {
      const newState = await toggleSidebar();
      setIsShrink(newState === 'collapsed');
    });
  };

  useEffect(() => {
    startTransition(async () => {
      const newState = await toggleSidebarStatus();
      setIsShrink(newState === 'collapsed');
    });
  }, []);

  return (
    <div
      className={`transition-all duration-500
        ${isShrink ? 'w-17' : 'w-40 md:w-64'}
        ${isPending ? 'opacity-50 pointer-events-none' : ''}
      `}
    >
      <div className='w-full text-right h-5'>
        <Button
          className='p-0 h-5 w-5 dark:text-slate-400'
          onClick={() => handleShrink()}
        >
          {isShrink ? (
            <ToolTip title='Expand' className='text-xs'>
              <OpenSidebarSolidIcon />
            </ToolTip>
          ) : (
            <ToolTip title='Collapse' className='text-xs'>
              <CloseSidebarSolidIcon />
            </ToolTip>
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
