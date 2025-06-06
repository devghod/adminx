import { TUser } from '@/stores/accountStore';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';

export const columns: ColumnDef<TUser>[] = [
  {
    header: () => <div className='text-right'>ID</div>,
    cell: ({ row }: any) => (
      <div className='text-right font-semibold'>
        {row.getValue('_id')}
      </div>
    ),
    accessorKey: '_id',
    id: '_id',
    size: 50,
    enableSorting: false,
  },
  {
    header: 'First Name',
    accessorKey: 'first_name',
    id: 'first_name',
    size: 200,
    enableSorting: false,
  },
  {
    header: 'Middle Name',
    accessorKey: 'middle_name',
    id: 'middle_name',
    size: 200,
    enableSorting: false,
  },
  {
    header: 'Last Name',
    accessorKey: 'last_name',
    id: 'last_name',
    size: 200,
    enableSorting: false,
  },
  {
    header: 'Username',
    accessorKey: 'username',
    id: 'username',
    size: 200,
    enableSorting: false,
  },
  {
    header: 'Email',
    accessorFn: (row: any) => row.email,
    id: 'email',
    size: 200,
    enableSorting: false,
  },
  {
    header: 'Status',
    cell: ({ row }: any) => {
      const status = row.getValue('status');
      const theme: any = {
        active: 'success',
        deactive: 'danger',
      };

      return (
        <Badge
          size='xs'
          colorTheme={theme[status] || ''}
          data={status}
          className='capitalize rounded'
        />
      );
    },
    accessorFn: (row: any) => row.status,
    id: 'status',
    size: 100,
    enableSorting: false,
  },
];
