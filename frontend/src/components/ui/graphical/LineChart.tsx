'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { LoadingIcon } from '@/components/ui/icons';
import { cn } from '@/utils/tailwindMerge';

const LineChartComponent = ({
  data = [],
  loading = false,
  width,
  height,
  maxWidth,
  maxHeight = '250px',
}: {
  data: any;
  loading: boolean;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}) => {
  return (
    <div
      className={cn(
        `border bg-white dark:bg-black rounded-lg p-2 relative
        ${width ? `w-[${maxWidth}]` : 'w-full'}
        ${maxWidth ? `max-w-[${maxWidth}]` : ''}
        ${height ? `h-[${height}]` : 'h-full'}
        ${maxHeight ? `max-h-[${maxHeight}]` : ''}
      `,
      )}
    >
      {loading ? (
        <div className='absolute inset-0 bg-white/90 dark:bg-black/90 rounded-xl pointer-events-none'>
          <div className='flex flex-col items-center justify-center h-full'>
            <LoadingIcon />
            <span className='mt-2 text-gray-600 font-medium text-lg select-none'>
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className='w-full h-[220px] md:text-sm text-xs'>
            <ResponsiveContainer>
              <LineChart
                data={data}
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
          </div>
        </>
      )}
    </div>
  );
};

export default LineChartComponent;
