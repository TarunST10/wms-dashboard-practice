'use client';

import Link from 'next/link';

import {
  usePathname,
  useRouter,
} from 'next/navigation';

import { useState } from 'react';

import {
  Briefcase,
  Settings,
  ShieldCheck,
  Menu,
  X,
  LayoutDashboard,
} from 'lucide-react';

import ThemeToggle from '@/components/dashboard/shared/ThemeToggle';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-950">

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
          w-64 h-screen
          bg-white dark:bg-gray-900
          shadow-xl p-6
          transition-transform duration-300
          overflow-y-auto
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
            className="md:hidden text-gray-900 dark:text-white"
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
                  : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600'
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
                  : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600'
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
                  : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600'
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
                  : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600'
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

        {/* Sidebar Analytics */}
        <div
          className="
            mt-10 p-5 rounded-2xl
            bg-blue-600 text-white
          "
        >

          <p className="text-sm text-blue-100">
            Monthly Revenue
          </p>

          <h3 className="text-3xl font-bold mt-2">
            $12.4M
          </h3>

          <div className="mt-4">

            <div className="flex items-center justify-between text-sm">

              <span className="text-blue-100">
                Growth
              </span>

              <span>
                +18%
              </span>

            </div>

            <div
              className="
                w-full h-2 rounded-full
                bg-blue-400 mt-2 overflow-hidden
              "
            >

              <div
                className="
                  h-full bg-white rounded-full
                  w-[78%]
                "
              />

            </div>

          </div>

        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1">

        {/* Mobile Menu */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            fixed top-4 left-4 z-30 md:hidden
            bg-white dark:bg-gray-900
            shadow-lg rounded-xl p-3
            text-gray-900 dark:text-white
          "
        >
          <Menu size={22} />
        </button>

        {/* Header */}
        <header
          className="
            bg-white dark:bg-gray-900
            border-b border-gray-200 dark:border-gray-800
            shadow-sm
            px-6 py-4
            flex items-center justify-between
            sticky top-0 z-30
            backdrop-blur-lg
          "
        >

          <div className="ml-14 md:ml-0">

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Wealth Management System
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Enterprise Analytics Dashboard
            </p>

          </div>

          <div className="flex items-center gap-4">

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User */}
            <div className="flex items-center gap-4">

              <div className="text-right hidden sm:block">

                <p className="font-semibold text-gray-900 dark:text-white">
                  Tarun
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
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

              {/* Logout */}
              <button
                onClick={() => {

                  document.cookie =
                    'wms-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

                  router.push('/login');

                }}
                className="
                  px-4 py-2 rounded-xl
                  bg-red-500 text-white
                  text-sm font-semibold
                  hover:bg-red-600
                  transition
                "
              >
                Logout
              </button>

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