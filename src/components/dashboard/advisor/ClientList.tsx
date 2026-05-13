'use client';

import DataTable from '@/components/dashboard/shared/DataTable';

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

const data = [
  {
    name: 'John Smith',
    portfolio: '$2.4M',
    growth: '+12%',
  },
  {
    name: 'Emma Johnson',
    portfolio: '$1.8M',
    growth: '+8%',
  },
  {
    name: 'Michael Brown',
    portfolio: '$3.1M',
    growth: '+15%',
  },
  {
    name: 'Sophia Wilson',
    portfolio: '$4.2M',
    growth: '+18%',
  },
];

export default function ClientList() {
  return (
    <DataTable
      title="Client Portfolio Overview"
      columns={columns}
      data={data}
    />
  );
}