'use client';

import { useState } from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

import PortfolioSummary from '@/components/dashboard/advisor/PortfolioSummary';
import ClientList from '@/components/dashboard/advisor/ClientList';
import PerformanceInsights from '@/components/dashboard/advisor/PerformanceInsights';

import DashboardFilters from '@/components/dashboard/shared/DashBoardFilters';

export default function AdvisorPage() {

  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [period, setPeriod] = useState('30days');

  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Advisor Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Wealth management overview and client insights.
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

        <PortfolioSummary />

        <ClientList search={search} />

        <PerformanceInsights />

      </div>

    </DashboardLayout>
  );
}