'use client';

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { LoadingIcon } from '@/components/ui/icons';
import { cn } from '@/utils/tailwindMerge';
import { useThemeStore } from '@/stores/themeStore';

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

const PieChartComponent = ({
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
  const { theme } = useThemeStore();
  const opacity = theme === 'dark' ? 0.5 : 0.9;

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
            <ResponsiveContainer width='100%' height='100%'>
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx='50%'
                  cy='50%'
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  dataKey='value'
                  stroke={theme === 'dark' ? '#1F1212' : '#EEF3EF'} // 🟩 border color (black)
                  strokeWidth={2}
                >
                  {data.map((entry: any, index: any) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={COLORS[index % COLORS.length]}
                      fillOpacity={opacity}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default PieChartComponent;
