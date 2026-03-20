'use client';

import { useRouter } from 'next/navigation';
import LoginForm from '@/features/login/form';

const LoginPage = () => {
  const router = useRouter();

  return (
    <div className='w-full px-4 py-8 justify-items-center space-y-6'>
      <LoginForm />
      <div className='w-full md:w-80'>
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
