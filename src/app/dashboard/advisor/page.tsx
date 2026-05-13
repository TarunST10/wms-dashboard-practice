'use client';

import DashboardLayout from '@/components/layout/DashboardLayout';

import PortfolioSummary from '@/components/dashboard/advisor/PortfolioSummary';
import ClientList from '@/components/dashboard/advisor/ClientList';
import PerformanceInsights from '@/components/dashboard/advisor/PerformanceInsights';

export default function AdvisorPage() {
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

        <PortfolioSummary />

        <ClientList />

        <PerformanceInsights />

      </div>

    </DashboardLayout>
  );
}