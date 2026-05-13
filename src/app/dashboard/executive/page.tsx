'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';

import PortfolioSummary from '@/components/dashboard/advisor/PortfolioSummary';
import PerformanceInsights from '@/components/dashboard/advisor/PerformanceInsights';

import ResourceUtilization from '@/components/dashboard/operations/ResourceUtilization';

import RiskAssessment from '@/components/dashboard/compliance/RiskAssessment';

import StatsOverview from '@/components/dashboard/shared/StatsOverview';

export default function ExecutivePage() {
  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Executive Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Enterprise-wide wealth management analytics overview.
          </p>

        </div>

        <StatsOverview />

        <PortfolioSummary />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <PerformanceInsights />

          <ResourceUtilization />

        </div>

        <RiskAssessment />

      </div>

    </DashboardLayout>
  );
}