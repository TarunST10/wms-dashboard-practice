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

import ChartCard from '@/components/dashboard/shared/ChartCard';

import {
  resourceUtilizationData,
} from '@/lib/mock-data/operations';

export default function ResourceUtilization() {
  return (
    <ChartCard
      title="Resource Utilization"
      description="Weekly server usage analytics"
    >

      <ResponsiveContainer width="100%" height="100%">

        <BarChart data={resourceUtilizationData}>

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

    </ChartCard>
  );
}