'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const dialogMenuContentVariants = cva(
  'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6',
);

/**
 * DialogMenu arguments
 * {
 *   open: display
 *   onOpenChange: function
 *   modal: if modal or dialog view
 * }
 */
const DialogMenu = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    VariantProps<typeof dialogMenuContentVariants> & {
      className?: string;
      open: boolean;
      onOpenChange: (open: boolean) => void;
      modal?: boolean;
    }
>(
  (
    {
      children,
      className,
      open,
      onOpenChange,
      modal = false, // default to false = dialog, true = modal
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <DialogPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        modal={modal}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className='fixed inset-0 bg-black opacity-30' />
          <DialogPrimitive.Content
            className={cn(dialogMenuContentVariants(), className)}
            ref={forwardedRef}
            {...props}
          >
            {children}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  },
);

DialogMenu.displayName = 'DialogMenu';

const DialogMenuTrigger = DialogPrimitive.Trigger;

const dialogMenuTitleVariants = cva('text-lg font-bold');

const DialogMenuTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Title
    className={cn(dialogMenuTitleVariants())}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </DialogPrimitive.Title>
));

DialogMenuTitle.displayName = 'DialogMenuTitle';

const dialogMenuDescriptionVariants = cva(
  'mt-2 text-sm text-gray-600',
);

const DialogMenuDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Description
    className={cn(dialogMenuDescriptionVariants())}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </DialogPrimitive.Description>
));

DialogMenuDescription.displayName = 'DialogMenuDescription';

const DialogMenuOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Overlay {...props} ref={forwardedRef}>
    {children}
  </DialogPrimitive.Overlay>
));

DialogMenuOverlay.displayName = 'DialogMenuOverlay';

const dialogMenuCloseVariants = cva(
  'absolute flex items-center justify-center transition',
  {
    variants: {
      position: {
        topRight: 'top-2 right-2',
        topLeft: 'top-2 left-2',
        bottomRight: 'bottom-2 right-2',
        bottomLeft: 'bottom-2 left-2',
      },
    },
    defaultVariants: {
      position: 'topRight',
    },
  },
);

const DialogMenuClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close> &
    VariantProps<typeof dialogMenuCloseVariants> & {
      position?: string;
    }
>(({ children, className, position, ...props }, forwardedRef) => (
  <DialogPrimitive.Close
    {...props}
    ref={forwardedRef}
    asChild
    className={cn(dialogMenuCloseVariants({ position }), className)}
  >
    {children}
  </DialogPrimitive.Close>
));

DialogMenuClose.displayName = 'DialogMenuClose';

export {
  DialogMenu,
  DialogMenuTrigger,
  DialogMenuOverlay,
  DialogMenuTitle,
  DialogMenuDescription,
  DialogMenuClose,
};
