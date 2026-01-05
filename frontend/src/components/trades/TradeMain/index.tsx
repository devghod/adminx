'use client';

import { useTradeStore } from '@/stores/tradeStore';
import { useEffect, useMemo, useState } from 'react';
import { dateFormat } from '@/utils/dateHelper';
import { useAccountStore } from '@/stores/accountStore';
import { RDatePickerBasic as RDatePicker } from '@/components/ui/datepicker';
import { roundOff } from '@/utils/numberUtils';
import { InputBasic } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SelectBasic as Select } from '@/components/ui/select';
import {
  DialogMenu,
  DialogMenuClose,
  DialogMenuDescription,
  DialogMenuTitle,
} from '@/components/ui/dialog';
import LineChart from '@/components/ui/graphical/LineChart';
import PieChart from '@/components/ui/graphical/PieChart';
import moment from 'moment-timezone';

const TradeMain = () => {
  // const [startDate, setStartDate] = useState<string | null>(null);
  // const [endDate, setEndDate] = useState<string | null>(null);
  const [entry, setEntry] = useState<string>('This month');
  const [openDateRangePicker, setOpenDateRangePicker] =
    useState<boolean>(false);
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

    getTradeStats(startOfMonth, endOfMonth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?._id]);

  const getTradeStats = (
    startDate: string | null,
    endDate: string | null,
  ) => {
    console.debug(startDate, endDate, profile?._id);
    if (startDate && endDate && profile?._id) {
      const fetchStats = async () => {
        if (profile._id) {
          getTradeStatsByDate(startDate, endDate, profile._id);
        }
      };
      fetchStats();
    }
  };

  const differenceAmount = useMemo(() => {
    return stats?.profitLossData?.profit &&
      stats?.profitLossData?.loss
      ? stats?.profitLossData?.profit - stats?.profitLossData?.loss
      : 0;
  }, [stats?.profitLossData?.profit, stats?.profitLossData?.loss]);

  return (
    <>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
        <div className='w-full border bg-white dark:bg-black rounded-lg p-4 space-y-5 col-span-3 shadow-lg'>
          <div className='space-y-4'>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
              <div className='flex space-x-1 py-auto md:text-2xl'>
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
              <div className=''></div>
              <InputBasic
                name='Entry'
                onClick={() => setOpenDateRangePicker(true)}
                value={entry}
                readOnly
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

      {openDateRangePicker && (
        <DateRangePicker
          open={openDateRangePicker}
          onOpenChange={setOpenDateRangePicker}
          setEntry={setEntry}
          entry={entry}
          getTrade={getTradeStats}
        />
      )}
    </>
  );
};

export default TradeMain;

const DateRangePicker = ({
  open,
  onOpenChange,
  setEntry,
  entry = 'This month',
  getTrade,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  setEntry: (data: string) => void;
  getTrade: (
    startDate: string | null,
    endDate: string | null,
  ) => void;
  entry: string; // 'This month' | 'This week' | 'This year' | 'Today' | 'Custom';
}) => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  // useEffect(() => , []);

  const fnAssignDateRange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    e.preventDefault();

    let startDate = null;
    let endDate = null;

    const entry = e.target.value;
    const fnMoment = moment().tz('Asia/Manila');
    setEntry(entry);

    switch (entry) {
      case 'Today':
        startDate = fnMoment.startOf('day').format('YYYY-MM-DD');
        endDate = fnMoment.endOf('day').format('YYYY-MM-DD');
        break;

      case 'This month':
        startDate = fnMoment.startOf('month').format('YYYY-MM-DD');
        endDate = fnMoment.endOf('month').format('YYYY-MM-DD');

        break;

      case 'This week':
        startDate = fnMoment.startOf('week').format('YYYY-MM-DD');
        endDate = fnMoment.endOf('week').format('YYYY-MM-DD');

        break;

      case 'This year':
        startDate = fnMoment.startOf('year').format('YYYY-MM-DD');
        endDate = fnMoment.endOf('year').format('YYYY-MM-DD');

        break;

      default:
        startDate = null;
        endDate = null;

        break;
    }

    if (startDate && endDate) {
      setStartDate(startDate);
      setEndDate(endDate);
    }
  };

  const submit = () => {
    getTrade(startDate, endDate);
    onOpenChange(false);
  };

  return (
    <DialogMenu open={open} onOpenChange={onOpenChange} modal>
      <DialogMenuTitle>Date Range</DialogMenuTitle>
      <DialogMenuClose closeIcon />
      <DialogMenuDescription asChild>
        <div className=''>
          <Select
            name='entry'
            label='Entry'
            value={entry}
            placeholder='Select Entry'
            items={[
              { value: 'This month', label: 'This month' },
              { value: 'This week', label: 'This week' },
              { value: 'This year', label: 'This year' },
              { value: 'Today', label: 'Today' },
              { value: 'Custom', label: 'Custom' },
            ]}
            onChange={e => fnAssignDateRange(e)}
          />
          <div className='flex flex-col gap-y-4'>
            <RDatePicker
              name='startDate'
              placeholder='Start Date'
              selected={startDate ? new Date(startDate) : null}
              disabled={entry !== 'Custom'}
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
              disabled={entry !== 'Custom'}
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
            onClick={submit}
          >
            Submit
          </Button>
        </div>
      </DialogMenuDescription>
    </DialogMenu>
  );
};
