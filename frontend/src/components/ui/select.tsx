import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';
import { Label } from './label';
import { useFormContext } from 'react-hook-form';

const selectVariants = cva(
  'flex h-10 w-full rounded-md border text-slate-700 border-gray-200 bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 px-3 py-2 text-sm placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
);

type itemProps = {
  value: string | number;
  label: string;
};

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  validation?: object;
  className?: string;
  label?: string;
  errorMsg?: string;
  defaultValue?: string;
  items: itemProps[];
  placeholder?: string;
}

/**
 * @param {string} name
 * @param {string} className
 * @param {string} label
 * @param {string} errorMsg
 * @param {string} type
 * @param {string} placeholder
 * @param {string} items
 * @param {string} defaultValue
 * @param {string} validation
 * @param {any} props
 */
const Select = ({
  className,
  name,
  validation,
  onChange,
  onBlur,
  items,
  defaultValue = '',
  label,
  placeholder,
  errorMsg,
  ...props
}: SelectProps) => {
  const context = useFormContext();

  if (!context) return null;

  const {
    register,
    formState: { errors },
  } = context;

  const hasError =
    errors && typeof errors[name]?.message === 'string'
      ? true
      : false;

  return (
    <div className='flex flex-col gap-y-3 w-full'>
      {label && <Label htmlFor={name}>{label}</Label>}
      <select
        {...register(name, {
          ...validation,
          onChange: onChange,
          onBlur: onBlur,
        })}
        id={name}
        name={name}
        defaultValue={defaultValue}
        className={cn(selectVariants(), className)}
        {...props}
      >
        {placeholder && (
          <option value='' disabled className='text-gray-500 dark:text-gray-400'>
            {placeholder}
          </option>
        )}
        {items.map((item: itemProps) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {hasError && (
        <p className='text-red-500 text-sm'>
          {typeof errors[name]?.message === 'string'
            ? errors[name]?.message
            : errorMsg}
        </p>
      )}
    </div>
  );
};
interface SelectBasicProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  className?: string;
  label?: string;
  errorMsg?: string;
  defaultValue?: string;
  items: itemProps[];
  placeholder?: string;
}

/**
 * @param {string} name
 * @param {string} className
 * @param {string} label
 * @param {string} errorMsg
 * @param {string} type
 * @param {string} placeholder
 * @param {string} items
 * @param {string} defaultValue
 * @param {any} props
 */
const SelectBasic = ({
  className,
  name,
  items,
  defaultValue = '',
  label,
  placeholder,
  errorMsg,
  ...props
}: SelectBasicProps) => (
  <div className='flex flex-col gap-y-3 w-full'>
    {label && <Label htmlFor={name}>{label}</Label>}
    <select
      id={name}
      name={name}
      defaultValue={defaultValue}
      className={cn(selectVariants(), className)}
      {...props}
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
    {errorMsg && <p className='text-red-500 text-sm'>{errorMsg}</p>}
  </div>
);

export { Select, SelectBasic };
