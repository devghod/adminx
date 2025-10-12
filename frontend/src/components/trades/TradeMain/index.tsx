'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const TradeMain = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
      <div className="md:col-span-2 sm:col-span-2 col-span-1">
        <TradeLineChart />
      </div>
      <div className="">
        <TradePieChart />
      </div>
    </div>
  );
};

export default TradeMain;

const lineData = [
  { date: "2025-10-01", win: 3, lose: 1, draw: 2 },
  { date: "2025-10-02", win: 4, lose: 0, draw: 1 },
  { date: "2025-10-03", win: 2, lose: 2, draw: 3 },
  { date: "2025-10-06", win: 10, lose: 2, draw: 3 },
  { date: "2025-10-09", win: 2, lose: 2, draw: 3 },
];

const TradeLineChart = () => (
  <div 
    className="w-full h-[300px] border bg-white dark:bg-black rounded-lg p-4"
  >
    <ResponsiveContainer>
      <LineChart data={lineData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="win" stroke="#22c55e" name="Wins" />
        <Line type="monotone" dataKey="lose" stroke="#ef4444" name="Losses" />
        <Line type="monotone" dataKey="draw" stroke="#3b82f6" name="Draws" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const pieData = [
  { name: 'Win', value: 30 },
  { name: 'Loss', value: 40 },
  { name: 'Draw', value: 30 },
];

const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

const TradePieChart = () => (
  <div className="w-full h-[300px] border bg-white dark:bg-black rounded-lg p-4">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
);