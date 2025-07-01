'use client';

import {
  HomeIcon,
  ServicesIcon,
  UsersIcon,
} from '@/components/ui/icons';
import {
  NavMenuIndicator,
  NavMenuItem,
  NavMenuList,
  NavMenuRoot,
} from '@/components/ui/navigationMenu';
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
];

const MenuDashboard = () => (
  <NavMenuRoot>
    <NavMenuList className='py-1 space-y-1'>
      {MenuData.map(({ title, url, icon }, index) => (
        <NavMenuItem key={index}>
          <MenuLink href={url} title={title} icon={icon} />
        </NavMenuItem>
      ))}
      <NavMenuIndicator />
    </NavMenuList>
  </NavMenuRoot>
);

export default MenuDashboard;
