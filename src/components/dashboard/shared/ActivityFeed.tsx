'use client';

import {
  Activity,
  TrendingUp,
  UserPlus,
  ShieldAlert,
} from 'lucide-react';

const activities = [
  {
    title: 'Portfolio Growth Updated',
    time: '2 minutes ago',
    icon: TrendingUp,
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    title: 'New Client Registered',
    time: '12 minutes ago',
    icon: UserPlus,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    title: 'Compliance Risk Detected',
    time: '25 minutes ago',
    icon: ShieldAlert,
    color: 'text-red-600',
    bg: 'bg-red-100',
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex items-center gap-3 mb-6">

        <div
          className="
            w-12 h-12 rounded-2xl
            bg-purple-100 text-purple-600
            flex items-center justify-center
          "
        >
          <Activity size={24} />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            Activity Feed
          </h2>

          <p className="text-gray-500">
            Real-time dashboard activities
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {activities.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                flex items-center gap-4
                border border-gray-200
                rounded-2xl p-4
                hover:bg-gray-50
                transition
              "
            >

              <div
                className={`
                  w-12 h-12 rounded-xl
                  flex items-center justify-center
                  ${item.bg}
                `}
              >
                <Icon
                  size={22}
                  className={item.color}
                />
              </div>

              <div>

                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {item.time}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}