'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="max-w-5xl w-full">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-gray-900">
            Wealth Management System
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Enterprise Analytics Dashboard Platform
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <Link
            href="/dashboard/executive"
            className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Executive
            </h2>

            <p className="text-gray-500 mt-2">
              Enterprise analytics overview
            </p>
          </Link>

          <Link
            href="/dashboard/advisor"
            className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Advisor
            </h2>

            <p className="text-gray-500 mt-2">
              Portfolio and client insights
            </p>
          </Link>

          <Link
            href="/dashboard/operations"
            className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Operations
            </h2>

            <p className="text-gray-500 mt-2">
              Resource and process monitoring
            </p>
          </Link>

          <Link
            href="/dashboard/compliance"
            className="bg-white rounded-2xl shadow p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold text-gray-900">
              Compliance
            </h2>

            <p className="text-gray-500 mt-2">
              Regulatory and audit tracking
            </p>
          </Link>

        </div>

      </div>

    </div>
  );
}