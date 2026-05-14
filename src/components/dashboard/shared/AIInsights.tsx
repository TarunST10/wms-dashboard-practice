'use client';

import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';

import {
  aiInsightsData,
} from '@/lib/mock-data/executive';

const icons = [
  <TrendingUp size={24} />,
  <AlertTriangle size={24} />,
  <Sparkles size={24} />,
];

const colors = [
  'text-green-600',
  'text-orange-600',
  'text-blue-600',
];

export default function AIInsights() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-xl transition-all duration-300">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          AI Insights
        </h2>

        <p className="text-gray-500 mt-1">
          AI-powered analytics recommendations
        </p>

      </div>

      <div className="space-y-4">

        {aiInsightsData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 hover:shadow-md transition-all duration-300"
          >

            <div className="flex items-start gap-4">

              <div className={colors[index]}>
                {icons[index]}
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
        ))}

      </div>

    </div>
  );
}