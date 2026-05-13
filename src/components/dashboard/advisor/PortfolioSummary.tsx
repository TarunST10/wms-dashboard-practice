'use client';

import {
  DollarSign,
  TrendingUp,
  Users,
} from 'lucide-react';

const metrics = [
  {
    title: 'Total Portfolio',
    value: '$12.4M',
    growth: '+15.2%',
    icon: DollarSign,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Growth Rate',
    value: '18.4%',
    growth: '+4.1%',
    icon: TrendingUp,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Active Clients',
    value: '248',
    growth: '+12',
    icon: Users,
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function PortfolioSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {metrics.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6"
          >

            <div className="flex items-center justify-between mb-4">

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

            <p className="text-green-600 font-semibold">
              {item.growth} this month
            </p>

          </div>
        );
      })}

    </div>
  );
}