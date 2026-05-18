'use client';

import { useState, useMemo } from 'react';

import {
  Search,
  ArrowUpDown,
} from 'lucide-react';

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

  const [search, setSearch] = useState('');

  const [sortKey, setSortKey] = useState<string>('');
  const [sortAsc, setSortAsc] = useState(true);

  const filteredData = useMemo(() => {

    const searched = data.filter((row) =>
      Object.values(row)
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (!sortKey) return searched;

    return [...searched].sort((a, b) => {

      const aValue = String(a[sortKey]);
      const bValue = String(b[sortKey]);

      if (sortAsc) {
        return aValue.localeCompare(bValue);
      }

      return bValue.localeCompare(aValue);
    });

  }, [data, search, sortKey, sortAsc]);

  const handleSort = (key: string) => {

    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }

  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="text-gray-500 mt-1">
            Enterprise analytics table
          </p>

        </div>

        <div className="relative w-full md:w-80">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full pl-11 pr-4 py-3
              rounded-xl border border-gray-200
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
            "
          />

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="border-b">

              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => handleSort(column.key)}
                  className="
                    text-left py-4 px-4
                    text-gray-500 font-semibold
                    cursor-pointer select-none
                  "
                >

                  <div className="flex items-center gap-2">

                    {column.label}

                    <ArrowUpDown size={16} />

                  </div>

                </th>
              ))}

            </tr>

          </thead>

          <tbody>

            {filteredData.map((row, index) => (
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

    </div>
  );
}