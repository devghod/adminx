'use client';

import { useEffect, useState } from 'react';
import { DarkIcon, LightIcon } from '@/utils/icons';
import { isDark, setIsDark } from '@/utils/darkMode';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const LightSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState<boolean | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setDark(isDark());
    setTheme(isDark() ? 'dark' : 'light');
  }, []);

  function handleSwitch() {
    setDark(theme === 'dark' ? false : true);
    setIsDark(theme === 'dark' ? false : true);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  if (!mounted)
    return (
      <Image
        src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
        width={32}
        height={32}
        sizes='32x32'
        alt='Loading Light/Dark Toggle'
      />
    );

  return (
    <div
      onClick={handleSwitch}
      className='relative flex bg-violet-500 rounded-full p-1 cursor-pointer transition-all duration-500 items-center'
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full transform transition-transform duration-500 
          ${!dark ? 'translate-x-0' : 'translate-x-6'}
        `}
      />

      <div className='flex w-full space-x-2 justify-between p-1 z-10'>
        <div className='text-yellow-400'>
          <LightIcon />
        </div>

        <div className={dark ? 'text-violet-700' : ''}>
          <DarkIcon />
        </div>
      </div>
    </div>
  );
};

export default LightSwitch;
