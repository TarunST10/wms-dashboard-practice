'use client';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';

import ChartCard from '@/components/dashboard/shared/ChartCard';

const data = [
  { name: 'Equity', value: 45 },
  { name: 'Mutual Funds', value: 25 },
  { name: 'Fixed Income', value: 20 },
  { name: 'Cash', value: 10 },
];

const COLORS = [
  '#2563eb',
  '#16a34a',
  '#9333ea',
  '#f59e0b',
];

export default function PerformanceInsights() {
  return (
    <ChartCard
      title="Asset Allocation"
      description="Portfolio distribution overview"
    >

      <ResponsiveContainer width="100%" height="100%">

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </ChartCard>
  );
}