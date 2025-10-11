'use client';

import { useActionState } from 'react';
import { login } from './authentications';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password';
import { Button } from '@/components/ui/button';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const LoginFormSchema = z.object({
  username: z.string().nonempty(),
  password: z.string().nonempty(),
});

const LoginFormInitial = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const [state, action, loading] = useActionState(login, undefined);

  const methods = useForm({
    defaultValues: LoginFormInitial,
    resolver: zodResolver(LoginFormSchema),
    mode: 'onChange',
  });

  return (
    <FormProvider {...methods}>
      <form action={action}>
        <div className='sm:w-80 sm:rounded-lg px-4 py-4 justify-items-center space-y-6'>
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
                type='text'
                placeholder='Username / Email / Mobile'
                label='Username / Email / Mobile'
                name='username'
              />
            </div>
            <div className='w-full flex-col'>
              <PasswordInput
                name='password'
                label='Password'
                type='login'
                placeholder='Password here'
              />
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
    </FormProvider>
  );
};

export default LoginForm;
