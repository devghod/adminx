import * as React from 'react';
import { Label } from './label';
import { cn } from '@/utils/tailwindMerge';

/**
 * @type {VariantProps<typeof inputVariants>}
 * @param {string} className
 * @param {string} label
 * @param {boolean} hasError
 * @param {any} errors
 * @param {string} type
 * @param {string} ref
 * @param {any} props
 */
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    label?: string;
    errors?: any; // Ojbect
    type?: string;
  }
>(({ className, type, label, errors, ...props }, ref) => {
  const handleError = () => {
    if (
      errors &&
      typeof errors === 'object' &&
      Object.keys(errors).length > 0 &&
      props.name
    ) {
      return errors[props.name]?.message || '';
    }
    return '';
  };

  return (
    <div className='flex flex-col gap-y-1'>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border text-slate-700 border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
        autoComplete='off'
      />
      {handleError() && (
        <p className='text-red-500 text-sm'>{handleError()}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
