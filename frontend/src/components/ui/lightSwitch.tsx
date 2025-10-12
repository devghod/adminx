'use client';

import { DarkIcon, LightIcon } from '@/components/ui/icons';
import { useThemeStore } from '@/stores/themeStore';

const LightSwitch = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      onClick={toggleTheme}
      className='relative flex bg-violet-500 rounded-full p-1 cursor-pointer transition-all duration-500 items-center'
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full transform transition-transform duration-500 
          ${theme === 'light' ? 'translate-x-0' : 'translate-x-6'}
        `}
      />

      <div className='flex w-full space-x-2 justify-between p-1 z-10'>
        <div className='text-yellow-400'>
          <LightIcon />
        </div>

        <div className={theme === 'light' ? 'text-violet-700' : ''}>
          <DarkIcon />
        </div>
      </div>
    </div>
  );
};

export default LightSwitch;
