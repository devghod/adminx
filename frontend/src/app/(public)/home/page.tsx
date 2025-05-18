'use client';

import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <h1 className='text-4xl font-bold dark:text-slate-500'>
        Welcome to AdminX! 🚀
      </h1>
      <p className='text-slate-500 font-semibold'>
        If you got account, login here
      </p>
      <button
        className='bg-sky-500 hover:bg-sky-400 rounded-lg shadow-lg my-2 px-3 py-2 font-semibold text-gray-900 cursor-pointer'
        onClick={() => router.push('/auth/login')}
      >
        Login here
      </button>
    </div>
  );
};

export default HomePage;
