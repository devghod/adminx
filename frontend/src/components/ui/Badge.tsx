'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/tailwindMerge';

const badgeVariants = cva('font-semibold', {
  variants: {
    variant: {
      default: 'bg-gray-200 text-gray-900',
      outline: 'border bg-transparent',
      solid: 'border-gray-600 bg-gray-600 text-white', // Example solid style
      subtle: 'border-0',
      link: 'border-0 bg-transparent',
    },
    colorTheme: {
      primary: 'text-white border-blue-600 bg-blue-600',
      success: 'text-white border-green-600 bg-green-600',
      danger: 'text-white border-rose-500 bg-rose-500',
      warning: 'text-white border-amber-500 bg-amber-500',
      info: 'text-white border-sky-500 bg-sky-500',
      default: 'text-white border-gray-500 bg-gray-500',
    },
    size: {
      default: 'text-md p-2',
      xs: 'text-xs p-1',
      sm: 'text-sm p-1',
      md: 'text-md p-2',
      lg: 'text-lg p-3',
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
  React.ComponentPropsWithoutRef<'span'> & VariantProps<typeof badgeVariants> & {
    data: string
    size?: 'default' | 'xs' | 'sm' | 'md' | 'lg'
    colorTheme?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info'
  }
>(({ className, variant, size, colorTheme, ...props }, ref) => (
  <span
    className={cn(badgeVariants({ className, variant, size, colorTheme }))}
    ref={ref}
    {...props}
  >
    {props.data}
  </span>
));
Badge.displayName = 'Badge';

export { Badge };