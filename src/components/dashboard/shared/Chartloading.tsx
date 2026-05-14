'use client';

export default function ChartLoading() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 animate-pulse">

      <div className="h-5 bg-gray-200 rounded w-1/3 mb-3"></div>

      <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>

      <div className="h-72 bg-gray-200 rounded-xl"></div>

    </div>
  );
}