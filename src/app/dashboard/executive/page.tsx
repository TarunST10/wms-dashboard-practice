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

import NotificationsPanel from '@/components/dashboard/shared/NotificationPanel';

import ActivityFeed from '@/components/dashboard/shared/ActivityFeed';

import AnalyticsTabs from '@/components/dashboard/shared/AnalyticsTabs';

import PageWrapper from '@/components/dashboard/shared/PageWrapper';

export default function ExecutivePage() {

  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('30days');

  return (
    <DashboardLayout>

      <PageWrapper>

        <div className="space-y-6">

          {/* Header */}
          <div>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Executive Dashboard
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Enterprise-wide wealth management analytics overview.
            </p>

          </div>

          {/* Filters */}
          <DashboardFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            period={period}
            setPeriod={setPeriod}
          />

          {/* Analytics Tabs */}
          <AnalyticsTabs />

          {/* KPI Overview */}
          <ExecutiveOverview />

          {/* Portfolio Stats */}
          <PortfolioSummary />

          {/* Charts */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            <PerformanceInsights />

            <RevenueAnalytics />

          </div>

          {/* Risk */}
          <RiskAssessment />

          {/* Notifications */}
          <NotificationsPanel />

          {/* Activity Feed */}
          <ActivityFeed />

          {/* Insights */}
          <ExecutiveInsights />

        </div>

      </PageWrapper>

    </DashboardLayout>
  );
}