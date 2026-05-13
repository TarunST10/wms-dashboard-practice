'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';

import ProcessMetrics from '@/components/dashboard/operations/ProcessMetrics';
import SystemHealth from '@/components/dashboard/operations/SystemHealth';
import ResourceUtilization from '@/components/dashboard/operations/ResourceUtilization';

export default function OperationsPage() {
  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Operations Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Operations monitoring and process analytics.
          </p>
        </div>

        <ProcessMetrics />

        <ResourceUtilization />

        <SystemHealth />

      </div>

    </DashboardLayout>
  );
}