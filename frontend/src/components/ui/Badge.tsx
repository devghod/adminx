'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';

const badgeVariants = cva('font-semibold px-1', {
  variants: {
    variant: {
      default: 'bg-gray-200 text-gray-900',
      outline: 'border bg-transparent',
      solid: 'border-gray-600 bg-gray-600 text-white', // Example solid style
      subtle: 'border-0',
      link: 'border-0 bg-transparent',
    },
    colorTheme: {
      primary: 'text-blue-600 border-blue-600 bg-blue-600/20',
      success: 'text-green-600 border-green-600 bg-green-600/20',
      danger: 'text-rose-500 border-rose-500 bg-rose-500/20',
      warning: 'text-amber-500 border-amber-500 bg-amber-500/20',
      info: 'text-sky-500 border-sky-500 bg-sky-500/20',
      default: 'text-gray-500 border-gray-500 bg-gray-500/20',
    },
    size: {
      default: 'text-md',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    colorTheme: 'default',
    size: 'default',
  },
});

const Badge = React.forwardRef<
  React.ElementRef<'span'>,
  React.ComponentPropsWithoutRef<'span'> &
    VariantProps<typeof badgeVariants> & {
      data: string;
      size?: 'default' | 'xs' | 'sm' | 'md' | 'lg';
      colorTheme?:
        | 'default'
        | 'primary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info';
    }
>(({ className, variant, size, colorTheme, ...props }, ref) => (
  <span
    className={cn(
      badgeVariants({ className, variant, size, colorTheme }),
    )}
    ref={ref}
    {...props}
  >
    {props.data}
  </span>
));
Badge.displayName = 'Badge';

export { Badge };
