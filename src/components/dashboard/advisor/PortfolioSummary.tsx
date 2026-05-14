'use client';

import {
  DollarSign,
  TrendingUp,
  Users,
} from 'lucide-react';

import KPICard from '@/components/dashboard/shared/KPICard';

import {
  advisorMetrics,
} from '@/lib/mock-data/advisor';

const icons = [
  <DollarSign size={24} />,
  <TrendingUp size={24} />,
  <Users size={24} />,
];

export default function PortfolioSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {advisorMetrics.map((item, index) => (
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