'use client';

const clients = [
  {
    id: 1,
    name: 'John Smith',
    portfolio: '$2.4M',
    growth: '+12%',
  },
  {
    id: 2,
    name: 'Emma Johnson',
    portfolio: '$1.8M',
    growth: '+8%',
  },
  {
    id: 3,
    name: 'Michael Brown',
    portfolio: '$3.1M',
    growth: '+15%',
  },
];

export default function ClientList() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Client List
      </h2>

      <div className="space-y-4">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex items-center justify-between border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition"
          >
            <div>
              <h3 className="font-semibold text-gray-900">
                {client.name}
              </h3>

              <p className="text-sm text-gray-500">
                Portfolio: {client.portfolio}
              </p>
            </div>

            <div className="text-green-600 font-bold">
              {client.growth}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}