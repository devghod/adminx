'use client';

import { useEffect, useRef } from 'react';
import { TLog, useLogStore } from '../../stores/logStore';
import { InventoryIcon, TradeIcon, UserIcon } from '../ui/icons';
import { ToolTip } from '../ui/tooltips';
import { dateFormat } from '@/utils/dateHelper';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useInfiniteQuery } from '@tanstack/react-query';

const RecentActivityCard = () => {
  const { getLogsPaginated, isLoading, total, size } = useLogStore();

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['logs'],
      queryFn: ({ pageParam = 0 }) =>
        getLogsPaginated(pageParam, size),
      getNextPageParam: (_lastPage, allPages) => {
        const totalPages = Math.ceil(total / size);
        const nextPage = allPages.length + 1;
        return nextPage <= totalPages ? nextPage : undefined;
      },
      initialPageParam: 1,
    });

  const allRows =
    data?.pages[0]?.logs && data.pages.length > 0
      ? data.pages.map((page: any) => page.logs).flat()
      : [];

  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 5,
  });

  useEffect(() => {
    const [lastItem] = [
      ...rowVirtualizer.getVirtualItems(),
    ].reverse();

    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= allRows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    rowVirtualizer,
  ]);

  if (isLoading) return <Skeleton />;

  return (
    <div className='w-[300px] shadow-xl px-6 py-5 rounded-xl bg-white dark:bg-black'>
      <div className='font-bold'>Recent Activity</div>
      <div className='flex flex-col mt-4'>
        <div ref={parentRef} className='h-[250px] overflow-y-auto'>
          <div
            className='w-full relative'
            style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
          >
            {rowVirtualizer.getVirtualItems().map(virtualItem => {
              const isLoader =
                virtualItem.index === allRows.length && hasNextPage;
              const style = {
                position: 'absolute' as const,
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualItem.start}px)`,
              };
              if (isLoader) {
                return (
                  <div
                    key='loading'
                    style={style}
                    className='flex justify-center items-center py-2 text-gray-400 mb-2'
                  >
                    Loading more...
                  </div>
                );
              }
              return (
                <div key={virtualItem.key} style={style}>
                  <ActivityCard log={allRows[virtualItem.index]} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityCard;

const ActivityCard = ({ log }: { log: TLog }) => {
  if (!log) return null;
  return (
    <div className='flex flex-col gap-y-1' key={log._id}>
      <div className='flex justify-between'>
        <div className='flex gap-x-4'>
          <div className=''>
            <ActivityLogo model={log.model} action={log.action} />
          </div>
          <div className=''>
            <div className='text-gray-500 font-semibold text-sm'>
              {log?.user_id_execute?.first_name}
            </div>
            <div className='text-gray-500 text-xs'>{log?.action}</div>
          </div>
        </div>
        <div className=''>
          <div className='text-gray-500 text-xs'>
            {dateFormat(log?.date_created, 'MM/DD/YYYY')}
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityLogo = ({
  model: modelTemp,
  action: actionTemp,
}: {
  model: string;
  action: string;
}) => {
  if (!modelTemp || !actionTemp) return null;

  const model = modelTemp.toLowerCase();
  const action = actionTemp.toLowerCase();

  const color: any = {
    create:
      'bg-blue-500/20 text-blue-500 p-1 rounded w-7 h-7 self-center',
    update:
      'bg-yellow-500/20 text-yellow-500 p-1 rounded w-7 h-7 self-center',
    delete:
      'bg-red-500/20 text-red-500 p-1 rounded w-7 h-7 self-center',
  };

  const icons: any = {
    user: <UserIcon className={color[action]} />,
    inventory: <InventoryIcon className={color[action]} />,
    tradejournal: <TradeIcon className={color[action]} />,
    trade: <TradeIcon className={color[action]} />,
  };

  return (
    <ToolTip title={`${model.toUpperCase()}`} className='text-xs'>
      {icons[model]}
    </ToolTip>
  );
};

const Skeleton = () => (
  <div className='w-[300px] shadow-xl px-6 py-5 border rounded-xl bg-white dark:bg-black'>
    <div className='font-bold'>Recent Activity</div>
    <div className='flex flex-col gap-y-2 mt-4'>
      <div className='rounded-full w-full h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
      <div className='rounded-full w-full h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
      <div className='rounded-full w-full h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
      <div className='rounded-full w-full h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
    </div>
  </div>
);
