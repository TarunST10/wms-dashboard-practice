'use client';

import {
  DollarSign,
  TrendingUp,
  Users,
} from 'lucide-react';

import KPICard from '@/components/dashboard/shared/KPICard';

const metrics = [
  {
    title: 'Total Portfolio',
    value: '$12.4M',
    change: '+15.2% this month',
    icon: <DollarSign size={24} />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Growth Rate',
    value: '18.4%',
    change: '+4.1% this month',
    icon: <TrendingUp size={24} />,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Active Clients',
    value: '248',
    change: '+12 new clients',
    icon: <Users size={24} />,
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function PortfolioSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {metrics.map((item, index) => (
        <KPICard
          key={index}
          title={item.title}
          value={item.value}
          change={item.change}
          icon={item.icon}
          color={item.color}
        />
      ))}

    </div>
  );
}