'use client';

import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';

const insights = [
  {
    title: 'Revenue Growth',
    description:
      'Revenue increased by 15.2% compared to last month.',
    icon: TrendingUp,
    color: 'text-green-600',
  },
  {
    title: 'Risk Monitoring',
    description:
      '8 high-risk accounts require immediate attention.',
    icon: AlertTriangle,
    color: 'text-red-600',
  },
  {
    title: 'AI Recommendation',
    description:
      'AI suggests expanding high-growth investment sectors.',
    icon: Sparkles,
    color: 'text-blue-600',
  },
];

export default function ExecutiveInsights() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          Executive Insights
        </h2>

        <p className="text-gray-500 mt-1">
          AI-powered enterprise recommendations
        </p>

      </div>

      <div className="space-y-4">

        {insights.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition"
            >

              <div className="flex items-start gap-4">

                <div className={item.color}>
                  <Icon size={24} />
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

            </div>
          );
        })}

      </div>

    </div>
  );
}