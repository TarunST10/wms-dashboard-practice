'use client';

import {
  Activity,
  Server,
  Database,
} from 'lucide-react';

import KPICard from '@/components/dashboard/shared/KPICard';

import {
  operationsMetrics,
} from '@/lib/mock-data/operations';

const icons = [
  <Activity size={24} />,
  <Server size={24} />,
  <Database size={24} />,
];

export default function ProcessMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {operationsMetrics.map((item, index) => (
        <KPICard
          key={index}
          title={item.title}
          value={item.value}
          change="Live monitoring"
          icon={icons[index]}
          color={item.color}
        />
      ))}

    </div>
  );
}