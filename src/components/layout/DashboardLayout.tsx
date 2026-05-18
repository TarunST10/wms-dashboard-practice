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

        {/* Navigation */}
        <nav className="space-y-3">

          {/* Executive */}
          <Link
            href="/dashboard/executive"
            className={`
              relative flex items-center gap-3
              px-4 py-3 rounded-2xl
              transition-all duration-300
              ${
                pathname === '/dashboard/executive'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }
            `}
          >

            {pathname === '/dashboard/executive' && (
              <div
                className="
                  absolute left-0 top-2 bottom-2
                  w-1 rounded-r-full bg-white
                "
              />
            )}

            <LayoutDashboard size={20} />

            Executive

          </Link>

          {/* Advisor */}
          <Link
            href="/dashboard/advisor"
            className={`
              relative flex items-center gap-3
              px-4 py-3 rounded-2xl
              transition-all duration-300
              ${
                pathname === '/dashboard/advisor'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }
            `}
          >

            {pathname === '/dashboard/advisor' && (
              <div
                className="
                  absolute left-0 top-2 bottom-2
                  w-1 rounded-r-full bg-white
                "
              />
            )}

            <Briefcase size={20} />

            Advisor

          </Link>

          {/* Operations */}
          <Link
            href="/dashboard/operations"
            className={`
              relative flex items-center gap-3
              px-4 py-3 rounded-2xl
              transition-all duration-300
              ${
                pathname === '/dashboard/operations'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }
            `}
          >

            {pathname === '/dashboard/operations' && (
              <div
                className="
                  absolute left-0 top-2 bottom-2
                  w-1 rounded-r-full bg-white
                "
              />
            )}

            <Settings size={20} />

            Operations

          </Link>

          {/* Compliance */}
          <Link
            href="/dashboard/compliance"
            className={`
              relative flex items-center gap-3
              px-4 py-3 rounded-2xl
              transition-all duration-300
              ${
                pathname === '/dashboard/compliance'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }
            `}
          >

            {pathname === '/dashboard/compliance' && (
              <div
                className="
                  absolute left-0 top-2 bottom-2
                  w-1 rounded-r-full bg-white
                "
              />
            )}

            <ShieldCheck size={20} />

            Compliance

          </Link>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1">

        {/* Mobile Menu */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            fixed top-4 left-4 z-30 md:hidden
            bg-white shadow-lg rounded-xl p-3
          "
        >
          <Menu size={22} />
        </button>

        {/* Header */}
        <header
          className="
            bg-white border-b shadow-sm
            px-6 py-4
            flex items-center justify-between
            sticky top-0 z-30
            backdrop-blur-lg bg-white/90
          "
        >

          <div className="ml-14 md:ml-0">

            <h2 className="text-2xl font-bold text-gray-900">
              Wealth Management System
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Enterprise Analytics Dashboard
            </p>

          </div>

          <div className="flex items-center gap-6">

            {/* KPI */}
            <div className="hidden lg:flex items-center gap-6">

              <div>

                <p className="text-xs text-gray-400">
                  Revenue
                </p>

                <h3 className="font-bold text-gray-900">
                  $12.4M
                </h3>

              </div>

              <div>

                <p className="text-xs text-gray-400">
                  Clients
                </p>

                <h3 className="font-bold text-gray-900">
                  248
                </h3>

              </div>

            </div>

            {/* User */}
            <div className="flex items-center gap-4">

              <div className="text-right hidden sm:block">

                <p className="font-semibold text-gray-900">
                  Tarun
                </p>

                <p className="text-sm text-gray-500">
                  Frontend Intern
                </p>

              </div>

              <div
                className="
                  w-11 h-11 rounded-2xl
                  bg-blue-600 text-white
                  flex items-center justify-center
                  font-bold shadow-lg
                "
              >
                T
              </div>

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