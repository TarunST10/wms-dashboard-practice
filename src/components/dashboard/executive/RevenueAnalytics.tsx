'use client';

import {
  useEffect,
  useState,
} from 'react';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import ChartCard from '@/components/dashboard/shared/ChartCard';

import ChartLoading from '@/components/dashboard/shared/Chartloading';

const data = [
  { month: 'Jan', revenue: 22000 },
  { month: 'Feb', revenue: 28000 },
  { month: 'Mar', revenue: 32000 },
  { month: 'Apr', revenue: 40000 },
  { month: 'May', revenue: 48000 },
  { month: 'Jun', revenue: 55000 },
];

export default function RevenueAnalytics() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <ChartLoading />;
  }

  return (
    <ChartCard
      title="Revenue Analytics"
      description="Enterprise revenue growth overview"
    >

      <ResponsiveContainer width="100%" height={300}>

        <AreaChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            fill="#93c5fd"
            strokeWidth={3}
          />

        </AreaChart>

      </ResponsiveContainer>

    </ChartCard>
  );
}