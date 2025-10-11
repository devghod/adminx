import * as React from 'react';
import { Label } from './label';
import { cn } from '@/utils/tailwindMerge';
import { useFormContext } from 'react-hook-form';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  validation?: object;
  className?: string;
  label?: string;
  errorMsg?: string;
  type?: string;
}

/**
 * @param {string} name
 * @param {string} className
 * @param {string} label
 * @param {object} validation
 * @param {string} errorMsg
 * @param {string} type
 * @param {any} props
 */
const Input = ({
  name,
  className,
  validation,
  errorMsg,
  type,
  label,
  ...props
}: InputProps) => {
  const context = useFormContext();

  if (!context) return null;

  const {
    register,
    formState: { errors },
  } = context;

  const handleError = () => {
    if (
      errors &&
      typeof errors === 'object' &&
      Object.keys(errors).length > 0 &&
      name
    ) {
      return typeof errors[name]?.message === 'string' ? true : false;
    }
    return false;
  };

  return (
    <div className='flex flex-col gap-y-3'>
      {label && <Label htmlFor={name}>{label}</Label>}
      <input
        {...register(name, validation)}
        {...(type === 'number' && { step: 'any' })}
        id={name}
        name={name}
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border text-slate-700 border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        autoComplete='off'
        {...props}
      />
      {handleError() && (
        <p className='text-red-500 text-sm'>
          {typeof errors[name]?.message === 'string'
            ? errors[name]?.message
            : errorMsg}
        </p>
      )}
    </div>
  );
};

interface InputBasicProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: string;
  label?: string;
  errorMsg?: string;
  type?: string;
}

/**
 * @param {string} name
 * @param {string} className
 * @param {string} label
 * @param {string} errorMsg
 * @param {string} type
 * @param {any} props
 */
const InputBasic = ({
  name,
  className,
  errorMsg,
  type,
  label,
  ...props
}: InputBasicProps) => (
  <div className='flex flex-col gap-y-3'>
    {label && <Label htmlFor={name}>{label}</Label>}
    <input
      {...(type === 'number' && { step: 'any' })}
      id={name}
      name={name}
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border text-slate-700 border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      autoComplete='off'
      {...props}
    />
    {errorMsg && <p className='text-red-500 text-sm'>{errorMsg}</p>}
  </div>
);

export { Input, InputBasic };
