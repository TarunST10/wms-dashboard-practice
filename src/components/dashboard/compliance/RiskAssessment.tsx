'use client';

import {
  AlertTriangle,
  Shield,
  CheckCircle,
} from 'lucide-react';

const risks = [
  {
    title: 'Low Risk Accounts',
    value: '124',
    icon: CheckCircle,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Medium Risk Accounts',
    value: '32',
    icon: Shield,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'High Risk Accounts',
    value: '8',
    icon: AlertTriangle,
    color: 'bg-red-100 text-red-600',
  },
];

export default function RiskAssessment() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {risks.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h3 className="text-3xl font-bold text-gray-900 mt-2">
                  {item.value}
                </h3>

              </div>

              <div className={`p-3 rounded-xl ${item.color}`}>
                <Icon size={24} />
              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}