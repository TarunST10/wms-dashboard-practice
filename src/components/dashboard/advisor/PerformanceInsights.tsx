'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const data = [
  { month: 'Jan', growth: 12 },
  { month: 'Feb', growth: 18 },
  { month: 'Mar', growth: 15 },
  { month: 'Apr', growth: 22 },
  { month: 'May', growth: 28 },
  { month: 'Jun', growth: 32 },
];

export default function PerformanceInsights() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          Performance Insights
        </h2>

        <p className="text-gray-500 mt-1">
          Monthly portfolio growth analytics
        </p>

      </div>

      <div className="w-full h-[300px] min-w-0">

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="growth"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}