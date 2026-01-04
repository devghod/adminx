import type { Metadata } from 'next';
import HeaderDashboard from '@/components/dashboard/Header';
import MenuDashboard from '@/components/dashboard/Menu';
import BodyDashoard from '@/components/dashboard/Body';

export const metadata: Metadata = {
  title: 'AdminX | Dashboard',
  description: 'My All-in-One Web Application',
  icons: '/images/favicon.ico',
};

export default function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode | null;
}) {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <div className='border-b border-gray-200 dark:border-gray-900'>
          <HeaderDashboard />
        </div>
        <div className='flex flex-1 overflow-hidden'>
          <div className='border-r border-gray-200 dark:border-gray-900'>
            <MenuDashboard />
          </div>
          <div className='flex-auto overflow-y-auto bg-gray-500/10 dark:bg-gray-900'>
            <BodyDashoard>{children}</BodyDashoard>
          </div>
        </div>
      </div>
    </>
  );
}
