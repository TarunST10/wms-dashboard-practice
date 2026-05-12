'use client';

const metrics = [
  {
    title: 'Transactions',
    value: '12,847',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Processing Speed',
    value: '1.2s',
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Active Operations',
    value: '342',
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function ProcessMetrics() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Process Metrics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 ${metric.color}`}
          >
            <p className="text-sm">{metric.title}</p>

            <h3 className="text-3xl font-bold mt-2">
              {metric.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}