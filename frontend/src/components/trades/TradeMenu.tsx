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
      className={`w-full bg-white dark:bg-black border hover:border-gray-500/10 hover:shadow-2xl hover:dark:ring-2 hover:dark:ring-violet-900 font-semibold text-gray-500 dark:text-slate-400 cursor-pointer transition-all duration-500 rounded-lg p-4
        ${currentTab?.toLowerCase() === menu.toLowerCase() && 'shadow-lg dark:ring dark:ring-violet-900 border-gray-500/10'}`}
      onClick={() => goToTab(router, menu.toLowerCase())}
    >
      {menu}
    </div>
  );
};
