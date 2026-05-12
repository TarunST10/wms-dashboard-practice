'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 2400 },
  { month: 'Feb', revenue: 2800 },
  { month: 'Mar', revenue: 3200 },
  { month: 'Apr', revenue: 3000 },
  { month: 'May', revenue: 3600 },
  { month: 'Jun', revenue: 4200 },
];

export default function PerformanceInsights() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Performance Insights
          </h2>

          <p className="text-gray-500">
            Portfolio revenue growth
          </p>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}