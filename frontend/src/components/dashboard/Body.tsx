'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const BodyDashoard = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const paths = pathname.split('/');

  return (
    <div className='p-4 space-y-4'>
      <div className='text-xs text-gray-500 font-semibold uppercase subpixel-antialiased'>
        {paths.length > 1 &&
          paths.map(
            (path, idx) =>
              idx !== 0 && `${idx > 1 ? ` >` : ''} ${path}`,
          )}
      </div>
      <div className=''>{children}</div>
    </div>
  );
};

export default BodyDashoard;
