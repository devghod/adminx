'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';
import * as DialogPrimative from '@radix-ui/react-dialog';

export const DialogMenu = DialogPrimative.Root;
export const DialogMenuTrigger = DialogPrimative.Trigger;
export const DialogMenuTitle = DialogPrimative.Title;
export const DialogMenuDescription = DialogPrimative.Description;
export const DialogMenuOverlay = DialogPrimative.Overlay;

const dialogMenuContentVariants = cva(
  'min-w-[220px] rounded-md bg-gray-50 dark:bg-gray-950 py-2 px-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade',
);

export const DialogMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<
    typeof DialogPrimative.Content
  > &
    VariantProps<typeof dialogMenuItemVariants> & {
      className?: string;
    }
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DialogPrimative.Portal>
      <DialogPrimative.Content
        {...props}
        ref={forwardedRef}
        className={cn(dialogMenuContentVariants(), className)}
      >
        {children}
        <DialogPrimative.Close />
      </DialogPrimative.Content>
    </DialogPrimative.Portal>
  );
});

const dialogMenuItemVariants = cva(
  'group relative font-semibold flex h-[25px] select-none items-center justify-between rounded hover:bg-sky-200 dark:hover:bg-sky-500 p-4 text-[13px] leading-none outline-none',
);