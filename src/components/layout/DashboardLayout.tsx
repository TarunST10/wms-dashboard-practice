'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import {
  Briefcase,
  Settings,
  ShieldCheck,
  Menu,
  X,
  LayoutDashboard,
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          w-64 h-screen bg-white shadow-xl p-6
          transition-transform duration-300
          ${
            sidebarOpen
              ? 'translate-x-0'
              : '-translate-x-full md:translate-x-0'
          }
        `}
      >

        {/* Mobile Close */}
        <div className="flex items-center justify-between md:block">

          <h1 className="text-2xl font-bold text-blue-600 mb-10">
            WMS Dashboard
          </h1>

          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>

        </div>

        <nav className="space-y-4">

          <Link
            href="/dashboard/executive"
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 p-3 rounded-xl transition ${
              pathname === '/dashboard/executive'
                ? 'bg-blue-600 text-white'
                : 'hover:bg-blue-100'
            }`}
          >
            <LayoutDashboard size={20} />
            Executive
          </Link>

          <Link
            href="/dashboard/advisor"
            onClick={() => setSidebarOpen(false)}
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
            onClick={() => setSidebarOpen(false)}
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
            onClick={() => setSidebarOpen(false)}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-30 md:hidden bg-white shadow-lg rounded-xl p-3"
        >
          <Menu size={22} />
        </button>

        {/* Top Navbar */}
        <header className="bg-white shadow-sm border-b px-6 py-4 flex items-center justify-between">

          <div className="ml-14 md:ml-0">

            <h2 className="text-xl font-bold text-gray-900">
              Wealth Management System
            </h2>

            <p className="text-sm text-gray-500">
              Analytics Dashboard
            </p>

          </div>

          <div className="flex items-center gap-4">

            <div className="text-right hidden sm:block">

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