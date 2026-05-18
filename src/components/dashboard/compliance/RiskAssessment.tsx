'use client';

import {
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
} from 'lucide-react';

const risks = [
  {
    title: 'Low Risk Accounts',
    value: '124',
    status: 'Updated today',
    icon: ShieldCheck,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Medium Risk Accounts',
    value: '32',
    status: 'Updated today',
    icon: ShieldAlert,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'High Risk Accounts',
    value: '8',
    status: 'Updated today',
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

                <p className="text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-5xl font-bold text-gray-900 mt-2">
                  {item.value}
                </h2>

                <p className="text-green-600 font-semibold mt-3">
                  {item.status}
                </p>

              </div>

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                <Icon size={30} />
              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}