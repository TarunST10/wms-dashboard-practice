'use client';

import DataTable from '@/components/dashboard/shared/DataTable';

import {
  regulatoryStatusData,
} from '@/lib/mock-data/compliance';

const columns = [
  {
    key: 'regulation',
    label: 'Regulation',
  },
  {
    key: 'status',
    label: 'Status',
  },
];

export default function RegulatoryStatus() {
  return (
    <DataTable
      title="Regulatory Status"
      columns={columns}
      data={regulatoryStatusData}
    />
  );
}