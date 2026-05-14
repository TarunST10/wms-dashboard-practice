'use client';

import DataTable from '@/components/dashboard/shared/DataTable';

import {
  clientTableData,
} from '@/lib/mock-data/advisor';

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

export default function ClientList() {
  return (
    <DataTable
      title="Client Portfolio Overview"
      columns={columns}
      data={clientTableData}
    />
  );
}