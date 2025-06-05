import { TUser } from '@/stores/accountStore';
import { ColumnDef } from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdownMenu';
import { Button } from '@/components/ui/button';
import {
  CopyIcon,
  DotsHorizontalIcon,
  EditIcon,
  TrashIcon,
} from '@/components/ui/icons';
import { Badge } from '@/components/ui/badge';
import {
  DialogMenu,
  DialogMenuContent,
  DialogMenuTrigger,
} from '@/components/ui/dialog';

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
  {
    id: 'actions',
    cell: ({ row }) => {
      const data = row.original;
      const { _id } = data;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <DotsHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem
              onClick={() =>
                _id && navigator.clipboard.writeText(_id)
              }
            >
              Copy payment ID <CopyIcon />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-green-600'>
              {/* Edit <EditIcon /> */}
              <EditDialog />
            </DropdownMenuItem>
            <DropdownMenuItem className='text-rose-500 dark:text-rose-700'>
              Delete <TrashIcon />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const EditDialog = () => {
  return (
    <DialogMenu>
      <DialogMenuTrigger asChild>
        <button className='IconButton' aria-label='Customise options'>
          Edit <EditIcon />
        </button>
      </DialogMenuTrigger>
      <DialogMenuContent>
        <h1 className='text-lg font-semibold'>Edit User</h1>
      </DialogMenuContent>
    </DialogMenu>
  );
};
