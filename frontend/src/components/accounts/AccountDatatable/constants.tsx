import { createColumnHelper } from '@tanstack/react-table';
import { TUsers as TAccounts } from '@/stores/accountStore/type';
import { Badge } from '@/components/ui/badge';

export const columnHelper = createColumnHelper<TAccounts>();

export const columns = [
  columnHelper.accessor('_id', {
    id: '_id',
    size: 100,
    enableSorting: false,
    header: () => <div className='text-left'>ID</div>,
    cell: (props: any) => (
      <div className='text-left'>{props.getValue()}</div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('username', {
    id: 'username',
    size: 100,
    enableGlobalFilter: true,
    enableColumnFilter: true,
    enableSorting: true,
    meta: { isHidden: true },
    header: () => <div className='text-left'>Username</div>,
    cell: (props: any) => (
      <div className='text-left'>{props.getValue()}</div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('status', {
    size: 100,
    header: () => <div className='text-left'>Status</div>,
    cell: (props: any) => (
      <Badge
        data={props.getValue()}
        size='xs'
        colorTheme={
          props.getValue() === 'active'
            ? 'success'
            : props.getValue() === 'inactive'
              ? 'danger'
              : props.getValue() === 'hold'
                ? 'warning'
                : 'default'
        }
        className='px-[7px] py-[2px] uppercase rounded font-bold'
      />
    ),
  }),
  columnHelper.accessor('first_name', {
    header: () => <div className='text-left'>First Name</div>,
    cell: (props: any) => (
      <div className='text-left'>{props.getValue()}</div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('middle_name', {
    id: 'middle_name',
    enableGlobalFilter: true,
    header: () => <div className='text-left'>Middle Name</div>,
    cell: (props: any) => (
      <div className='text-left'>{props.getValue()}</div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('last_name', {
    id: 'last_name',
    header: () => <div className='text-left'>Last Name</div>,
    cell: (props: any) => (
      <div className='text-left'>{props.getValue()}</div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('email', {
    id: 'email',
    enableGlobalFilter: true,
    header: () => <div className='text-left'>Email</div>,
    cell: info => info.getValue(),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
];
