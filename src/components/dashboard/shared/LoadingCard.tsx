'use client';

export default function LoadingCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 animate-pulse">

      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>

      <div className="h-10 bg-gray-200 rounded w-1/2 mb-6"></div>

      <div className="h-3 bg-gray-200 rounded w-1/4"></div>

    </div>
  );
}