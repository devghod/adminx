import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';
import { LoadingIcon } from './icons';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      theme: {
        'fill-primary':
          'bg-blue-500 dark:bg-blue-500/50 text-gray-50 hover:bg-blue-500/90',
        'fill-success':
          'bg-teal-600 dark:bg-teal-600/50 text-gray-50 hover:bg-teal-600/90',
        'fill-danger':
          'bg-red-500 dark:bg-red-500/50 text-gray-50 hover:bg-red-500/90',
        'fill-warning':
          'bg-amber-600 dark:bg-amber-600/50 text-gray-50 hover:bg-amber-600/90',
        'fill-info':
          'bg-sky-600 dark:bg-sky-600/50 text-gray-50 hover:bg-sky-600/90',
        'fill-neutral':
          'bg-gray-600 dark:bg-gray-300/50 text-gray-50 hover:bg-gray-600/90',

        'outline-primary':
          'border border-blue-500 bg-white text-blue-500 hover:bg-blue-50 hover:text-blue-700',
        'outline-success':
          'border border-teal-600 bg-white text-teal-600 hover:bg-teal-50 hover:text-teal-700',
        'outline-danger':
          'border border-red-500 bg-white text-red-500 hover:bg-red-50 hover:text-red-700',
        'outline-warning':
          'border border-amber-600 bg-white text-amber-600 hover:bg-amber-50 hover:text-amber-700',
        'outline-info':
          'border border-sky-600 bg-white text-sky-600 hover:bg-sky-50 hover:text-sky-700',
        'outline-neutral':
          'border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-700',

        'ghost-primary':
          'bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700',
        'ghost-success':
          'bg-transparent text-teal-600 hover:bg-teal-50 hover:text-teal-700',
        'ghost-danger':
          'bg-transparent text-red-500 hover:bg-red-50 hover:text-red-700',
        'ghost-warning':
          'bg-transparent text-amber-600 hover:bg-amber-50 hover:text-amber-700',
        'ghost-info':
          'bg-transparent text-sky-600 hover:bg-sky-50 hover:text-sky-700',
        'ghost-neutral':
          'bg-transparent text-gray-300 hover:bg-gray-50 hover:text-gray-700',

        'link-primary':
          'text-blue-500 underline-offset-4 hover:underline',
        'link-success':
          'text-teal-600 underline-offset-4 hover:underline',
        'link-danger':
          'text-red-500 underline-offset-4 hover:underline',
        'link-warning':
          'text-amber-600 underline-offset-4 hover:underline',
        'link-info':
          'text-sky-600 underline-offset-4 hover:underline',
        'link-neutral':
          'text-gray-300 underline-offset-4 hover:underline',
      },
      size: {
        xs: 'rounded-md p-1',
        sm: 'rounded-md px-2 py-1',
        md: 'rounded-md px-3 py-2',
        lg: 'rounded-md px-4 py-3',
        icon: 'p-2',
      },
      shape: {
        rounded: 'rounded-md',
        square: 'rounded-none',
        pill: 'rounded-full',
      },
    },
    defaultVariants: {
      theme: 'ghost-neutral',
      size: 'md',
      shape: 'square',
    },
  },
);

/**
 * @param {string} className
 * @param {VariantProps<typeof buttonVariants>} variant
 * @param {VariantProps<typeof buttonVariants>} size ['default' | 'xs' | 'sm' | 'md' | 'lg']
 */
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
      isLoading?: boolean;
      loadingText?: string;
    }
>(
  (
    {
      className,
      children,
      theme,
      size,
      shape,
      loadingText,
      isLoading = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ size, shape, theme }),
          className,
        )}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? loadingText || <LoadingIcon /> : children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button };
