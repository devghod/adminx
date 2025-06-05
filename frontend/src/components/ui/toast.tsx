import React, { useEffect } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';
import { CloseIcon } from './icons';

const toastTitleVariants = cva('', {
  variants: {
    type: {
      neutral: 'text-gray-500',
      danger: 'text-red-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      info: 'text-blue-500',
    },
  },
  defaultVariants: {
    type: 'neutral',
  },
});

const toastViewPortVariants = cva('', {
  variants: {
    location: {
      topLeft: 'fixed top-0 left-0 flex flex-col gap-2 p-4',
      topRight: 'fixed top-0 right-0 flex flex-col gap-2 p-4',
      bottomLeft: 'fixed bottom-0 left-0 flex flex-col gap-2 p-4',
      bottomRight: 'fixed bottom-0 right-0 flex flex-col gap-2 p-4',
    },
  },
  defaultVariants: {
    location: 'topRight',
  },
});

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Provider> &
    VariantProps<typeof toastViewPortVariants> &
    VariantProps<typeof toastTitleVariants> & {
      open: boolean;
      className?: string;
      title?: string;
      desc?: string;
      type?: 'neutral' | 'danger' | 'success' | 'warning' | 'info';
      location?: string;
      swipeDirection?: 'right' | 'left' | 'up' | 'down';
      duration?: number;
      action?: React.ReactNode;
    }
>(
  (
    {
      children,
      open = false,
      className,
      title,
      desc,
      type,
      location,
      swipeDirection = 'right',
      action,
      duration = 3000,
      ...props
    },
    forwardedRef,
  ) => {
    const [show, setShow] = React.useState(open);
    // const timerRef = React.useRef(0);

    useEffect(() => {
      if (open) {
        setTimeout(() => {
          setShow(false);
        }, duration);
      }
    }, [open, duration]);

    return (
      <ToastPrimitive.Provider
        swipeDirection={swipeDirection}
        duration={duration}
      >
        {children}
        <ToastPrimitive.Root
          {...props}
          open={show}
          ref={forwardedRef}
          className='bg-white w-80 rounded-md border border-gray-200 p-2 shadow-lg'
        >
          {title && (
            <ToastPrimitive.Title
              className={cn(toastTitleVariants({ type }), className)}
            >
              {title}
            </ToastPrimitive.Title>
          )}
          {desc && (
            <ToastPrimitive.Description>
              {desc}
            </ToastPrimitive.Description>
          )}
          {action && (
            <ToastPrimitive.Action asChild altText='Close'>
              {/* {action} */}
            </ToastPrimitive.Action>
          )}
          <ToastPrimitive.Close aria-label='Close'>
            <CloseIcon className='text-red-500' />
          </ToastPrimitive.Close>
        </ToastPrimitive.Root>
        <ToastPrimitive.Viewport
          className={cn(toastViewPortVariants({ location }))}
        />
      </ToastPrimitive.Provider>
    );
  },
);

Toast.displayName = 'Toast';

export { Toast };
