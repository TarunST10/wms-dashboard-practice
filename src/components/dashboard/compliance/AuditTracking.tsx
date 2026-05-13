'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const auditData = [
  {
    month: 'Jan',
    completed: 24,
  },
  {
    month: 'Feb',
    completed: 31,
  },
  {
    month: 'Mar',
    completed: 28,
  },
  {
    month: 'Apr',
    completed: 36,
  },
  {
    month: 'May',
    completed: 42,
  },
];

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

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={auditData}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="completed"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}