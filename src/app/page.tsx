'use client';

import Link from 'next/link';

const dashboards = [
  {
    title: 'Executive Dashboard',
    description: 'Enterprise-wide analytics overview',
    href: '/dashboard/executive',
  },
  {
    title: 'Advisor Dashboard',
    description: 'Portfolio and client management',
    href: '/dashboard/advisor',
  },
  {
    title: 'Operations Dashboard',
    description: 'Process and infrastructure monitoring',
    href: '/dashboard/operations',
  },
  {
    title: 'Compliance Dashboard',
    description: 'Regulatory and audit tracking',
    href: '/dashboard/compliance',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="max-w-6xl w-full">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-gray-900">
            Wealth Management System
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Enterprise Analytics Dashboard Platform
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {dashboards.map((dashboard, index) => (
            <Link
              key={index}
              href={dashboard.href}
              className="bg-white rounded-2xl shadow p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >

              <h2 className="text-2xl font-bold text-gray-900">
                {dashboard.title}
              </h2>

              <p className="text-gray-500 mt-3">
                {dashboard.description}
              </p>

            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}