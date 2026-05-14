'use client';

type Column = {
  key: string;
  label: string;
};

type Props = {
  title: string;
  columns: Column[];
  data: Record<string, string | number>[];
};

export default function DataTable({
  title,
  columns,
  data,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto hover:shadow-xl transition-all duration-300">

      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {title}
      </h2>

      <table className="w-full border-collapse">

        <thead>

          <tr className="border-b">

            {columns.map((column) => (
              <th
                key={column.key}
                className="text-left py-3 px-4 text-gray-500 font-semibold"
              >
                {column.label}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b hover:bg-gray-50 transition"
            >

              {columns.map((column) => (
                <td
                  key={column.key}
                  className="py-4 px-4 text-gray-900"
                >
                  {row[column.key]}
                </td>
              ))}

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}