'use client';

import ProcessMetrics from '@/components/dashboard/operations/ProcessMetrics';
import SystemHealth from '@/components/dashboard/operations/SystemHealth';

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Operations Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Operations monitoring and process analytics.
          </p>
        </div>

        <ProcessMetrics />

        <SystemHealth />

      </div>
    </div>
  );
}