'use client';

import * as React from 'react';
import * as NavMenuPrimitive from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';

const NavMenuRoot = NavMenuPrimitive.Root;

const NavMenuList = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavMenuPrimitive.List>
>(({ children, ...props }, forwardedRef) => {
  return (
    <NavMenuPrimitive.List {...props} ref={forwardedRef}>
      {children}
    </NavMenuPrimitive.List>
  );
});

NavMenuList.displayName = 'NavMenuList';

const navMenuItemVariants = cva('flex rounded mx-1');

const NavMenuItem = React.forwardRef<
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

NavMenuItem.displayName = 'NavMenuItem';

const NavMenuTrigger = NavMenuPrimitive.Trigger;
const NavMenuContent = NavMenuPrimitive.Content;

const navMenuLinkVariants = cva(`
  flex 
  w-full 
  data-active:text-white 
  data-active:bg-black
  data-active:hover:text-black 
  data-active:hover:bg-sky-200 
  data-active:dark:bg-gray-700 
  data-active:dark:hover:text-slate-900 
  data-active:dark:hover:bg-sky-500
  rounded 
  text-slate-800 
  dark:text-slate-200 
  py-1.5 
  px-4 
  font-medium 
  hover:bg-sky-200 
  dark:hover:bg-sky-500 mx-1`);

const NavMenuLink = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.Link>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavMenuPrimitive.Link>,
    'onSelect'
  > &
    VariantProps<typeof navMenuLinkVariants> & {
      className?: string;
      title: string;
      href: string;
      active?: boolean;
      icon?: React.ReactNode;
    }
>(({ className, title, icon, active, ...props }, forwardedRef) => (
  <NavMenuPrimitive.Link asChild active={active}>
    <Link
      {...props}
      ref={forwardedRef}
      className={cn(navMenuLinkVariants(), className)}
    >
      <div className='mr-4 text-xs h-[2px] font-bold'>{icon}</div>
      <div className=''>{title}</div>
    </Link>
  </NavMenuPrimitive.Link>
));

NavMenuLink.displayName = 'NavMenuLink';

const navMenuIndicatorVariants = cva('bg-sky-500');

const NavMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavMenuPrimitive.Indicator> &
    VariantProps<typeof navMenuIndicatorVariants> & {
      className?: string;
    }
>(({ className, ...props }, ref) => {
  return (
    <NavMenuPrimitive.Indicator
      {...props}
      className={cn(navMenuIndicatorVariants(), className)}
      ref={ref}
      forceMount
    />
  );
});

NavMenuIndicator.displayName = 'NavMenuIndicator';

export {
  NavMenuRoot,
  NavMenuList,
  NavMenuItem,
  NavMenuTrigger,
  NavMenuContent,
  NavMenuLink,
  NavMenuIndicator,
};
