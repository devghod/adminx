import { ReactNode } from 'react';

const BodyDashoard = ({ children }: { children: ReactNode }) => {
  return (
    <div className='p-4 space-y-4'>
      <div className='text-xs text-gray-500 font-semibold uppercase subpixel-antialiased'>
        {`Dashboard > Users`}
      </div>
      <div className=''>{children}</div>
    </div>
  );
};

export default BodyDashoard;
