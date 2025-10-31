'use client';

import { useTradeStore } from '@/stores/tradeStore';
import { useEffect, useMemo, useState } from 'react';
import { dateFormat } from '@/utils/dateHelper';
import { useAccountStore } from '@/stores/accountStore';
import { RDatePickerBasic as RDatePicker } from '@/components/ui/datepicker';
import { roundOff } from '@/utils/numberUtils';
import LineChart from '@/components/ui/graphical/LineChart';
import PieChart from '@/components/ui/graphical/PieChart';
import moment from 'moment-timezone';

const TradeMain = () => {
  const [startDate, setStartDate] = useState<string | null>();
  const [endDate, setEndDate] = useState<string | null>(null);

  const { stats, isLoading, getTradeStatsByDate } = useTradeStore();
  const { profile } = useAccountStore();

  useEffect(() => {
    const startOfMonth = moment()
      .tz('Asia/Manila')
      .startOf('month')
      .format('YYYY-MM-DD');
    const endOfMonth = moment()
      .tz('Asia/Manila')
      .endOf('month')
      .format('YYYY-MM-DD');

    setStartDate(startOfMonth);
    setEndDate(endOfMonth);
  }, []);

  useEffect(() => {
    if (startDate && endDate && profile?._id) {
      const fetchStats = async () => {
        if (profile._id) {
          getTradeStatsByDate(startDate, endDate, profile._id);
        }
      };
      fetchStats();
    }
  }, [startDate, endDate, profile._id, getTradeStatsByDate]);

  const differenceAmount = useMemo(() => {
    return stats?.profitLossData?.profit && stats?.profitLossData?.loss 
      ?  stats?.profitLossData?.profit - stats?.profitLossData?.loss
      : 0
  },[stats?.profitLossData?.profit, stats?.profitLossData?.loss]);

  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
      <div className='w-full border bg-white dark:bg-black rounded-lg p-4 space-y-5 col-span-3'>
        <div className='space-y-4'>
          <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
            <div className="flex space-x-1 py-auto md:text-2xl">
              <div 
                className={`font-bold self-center
                  ${roundOff(differenceAmount) > 0 ? 'text-lime-500' : ''}
                  ${roundOff(differenceAmount) < 0 ? 'text-rose-500' : ''}
                  ${roundOff(differenceAmount) === 0 ? 'text-gray-500/50 dark:text-gray-400' : ''}
                `}
              >
                {roundOff(differenceAmount)}
              </div>
            </div> 
            <div className=""></div>
            <RDatePicker
              name='Start Date'
              placeholder='Start Date'
              selected={startDate ? new Date(startDate) : null}
              onChange={date =>
                date &&
                setStartDate(
                  dateFormat(date.toISOString(), 'YYYY-MM-DD'),
                )
              }
            />
            <RDatePicker
              name='End Date'
              placeholder='End Date'
              selected={endDate ? new Date(endDate) : null}
              onChange={date =>
                date &&
                setEndDate(
                  dateFormat(date.toISOString(), 'YYYY-MM-DD'),
                )
              }
            />      
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            <div className='md:col-span-2'>
              <LineChart
                data={stats.lineData}
                loading={isLoading}
                height='250px'
              />
            </div>
            <div className='col-span-1'>
              <PieChart
                data={stats.pieData}
                loading={isLoading}
                height='250px'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeMain;
