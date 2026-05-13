'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Briefcase,
  Settings,
  ShieldCheck,
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">

        <h1 className="text-2xl font-bold text-blue-600 mb-10">
          WMS Dashboard
        </h1>

        <nav className="space-y-4">

          <Link
            href="/dashboard/advisor"
            className={`flex items-center gap-3 p-3 rounded-xl transition ${
              pathname === '/dashboard/advisor'
                ? 'bg-blue-600 text-white'
                : 'hover:bg-blue-100'
            }`}
          >
            <Briefcase size={20} />
            Advisor
          </Link>

          <Link
            href="/dashboard/operations"
            className={`flex items-center gap-3 p-3 rounded-xl transition ${
              pathname === '/dashboard/operations'
                ? 'bg-blue-600 text-white'
                : 'hover:bg-blue-100'
            }`}
          >
            <Settings size={20} />
            Operations
          </Link>

          <Link
            href="/dashboard/compliance"
            className={`flex items-center gap-3 p-3 rounded-xl transition ${
              pathname === '/dashboard/compliance'
                ? 'bg-blue-600 text-white'
                : 'hover:bg-blue-100'
            }`}
          >
            <ShieldCheck size={20} />
            Compliance
          </Link>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">

        {/* Top Navbar */}
        <header className="bg-white shadow-sm border-b px-6 py-4 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Wealth Management System
            </h2>

            <p className="text-sm text-gray-500">
              Analytics Dashboard
            </p>
          </div>

          <div className="flex items-center gap-4">

            <div className="text-right">
              <p className="font-semibold text-gray-900">
                Tarun
              </p>

              <p className="text-sm text-gray-500">
                Frontend Intern
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              T
            </div>

          </div>

        </header>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>

      </main>

    </div>
  );
}