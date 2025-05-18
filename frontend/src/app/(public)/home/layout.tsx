import LightSwitch from '@/components/ui/LightSwitch';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AdminX | Landing Page',
  description: 'My All-in-One Web Application',
  icons: '/images/favicon.ico',
};

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode | null;
}) {
  return (
    <>
      <div className='flex space-x-4 justify-end mx-5 bg-transparent pt-4'>
        <div className=''></div>
        <div className=''>
          <LightSwitch />
        </div>
      </div>
      {children}
    </>
  );
}
