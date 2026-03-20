import type { Metadata } from 'next';
import LightSwitch from '@/components/ui/lightSwitch';

export const metadata: Metadata = {
  title: 'AdminX | Landing Page',
  description: 'My All-in-One Web Application',
  icons: '/images/favicon.ico',
};

export interface IAuthLAyout {
  children: React.ReactNode;
};

const AuthLAyout = ({ children }: IAuthLAyout) => (
  <>
    <div className='absolute top-0 right-0 p-2'>
      <LightSwitch />
    </div>
    <div className="sm:flex min-h-screen items-center justify-center content-center">
      {children}
    </div>
  </>
);

export default AuthLAyout;
