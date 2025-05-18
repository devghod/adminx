'use client';

import * as React from 'react';
import * as NavMenuPrimitive from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';

export const NavMenuRoot = NavMenuPrimitive.Root;

export const NavMenuList = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavMenuPrimitive.List>
>(({ children, ...props }, forwardedRef) => {
  return (
    <NavMenuPrimitive.List {...props} ref={forwardedRef}>
      {children}
    </NavMenuPrimitive.List>
  );
});

const navMenuItemVariants = cva(
  'flex rounded text-slate-800 dark:text-slate-200 font-medium hover:bg-sky-200 dark:hover:bg-sky-500 mx-1',
);

export const NavMenuItem = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavMenuPrimitive.Item> &
    VariantProps<typeof navMenuItemVariants> & {
      className?: string;
      onClick?: React.MouseEventHandler<HTMLDivElement>;
      onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
      onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    }
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <NavMenuPrimitive.Item
      {...props}
      ref={forwardedRef}
      className={cn(navMenuItemVariants(), className)}
    >
      {children}
    </NavMenuPrimitive.Item>
  );
});

export const NavMenuTrigger = NavMenuPrimitive.Trigger;
export const NavMenuContent = NavMenuPrimitive.Content;

const navMenuLinkVariants = cva(
  'flex w-full rounded text-slate-800 dark:text-slate-200 py-1.5 px-4 font-medium hover:bg-sky-200 dark:hover:bg-sky-500 mx-1',
);

export const NavMenuLink = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.Link>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavMenuPrimitive.Link>,
    'onSelect'
  > &
    VariantProps<typeof navMenuLinkVariants> & {
      className?: string;
      title: string;
      href: string;
      icon?: React.ReactNode;
    }
>(({ children, className, title, icon, ...props }, forwardedRef) => {
  return (
    <NavMenuPrimitive.Link asChild>
      <Link
        {...props}
        ref={forwardedRef}
        className={cn(navMenuLinkVariants(), className)}
      >
        <div className='mr-4 text-xs h-[2px] font-bold'>{icon}</div>
        <div className=''>{title}</div>
      </Link>
    </NavMenuPrimitive.Link>
  );
});
