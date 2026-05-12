'use client';

const regulations = [
  {
    title: 'KYC Compliance',
    status: 'Completed',
    color: 'text-green-600',
  },
  {
    title: 'AML Verification',
    status: 'Pending',
    color: 'text-yellow-600',
  },
  {
    title: 'Audit Reports',
    status: 'Approved',
    color: 'text-blue-600',
  },
];

export default function RegulatoryStatus() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Regulatory Status
      </h2>

      <div className="space-y-4">
        {regulations.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-gray-200 rounded-xl p-4"
          >
            <h3 className="font-semibold text-gray-900">
              {item.title}
            </h3>

            <span className={`font-bold ${item.color}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}