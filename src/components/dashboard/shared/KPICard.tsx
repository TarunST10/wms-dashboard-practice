'use client';

type Props = {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
};

export default function KPICard({
  title,
  value,
  change,
  icon,
  color,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-2">
            {value}
          </h3>

          <p className="text-green-600 font-semibold mt-2">
            {change}
          </p>

        </div>

        <div className={`p-3 rounded-xl ${color}`}>
          {icon}
        </div>

      </div>

    </div>
  );
}