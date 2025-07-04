'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import {
  CheckIcon,
  DividerHorizontalIcon,
} from '@radix-ui/react-icons';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuArrow = DropdownMenuPrimitive.Arrow;

const dropdownMenuContentVariants = cva(
  'min-w-[220px] rounded-md bg-gray-50 dark:bg-gray-950 py-2 px-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade',
);

/**
 * @param {VariantProps<typeof dropdownMenuContentVariants>}
 * @param {string} className
 * @param {React.ReactNode} children
 * @param {React.Ref<HTMLDivElement>} forwardedRef
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>}
 */
const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<
    typeof DropdownMenuPrimitive.Content
  > &
    VariantProps<typeof dropdownMenuItemVariants> & {
      className?: string;
    }
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={cn(dropdownMenuContentVariants(), className)}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
});

DropdownMenuContent.displayName = 'DropdownMenuContent';

const DropdownMenuLabel = DropdownMenuPrimitive.Label;

const dropdownMenuItemVariants = cva(
  'group relative font-semibold flex h-[25px] select-none items-center justify-between rounded hover:bg-sky-200 dark:hover:bg-sky-500 p-4 text-[13px] leading-none outline-none',
);

/**
 * @param {VariantProps<typeof dropdownMenuItemVariants>}
 * @param {string} className
 * @param {React.ReactNode} children
 * @param {React.Ref<HTMLDivElement>} forwardedRef
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>}
 * @param {React.MouseEventHandler<HTMLDivElement>} onClick
 * @param {React.MouseEventHandler<HTMLDivElement>} onMouseEnter
 * @param {React.MouseEventHandler<HTMLDivElement>} onMouseLeave
 */
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> &
    VariantProps<typeof dropdownMenuItemVariants> & {
      className?: string;
      onClick?: React.MouseEventHandler<HTMLDivElement>;
      onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
      onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    }
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Item
      {...props}
      ref={forwardedRef}
      className={cn(dropdownMenuItemVariants(), className)}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
});

DropdownMenuItem.displayName = 'DropdownMenuItem';

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

type CheckboxItemProps = React.ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.CheckboxItem
> & {
  checked?: boolean | 'indeterminate';
};

/**
 * @param {React.ReactNode} children
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>}
 * @param {string} className
 * @param {React.Ref<HTMLDivElement>} forwardedRef
 * @param {string} checked
 */
const DropdownMenuCheckboxItem = React.forwardRef<
  HTMLInputElement,
  CheckboxItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem {...props} ref={forwardedRef}>
      {children}
      <DropdownMenuPrimitive.ItemIndicator>
        {props.checked === 'indeterminate' && (
          <DividerHorizontalIcon />
        )}
        {props.checked === true && <CheckIcon />}
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.CheckboxItem>
  );
});

DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/**
 * @param {React.ReactNode} children
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>}
 * @param {string} className
 * @param {React.Ref<HTMLDivElement>} forwardedRef
 */
const DropdownMenuRadioItem = React.forwardRef<
  HTMLInputElement,
  { value: string; children: React.ReactNode }
>(({ children, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.RadioItem {...props} ref={forwardedRef}>
      {children}
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.RadioItem>
  );
});

DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

/**
 * @param {string} className
 * @param {React.Ref<HTMLDivElement>} forwardedRef
 * @param {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>}
 */
const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<
    typeof DropdownMenuPrimitive.Separator
  >
>(({ ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Separator {...props} ref={forwardedRef} />
  );
});

DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuArrow,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
};
