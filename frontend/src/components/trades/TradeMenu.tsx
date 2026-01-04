'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { goToTab } from '@/utils/routerUtil';

const menulist = ['Main', 'Journal'];

const TradeMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab');

  useEffect(() => {
    if (!currentTab) goToTab(router, 'main');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4'>
      {menulist.length > 0 &&
        menulist.map((item, idx) => (
          <MenuItem
            key={idx}
            menu={item}
            router={router}
            currentTab={currentTab}
          />
        ))}
    </div>
  );
};

export default TradeMenu;

const MenuItem = ({
  menu,
  router,
  currentTab,
}: {
  menu?: string;
  router: any;
  currentTab: any;
}) => {
  if (!menu) return null;

  return (
    <div
      className={`w-full dark:font-light bg-white dark:bg-black border hover:border-gray-500/10 hover:shadow hover:dark:ring-2 hover:dark:ring-cyan-900 hover:text-black hover:dark:text-white cursor-pointer transition-all duration-500 rounded-lg p-4
        ${currentTab?.toLowerCase() === menu.toLowerCase() ? 'shadow dark:ring dark:ring-cyan-900 border-gray-500/10 text-black dark:text-white' : 'text-gray-500 dark:text-slate-400'}`}
      onClick={() => goToTab(router, menu.toLowerCase())}
    >
      {menu}
    </div>
  );
};
