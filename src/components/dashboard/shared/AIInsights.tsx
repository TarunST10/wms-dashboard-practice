'use client';

import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';

const insights = [
  {
    title: 'Portfolio Growth',
    description:
      'Client portfolios increased by 18.2% this quarter.',
    icon: TrendingUp,
    color: 'text-green-600',
  },
  {
    title: 'Compliance Alert',
    description:
      '3 medium-risk accounts require additional review.',
    icon: AlertTriangle,
    color: 'text-orange-600',
  },
  {
    title: 'AI Recommendation',
    description:
      'Increase equity allocation by 6% for balanced portfolios.',
    icon: Sparkles,
    color: 'text-blue-600',
  },
];

export default function AIInsights() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          AI Insights
        </h2>

        <p className="text-gray-500 mt-1">
          AI-powered analytics recommendations
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

                <div className={`${item.color}`}>
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