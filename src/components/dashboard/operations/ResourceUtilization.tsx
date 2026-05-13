'use client';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'Mon', usage: 65 },
  { name: 'Tue', usage: 72 },
  { name: 'Wed', usage: 68 },
  { name: 'Thu', usage: 81 },
  { name: 'Fri', usage: 75 },
  { name: 'Sat', usage: 58 },
];

export default function ResourceUtilization() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          Resource Utilization
        </h2>

        <p className="text-gray-500">
          Weekly server usage analytics
        </p>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="usage"
              fill="#2563eb"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}