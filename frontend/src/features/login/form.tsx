'use client';

import { useActionState } from 'react';
import { login } from './authentications';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password';
import { Button } from '@/components/ui/button';

const LoginForm = () => {
  const [state, action, loading] = useActionState(login, undefined);

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
            <Input
              id='email'
              name='email'
              placeholder='m@example.com'
              type='text'
              hasLabel
              label='Username / Email / Mobile'
            />
            {state?.errors?.email && (
              <p className='text-sm text-red-500'>
                {state.errors.email}
              </p>
            )}
          </div>
          <div className='w-full flex-col'>
            <PasswordInput
              id='password'
              name='password'
              hasLabel
              label='Password'
              className='w-full'
            />
            {state?.errors?.password && (
              <p className='text-sm text-red-500'>
                {state.errors.password}
              </p>
            )}
          </div>
        </div>
        <div className='w-full'>
          <Button
            type='submit'
            theme='fill-primary'
            className='w-full'
            isLoading={loading}
            loadingText='Submitting...'
            shape='rounded'
          >
            Sign In
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
