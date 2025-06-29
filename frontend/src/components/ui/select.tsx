import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';
import { Label } from './label';

const selectVariants = cva(
  'flex h-10 w-full rounded-md border text-slate-700 border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
);

type itemProps = {
  value: string | number;
  label: string;
};

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> &
    React.OptionHTMLAttributes<HTMLOptionElement> &
    VariantProps<typeof selectVariants> & {
      className?: string;
      label?: string;
      placeholder?: string;
      defaultValue?: string;
      items: itemProps[];
      errors?: any; // Ojbect
    }
>(
  (
    {
      className,
      onChange,
      onBlur,
      items,
      defaultValue = '',
      label,
      placeholder,
      errors,
      ...props
    },
    ref,
  ) => {
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
      <div className='flex flex-col gap-y-1 w-full'>
        {label && <Label htmlFor={props.name}>{label}</Label>}
        <select
          name={props.name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
          defaultValue={defaultValue}
          className={cn(selectVariants(), className)}
        >
          {placeholder && (
            <option value='' disabled>
              {placeholder}
            </option>
          )}
          {items.map((item: itemProps) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {handleError() && (
          <p className='text-red-500 text-sm'>{handleError()}</p>
        )}
      </div>
    );
  },
);

Select.displayName = 'Select';

export { Select };
