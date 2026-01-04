'use client';

import * as React from 'react';
import * as NavMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';

const NavMenuRoot = NavMenuPrimitive.Root;
const NavMenuTrigger = NavMenuPrimitive.Trigger;
const NavMenuContent = NavMenuPrimitive.Content;

const navMenuLinkVariants = cva(`
  flex 
  w-full 
  transition-all
  delay-150
  mx-1
  py-2 
  px-4 
  data-active:rounded-lg
  data-active:border-slate-500/10
  data-active:bg-cyan-600
  data-active:dark:bg-gray-800
  border
  border-transparent
  rounded-lg
  hover:dark:border-violet-500/10
  hover:bg-cyan-500/20
  hover:text-cyan-700
  hover:dark:text-cyan-500
  hover:dark:bg-gray-900
`);

const NavMenuLink = React.forwardRef<
  React.ElementRef<typeof NavMenuPrimitive.Link>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavMenuPrimitive.Link>,
    'onSelect'
  > & {
    className?: string;
    active?: boolean;
  }
>(({ children, className, active, ...props }, forwardedRef) => (
  <NavMenuPrimitive.Link
    {...props}
    asChild
    active={active}
    ref={forwardedRef}
    className={cn(navMenuLinkVariants(), className)}
  >
    {children}
  </NavMenuPrimitive.Link>
));

NavMenuLink.displayName = 'NavMenuLink';

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
