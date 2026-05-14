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
  const enhancedData = regulatoryStatusData.map((item) => ({
    ...item,
    status:
      item.status === 'Completed'
        ? '✅ Completed'
        : '⚠️ Pending',
  }));

  return (
    <DataTable
      title="Regulatory Status"
      columns={columns}
      data={enhancedData}
    />
  );
}