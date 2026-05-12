'use client';

import RegulatoryStatus from '@/components/dashboard/compliance/RegulatoryStatus';

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Compliance Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Regulatory tracking and compliance overview.
          </p>
        </div>

        <RegulatoryStatus />

      </div>
    </div>
  );
}