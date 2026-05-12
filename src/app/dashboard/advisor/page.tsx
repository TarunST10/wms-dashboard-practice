'use client';

import PortfolioSummary from '@/components/dashboard/advisor/PortfolioSummary';
import ClientList from '@/components/dashboard/advisor/ClientList';

export default function AdvisorPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
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
      </div>
    </div>
  );
}