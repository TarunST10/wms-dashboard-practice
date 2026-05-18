'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 'Mon', usage: 65 },
  { day: 'Tue', usage: 72 },
  { day: 'Wed', usage: 81 },
  { day: 'Thu', usage: 75 },
  { day: 'Fri', usage: 90 },
];

export default function ResourceUtilization() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          Resource Utilization
        </h2>

        <p className="text-gray-500 mt-1">
          Weekly server usage analytics
        </p>

      </div>

      <div className="h-[300px] w-full">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="usage"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}