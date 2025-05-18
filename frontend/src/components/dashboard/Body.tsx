import { ReactNode } from 'react';

const BodyDashoard = ({ children }: { children: ReactNode }) => {
  return (
    <div className='p-4 space-y-2'>
      <div className='text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase subpixel-antialiased'>
        {`Dashboard > Users`}
      </div>
      {children}
    </div>
  );
};

export default BodyDashoard;
