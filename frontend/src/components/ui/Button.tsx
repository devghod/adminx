import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/tailwindMerge';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-gray-900 dark:bg-gray-900/50 text-gray-50 hover:bg-gray-900/90',
        primary:
          'bg-blue-500 dark:bg-blue-500/50 text-gray-50 hover:bg-blue-500/90',
        danger:
          'bg-red-500 dark:bg-red-500/50 text-gray-50 hover:bg-red-500/90',
        outline:
          'border border-gray-200 00 bg-white hover:bg-gray-100 hover:text-gray-900',
        success:
          'bg-green-100 dark:bg-green-500/50 text-green-500 hover:bg-green-500/90',
        ghost: 'hover:bg-gray-100 hover:text-gray-900',
        link: 'text-gray-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'rounded-md px-3 px-2',
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
      variant: 'default',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, shape, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, shape }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
