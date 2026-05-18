'use client';

import {
  DollarSign,
  TrendingUp,
  Users,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$12.4M',
    change: '+15.2%',
    description: 'Compared to last month',
    icon: DollarSign,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Growth Rate',
    value: '18.4%',
    change: '+4.1%',
    description: 'Portfolio performance',
    icon: TrendingUp,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'New Clients',
    value: '248',
    change: '+12',
    description: 'New onboarded clients',
    icon: Users,
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function ExecutiveOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {stats.map((item, index) => {

        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              bg-white rounded-2xl shadow p-6
              transition duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 font-medium">
                  {item.title}
                </p>

                <h2 className="text-4xl font-bold text-gray-900 mt-3">
                  {item.value}
                </h2>

                <div className="flex items-center gap-2 mt-4">

                  <span className="text-green-600 font-semibold">
                    {item.change}
                  </span>

                  <span className="text-gray-400 text-sm">
                    {item.description}
                  </span>

                </div>

              </div>

              <div
                className={`
                  w-16 h-16 rounded-2xl
                  flex items-center justify-center
                  ${item.color}
                `}
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