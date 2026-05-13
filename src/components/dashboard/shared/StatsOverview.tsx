'use client';

import {
  TrendingUp,
  DollarSign,
  Activity,
  ShieldCheck,
} from 'lucide-react';

const stats = [
  {
    title: 'Revenue',
    value: '$24.8M',
    change: '+12.5%',
    icon: DollarSign,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Growth',
    value: '18.2%',
    change: '+4.3%',
    icon: TrendingUp,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Operations',
    value: '98.4%',
    change: '+1.2%',
    icon: Activity,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Compliance',
    value: '100%',
    change: 'Stable',
    icon: ShieldCheck,
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h3 className="text-3xl font-bold text-gray-900 mt-2">
                  {item.value}
                </h3>

                <p className="text-green-600 font-semibold mt-2">
                  {item.change}
                </p>

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