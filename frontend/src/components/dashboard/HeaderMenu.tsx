'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdownMenu';
import {
  GearIcon,
  LogOutIcon,
  MenuIcon,
  UsersIcon,
} from '@/components/ui/icons';
import { logout } from '@/features/login/authentications';

const HeaderMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='IconButton' aria-label='Customise options'>
          <MenuIcon />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='space-y-1'>
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
