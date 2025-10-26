import * as React from 'react';
import * as PasswordInputPrimitive from '@radix-ui/react-password-toggle-field';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { Label } from '@/components/ui/label';
import { useFormContext } from 'react-hook-form';

interface PasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: 'login' | 'signup' | 'off';
  validation?: object;
  className?: string;
  label?: string;
  errorMsg?: string;
}

const passwordInputVariants = cva(
  'flex h-10 w-full rounded-md border text-slate-700 border-gray-200 bg-white dark:bg-gray-700 dark:text-gray-200 dark:border-gray-500 px-3 py-2 text-sm placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
);

/**
 * @param {string} className
 * @param {string} name
 * @param {string} label
 * @param {object} validation
 * @param {string} errorMsg
 * @param {enum} type 'login' | 'signup' | 'off'
 * @param {any} props
 */
const PasswordInput = ({
  className,
  name,
  type = 'off',
  label,
  validation,
  errorMsg,
  ...props
}: PasswordProps) => {
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

  const autoCompleteType: any = {
    login: 'current-password',
    signup: 'new-password',
    off: undefined,
  };

  return (
    <PasswordInputPrimitive.Root>
      <div className='flex flex-col gap-y-1 w-full'>
        {label && <Label htmlFor={`password_${name}`}>{label}</Label>}
        <div className='relative flex items-center' id={name}>
          <PasswordInputPrimitive.Input
            {...register(name, validation)}
            className={cn(passwordInputVariants(), className)}
            name={name}
            id={`password_${name}`}
            autoComplete={autoCompleteType[type]}
            {...props}
          />
          <PasswordInputPrimitive.Toggle
            id={`toggle_${name}`}
            className='absolute right-0 flex items-center justify-center h-full p-2'
          >
            <PasswordInputPrimitive.Icon
              visible={<EyeOpenIcon height={16} width={16} />}
              hidden={<EyeClosedIcon height={16} width={16} />}
            />
          </PasswordInputPrimitive.Toggle>
        </div>

        {hasError && (
          <p className='text-red-500 text-sm'>
            {typeof errors[name]?.message === 'string'
              ? errors[name]?.message
              : errorMsg}
          </p>
        )}
      </div>
    </PasswordInputPrimitive.Root>
  );
};

export { PasswordInput };
