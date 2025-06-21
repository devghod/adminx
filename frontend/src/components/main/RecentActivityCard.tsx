'use client';

import { useMemo, useEffect } from 'react';
import { TLog, useLogStore } from '../../stores/logStore';
import { InventoryIcon, UserIcon } from '../ui/icons';
import { dateFormat } from '@/utils/dateHelper';

const RecentActivityCard = () => {
  const { getLogsPaginated, isLoading, logs } = useLogStore();

  useEffect(() => {
    getLogsPaginated(1, 5);
  }, [getLogsPaginated]);

  const logsList = useMemo(() => {
    return logs ?? [];
  }, [logs]);

  if (isLoading) return <Loader />;

  return (
    <div className='w-[300px] border px-6 py-5 rounded-lg bg-white dark:bg-black'>
      <div className='font-bold'>Recent Activity</div>
      <div className='flex flex-col gap-y-2 mt-4'>
        {logsList.length > 0 ? (
          logs.map((log: TLog) => (
            <ActivityCard key={log._id} log={log} />
          ))
        ) : (
          <div className=''>No Data</div>
        )}
      </div>
    </div>
  );
};

export default RecentActivityCard;

const ActivityCard = ({ log }: { log: TLog }) => {
  return (
    <div className='flex flex-col gap-y-1 ' key={log._id}>
      <div className='flex justify-between'>
        <div className='flex gap-x-4'>
          <div className=''>
            <ActivityLogo model={log.model} action={log.action} />
          </div>
          <div className=''>
            <div className='text-gray-500 font-semibold text-sm'>
              {log.user_id_execute.first_name}
            </div>
            <div className='text-gray-500 font-semibold text-sm'>
              {log.action}
            </div>
          </div>
        </div>
        <div className=''>
          <div className='text-gray-500 font-semibold text-sm'>
            {dateFormat(log.date_created, 'MM/DD/YYYY')}
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
  };

  return icons[model];
};

const Loader = () => (
  <div className='max-w-68 border px-6 py-5 rounded-lg bg-white dark:bg-black'>
    <div className='font-bold'>Recent Activity</div>
    <div className='flex flex-col gap-y-2 mt-4'>
      <div className='rounded-full w-full h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
      <div className='rounded-full w-full h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
      <div className='rounded-full w-full h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
      <div className='rounded-full w-full h-2 my-2 bg-gray-300 dark:bg-gray-700 animate-pulse'></div>
    </div>
  </div>
);
