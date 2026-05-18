'use client';

import { useState } from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

import PortfolioSummary from '@/components/dashboard/advisor/PortfolioSummary';
import PerformanceInsights from '@/components/dashboard/advisor/PerformanceInsights';

import RiskAssessment from '@/components/dashboard/compliance/RiskAssessment';

import ExecutiveOverview from '@/components/dashboard/executive/ExecutiveOverview';
import RevenueAnalytics from '@/components/dashboard/executive/RevenueAnalytics';
import ExecutiveInsights from '@/components/dashboard/executive/ExecutiveInsights';

import DashboardFilters from '@/components/dashboard/shared/DashBoardFilters';

export default function ExecutivePage() {

  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('30days');

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

        <DashboardFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          period={period}
          setPeriod={setPeriod}
        />

        <ExecutiveOverview />

        <PortfolioSummary />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <PerformanceInsights />

          <RevenueAnalytics />

        </div>

        <RiskAssessment />

        <ExecutiveInsights />

      </div>

    </DashboardLayout>
  );
}