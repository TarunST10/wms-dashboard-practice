'use client';

import {
  Bell,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

const notifications = [
  {
    title: 'Revenue Target Achieved',
    description: 'Monthly revenue exceeded projected target.',
    icon: TrendingUp,
    color: 'text-green-600',
    bg: 'bg-green-100',
  },
  {
    title: 'Compliance Alert',
    description: '2 accounts require KYC verification.',
    icon: AlertTriangle,
    color: 'text-orange-600',
    bg: 'bg-orange-100',
  },
  {
    title: 'System Health Stable',
    description: 'All operational services running normally.',
    icon: CheckCircle2,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
];

export default function NotificationsPanel() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex items-center gap-3 mb-6">

        <div
          className="
            w-12 h-12 rounded-2xl
            bg-blue-100 text-blue-600
            flex items-center justify-center
          "
        >
          <Bell size={24} />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            Notifications
          </h2>

          <p className="text-gray-500">
            Real-time enterprise alerts
          </p>

        </div>

      </div>

      <div className="space-y-4">

        {notifications.map((item, index) => {

          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
                flex items-start gap-4
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

                <p className="text-gray-500 mt-1">
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}