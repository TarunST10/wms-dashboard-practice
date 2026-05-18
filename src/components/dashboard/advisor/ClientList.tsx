'use client';

import { useMemo } from 'react';

import DataTable from '@/components/dashboard/shared/DataTable';

import {
  clientTableData,
} from '@/lib/mock-data/advisor';

type Props = {
  search?: string;
};

const columns = [
  {
    key: 'name',
    label: 'Client Name',
  },
  {
    key: 'portfolio',
    label: 'Portfolio Value',
  },
  {
    key: 'growth',
    label: 'Growth',
  },
];

export default function ClientList({
  search = '',
}: Props) {

  const filteredData = useMemo(() => {
    return clientTableData.filter((client) =>
      client.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <DataTable
      title="Client Portfolio Overview"
      columns={columns}
      data={filteredData}
    />
  );
}