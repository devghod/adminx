import type { Metadata } from 'next';
import LightSwitch from '@/components/ui/LightSwitch';

export const metadata: Metadata = {
  title: 'AdminX | Landing Page',
  description: 'My All-in-One Web Application',
  icons: '/images/favicon.ico',
};

export interface IAuthLAyout {
  children: React.ReactNode;
}

const AuthLAyout = ({ children }: IAuthLAyout) => (
  <>
    <div className='grid grid-cols-9 gap-4'>
      <div className='col-span-3 col-start-4 sm:flex min-h-screen items-center justify-center content-center'>
        {children}
      </div>
      <div className='col-span-1 col-start-9'>
        <div className='flex space-x-4 justify-end mx-5 bg-transparent pt-4'>
          <div className=''></div>
          <div className=''>
            <LightSwitch />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AuthLAyout;
