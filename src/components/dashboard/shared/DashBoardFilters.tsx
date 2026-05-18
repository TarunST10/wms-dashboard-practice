'use client';

import {
  Search,
  CalendarDays,
  Filter,
} from 'lucide-react';

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;

  period: string;
  setPeriod: React.Dispatch<React.SetStateAction<string>>;
};

export default function DashboardFilters({
  search,
  setSearch,
  status,
  setStatus,
  period,
  setPeriod,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-5">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search */}
        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full pl-11 pr-4 py-3
              rounded-xl border border-gray-200
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
            "
          />

        </div>

        {/* Status */}
        <div className="relative">

          <Filter
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="
              w-full pl-11 pr-4 py-3
              rounded-xl border border-gray-200
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              appearance-none bg-white
            "
          >

            <option value="all">
              All Status
            </option>

            <option value="active">
              Active
            </option>

            <option value="pending">
              Pending
            </option>

            <option value="completed">
              Completed
            </option>

          </select>

        </div>

        {/* Period */}
        <div className="relative">

          <CalendarDays
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="
              w-full pl-11 pr-4 py-3
              rounded-xl border border-gray-200
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              appearance-none bg-white
            "
          >

            <option value="7days">
              Last 7 Days
            </option>

            <option value="30days">
              Last 30 Days
            </option>

            <option value="3months">
              Last 3 Months
            </option>

            <option value="year">
              This Year
            </option>

          </select>

        </div>

      </div>

    </div>
  );
}