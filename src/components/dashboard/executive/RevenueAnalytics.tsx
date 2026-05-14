'use client';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

import ChartCard from '@/components/dashboard/shared/ChartCard';

const revenueData = [
  { month: 'Jan', revenue: 12000 },
  { month: 'Feb', revenue: 14500 },
  { month: 'Mar', revenue: 13200 },
  { month: 'Apr', revenue: 16800 },
  { month: 'May', revenue: 18200 },
  { month: 'Jun', revenue: 20100 },
];

export default function RevenueAnalytics() {
  return (
    <ChartCard
      title="Revenue Analytics"
      description="Enterprise revenue growth overview"
    >

      <ResponsiveContainer width="100%" height="100%">

        <AreaChart data={revenueData}>

          <defs>

            <linearGradient
              id="colorRevenue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#2563eb"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#2563eb"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </ChartCard>
  );
}