'use client';

import {
  AlertTriangle,
  Shield,
  CheckCircle,
} from 'lucide-react';

import KPICard from '@/components/dashboard/shared/KPICard';

import {
  riskAssessmentData,
} from '@/lib/mock-data/compliance';

const icons = [
  <CheckCircle size={24} />,
  <Shield size={24} />,
  <AlertTriangle size={24} />,
];

export default function RiskAssessment() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {riskAssessmentData.map((item, index) => (
        <KPICard
          key={index}
          title={item.title}
          value={item.value}
          change="Updated today"
          icon={icons[index]}
          color={item.color}
        />
      ))}

    </div>
  );
}