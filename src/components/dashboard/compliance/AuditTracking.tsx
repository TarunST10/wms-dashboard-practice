'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Completed', value: 78 },
  { name: 'Pending', value: 22 },
];

const COLORS = ['#22c55e', '#f59e0b'];

export default function AuditTracking() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          Audit Tracking
        </h2>

        <p className="text-gray-500 mt-1">
          Monthly completed audit reports
        </p>

      </div>

      <div className="h-[300px] w-full">

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