'use client';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts';

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
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          Asset Allocation
        </h2>

        <p className="text-gray-500">
          Portfolio distribution overview
        </p>

      </div>

      <div className="h-80">

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

      </div>

    </div>
  );
}