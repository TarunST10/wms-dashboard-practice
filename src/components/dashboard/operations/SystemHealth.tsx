'use client';

const systems = [
  {
    name: 'API Server',
    status: 'Healthy',
    color: 'text-green-600',
  },
  {
    name: 'Database',
    status: 'Healthy',
    color: 'text-green-600',
  },
  {
    name: 'Payment Gateway',
    status: 'Warning',
    color: 'text-yellow-600',
  },
];

export default function SystemHealth() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        System Health
      </h2>

      <div className="space-y-4">

        {systems.map((system, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-gray-200 rounded-xl p-4"
          >
            <h3 className="font-semibold text-gray-900">
              {system.name}
            </h3>

            <span className={`font-bold ${system.color}`}>
              {system.status}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}