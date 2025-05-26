'use client';

import { useRouter } from 'next/navigation';
import LoginForm from '@/features/login/form';

export interface ILogins {}

const LoginPage = (): ILogins => {
  const router = useRouter();

  return (
    <div className='sm:w-80 sm:rounded-lg px-4 py-8 justify-items-center space-y-6'>
      <LoginForm />
      <div className='w-full'>
        <div className='flex justify-between px-2'>
          <button
            onClick={() => router.push('register')}
            className='text-sm cursor-pointer tracking-wide'
          >
            No Account?
          </button>
          <button
            onClick={() => router.push('forgot-password')}
            className='text-sm cursor-pointer tracking-wide'
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
