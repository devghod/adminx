'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const DialogMenu = DialogPrimitive.Root;
const DialogMenuTrigger = DialogPrimitive.Trigger;

// const DialogMenu = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> 
// >(({ children, ...props }, forwardedRef) => (
//   <DialogPrimitive.Root
//     {...props}
//     ref={forwardedRef}
//   >
//     {children}
//   </DialogPrimitive.Root>
// ));

// const DialogMenu = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof DialogPrimitive.Root>>(
//   ({ children, ...props }) => (
//     <DialogPrimitive.Root {...props}>
//       {children}
//     </DialogPrimitive.Root>
//   )
// );

// const DialogMenuTrigger = React.forwardRef<
//   HTMLDivElement,
//   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> 
// >(({ children, ...props }) => (
//   <DialogPrimitive.Trigger
//     {...props}
//   >
//     {children}
//   </DialogPrimitive.Trigger>
// ));

const dialogMenuContentVariants = cva(
  'fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow',
);

const DialogMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    VariantProps<typeof dialogMenuItemVariants> & {
      className?: string;
    }
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DialogPrimitive.Portal>
      {/* <DialogPrimitive.Overlay className='fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow' /> */}
      <DialogPrimitive.Overlay />
      <DialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        className={cn(dialogMenuContentVariants(), className)}
      >
        {children}
        <DialogPrimitive.Close asChild />
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

const dialogMenuItemVariants = cva(
  'group relative font-semibold flex h-[25px] select-none items-center justify-between rounded hover:bg-sky-200 dark:hover:bg-sky-500 p-4 text-[13px] leading-none outline-none',
);

const DialogMenuTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> 
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Title
    {...props}
    ref={forwardedRef}
  >
    {children}
  </DialogPrimitive.Title>
));

const DialogMenuDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> 
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Description
    {...props}
    ref={forwardedRef}
  >
    {children}
  </DialogPrimitive.Description>
));

const DialogMenuOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> 
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Overlay
    {...props}
    ref={forwardedRef}
  >
    {children}
  </DialogPrimitive.Overlay>
));

export {
  DialogMenu,
  DialogMenuTrigger,
  DialogMenuContent,
  DialogMenuTitle,
  DialogMenuDescription,
  DialogMenuOverlay,
}