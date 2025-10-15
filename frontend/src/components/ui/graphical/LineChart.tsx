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

const LineChartComponent = ({
  data = [],
  loading = false,
}: {
  data: any;
  loading: boolean;
}) => {
  return (
    <div className='w-full max-h-[250px] border bg-white dark:bg-black rounded-lg p-2'>
      {loading ? (
        'Loading...'
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
