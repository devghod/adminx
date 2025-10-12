'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
} from 'recharts';
import { useTradeStore } from '@/stores/tradeStore';
import { useEffect, useState } from 'react';
import { dateFormat } from '@/utils/dateHelper';
import { useAccountStore } from '@/stores/accountStore';
import { RDatePickerBasic as RDatePicker } from '@/components/ui/datepicker';
import moment from 'moment-timezone';

const TradeMain = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5'>
      <div className='md:col-span-2 sm:col-span-2 col-span-1'>
        <TradeLineChart />
      </div>
      <div className=''>
        <TradePieChart />
      </div>
    </div>
  );
};

export default TradeMain;

const TradeLineChart = () => {
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

  return (
    <div className='w-full h-[300px] border bg-white dark:bg-black rounded-lg p-4'>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <div className='grid grid-cols-2 gap-5'>
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

          <ResponsiveContainer>
            <LineChart
              data={stats.lineData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='date' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='win'
                stroke='#22c55e'
                name='Wins'
              />
              <Line
                type='monotone'
                dataKey='lose'
                stroke='#ef4444'
                name='Losses'
              />
              <Line
                type='monotone'
                dataKey='draw'
                stroke='#FFBB28'
                name='Draws'
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

const pieData = [
  { name: 'Win', value: 30 },
  { name: 'Loss', value: 40 },
  { name: 'Draw', value: 30 },
];

const RADIAN = Math.PI / 180;
const COLORS = ['#22c55e', '#ef4444', '#FFBB28'];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

const TradePieChart = () => (
  <div className='w-full h-[300px] border bg-white dark:bg-black rounded-lg p-4'>
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart width={400} height={400}>
        <Pie
          data={pieData}
          cx='50%'
          cy='50%'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill='#8884d8'
          dataKey='value'
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
);
