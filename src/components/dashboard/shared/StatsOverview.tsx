'use client';

import {
  TrendingUp,
  DollarSign,
  Activity,
  ShieldCheck,
} from 'lucide-react';

import KPICard from '@/components/dashboard/shared/KPICard';

import {
  executiveStats,
} from '@/lib/mock-data/executive';

const icons = [
  <DollarSign size={24} />,
  <TrendingUp size={24} />,
  <Activity size={24} />,
  <ShieldCheck size={24} />,
];

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {executiveStats.map((item, index) => (
        <KPICard
          key={index}
          title={item.title}
          value={item.value}
          change={item.change}
          icon={icons[index]}
          color={item.color}
        />
      ))}

    </div>
  );
}