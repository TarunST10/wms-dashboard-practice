'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';

import RegulatoryStatus from '@/components/dashboard/compliance/RegulatoryStatus';
import RiskAssessment from '@/components/dashboard/compliance/RiskAssessment';
import AuditTracking from '@/components/dashboard/compliance/AuditTracking';

export default function CompliancePage() {
  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Compliance Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Regulatory monitoring and audit tracking.
          </p>

        </div>

        <RiskAssessment />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <AuditTracking />

          <RegulatoryStatus />

        </div>

      </div>

    </DashboardLayout>
  );
}