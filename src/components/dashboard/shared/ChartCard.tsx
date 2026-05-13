'use client';

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ChartCard({
  title,
  description,
  children,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="text-gray-500 mt-1">
          {description}
        </p>

      </div>

      <div className="h-80">
        {children}
      </div>

    </div>
  );
}