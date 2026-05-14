'use client';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';

import ChartCard from '@/components/dashboard/shared/ChartCard';

import {
  portfolioAllocation,
} from '@/lib/mock-data/advisor';

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
            data={portfolioAllocation}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >

            {portfolioAllocation.map((entry, index) => (
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