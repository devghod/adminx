import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';
import * as PasswordInputPrimitive from '@radix-ui/react-password-toggle-field';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { Label } from '@/components/ui/label';

const passwordInputVariants = cva(
  'flex h-10 w-full rounded-md border text-slate-700 border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
);

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<typeof PasswordInputPrimitive.Root> &
    VariantProps<typeof passwordInputVariants> & {
      className?: string;
      name?: string;
      label?: string;
      errors?: any;
    }
>(({ className, label, errors, ...props }, ref) => {
  const { name, ...inputProps } = props;

  const handleError = () => {
    if (
      errors &&
      typeof errors === 'object' &&
      Object.keys(errors).length > 0 &&
      name
    ) {
      return errors[name]?.message || '';
    }
    return '';
  };

  return (
    <PasswordInputPrimitive.Root>
      <div className='flex flex-col gap-y-1 w-full'>
        {label && <Label htmlFor={`password_${name}`}>{label}</Label>}
        <div className='relative flex items-center' id={name}>
          <PasswordInputPrimitive.Input
            ref={ref}
            className={cn(passwordInputVariants(), className)}
            {...inputProps}
            name={name}
            id={`password_${name}`}
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
        {handleError() && (
          <p className='text-red-500 text-sm'>{handleError()}</p>
        )}
      </div>
    </PasswordInputPrimitive.Root>
  );
});

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
