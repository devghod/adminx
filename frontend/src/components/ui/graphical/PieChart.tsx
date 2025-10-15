'use client';

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

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
}: {
  data: any[];
  loading: boolean;
}) => (
  <div className='w-full max-h-[250px] border bg-white dark:bg-black rounded-lg p-2'>
    {loading ? (
      'Loading...'
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
                fill='#8884d8'
                dataKey='value'
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={COLORS[index % COLORS.length]}
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

export default PieChartComponent;
