'use client';

export default function TableLoading() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 animate-pulse">

      <div className="h-5 bg-gray-200 rounded w-1/4 mb-6"></div>

      <div className="space-y-4">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-12 bg-gray-200 rounded-xl"
          />
        ))}

      </div>

    </div>
  );
}