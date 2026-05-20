'use client';

import { useState } from 'react';

const tabs = [
  'Overview',
  'Revenue',
  'Performance',
  'Risk',
];

export default function AnalyticsTabs() {

  const [activeTab, setActiveTab] =
    useState('Overview');

  return (
    <div
      className="
        bg-white dark:bg-gray-900
        rounded-2xl shadow p-4
      "
    >

      <div className="flex flex-wrap gap-3">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-5 py-2 rounded-xl
              font-medium transition
              ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }
            `}
          >

            {tab}

          </button>

        ))}

      </div>

      <div className="mt-6">

        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {activeTab} Analytics
        </h3>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Viewing {activeTab.toLowerCase()} insights and analytics data.
        </p>

      </div>

    </div>
  );
}