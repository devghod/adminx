'use client';

import { useTradeStore } from '@/stores/tradeStore';
import { useEffect, useMemo, useState } from 'react';
import { dateFormat } from '@/utils/dateHelper';
import { useAccountStore } from '@/stores/accountStore';
import { RDatePickerBasic as RDatePicker } from '@/components/ui/datepicker';
import { roundOff } from '@/utils/numberUtils';

import { InputBasic } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CloseIcon } from '@/components/ui/icons';
import { SelectBasic as Select } from '@/components/ui/select';

import LineChart from '@/components/ui/graphical/LineChart';
import PieChart from '@/components/ui/graphical/PieChart';
import moment from 'moment-timezone';

const TradeMain = () => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [entry, setEntry] = useState<string>('This month');
  const [openDateRangePicker, setOpenDateRangePicker] = useState<boolean>(false);
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
    <>
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
              <InputBasic 
                name='Entry'
                onClick={() => setOpenDateRangePicker(true)}
                value={entry}
                readOnly
              />
              {/* <RDatePicker
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
              />       */}
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

      {openDateRangePicker && (
        <DateRangePicker
          onOpenChange={setOpenDateRangePicker}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          entry={entry}
        />
      )}
    </>
  );
};

export default TradeMain;

const DateRangePicker = ({
  onOpenChange,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  entry = 'This month',
}: {
  onOpenChange: (open: boolean) => void;
  startDate: string | null;
  endDate: string | null;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  entry: string; // 'This month' | 'This week' | 'This year' | 'Today' | 'Custom';
}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white dark:bg-gray-900 bg-opacity-50 rounded-lg p-4 space-y-4'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>Date Range</h2>
          <Button onClick={() => onOpenChange(false)}>
            <CloseIcon className='w-4 h-4' onClick={() => onOpenChange(false)} />
          </Button>
        </div>
        <Select
          name='entry'
          label='Entry'
          placeholder='Select Entry'
          items={[
            { value: 'This month', label: 'This month' },
            { value: 'This week', label: 'This week' },
            { value: 'This year', label: 'This year' },
            { value: 'Today', label: 'Today' },
          ]}
        />
        <div className='flex flex-col gap-y-4'>
          <RDatePicker
            name='startDate'
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
            name='endDate'
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
        <Button
          theme='fill-primary'
          shape='rounded'
          onClick={() => onOpenChange(false)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};