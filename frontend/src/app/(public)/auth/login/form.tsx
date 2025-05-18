'use client';

import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { login } from '@/app/(public)/auth/authentications';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

const LoginForm = () => {
  const [state, action] = useActionState(login, undefined);

  return (
    <form action={action}>
      <div className='sm:w-80 sm:rounded-lg px-4 py-8 justify-items-center space-y-6'>
        <div className='text-center'>
          <div className='font-bold text-2xl uppercase tracking-wide'>
            Admin
            <span className=''>X</span>
          </div>
          <div className='text-sm'>Login Form</div>
        </div>
        <div className='w-full space-y-4'>
          {state?.message && (
            <p className='text-sm text-red-500'>{state.message}</p>
          )}
          <div className='w-full flex-col'>
            <Label htmlFor='email'>Username / Email / Mobile</Label>
            <Input
              id='email'
              name='email'
              placeholder='m@example.com'
              type='email'
            />
            {state?.errors?.email && (
              <p className='text-sm text-red-500'>
                {state.errors.email}
              </p>
            )}
          </div>
          <div className='w-full flex-col'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' type='password' name='password' />
            {state?.errors?.password && (
              <p className='text-sm text-red-500'>
                {state.errors.password}
              </p>
            )}
          </div>
        </div>
        <div className='w-full'>
          <LoginButton />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      aria-disabled={pending}
      type='submit'
      className='bg-black text-white p-2 rounded-lg mt-4 w-full'
    >
      {pending ? 'Submitting...' : 'Sign In'}
    </button>
  );
}
