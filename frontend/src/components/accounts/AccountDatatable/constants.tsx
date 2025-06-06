import { createColumnHelper } from '@tanstack/react-table';
import { TUsers as TAccounts } from '@/stores/accountStore/type';

export const columnHelper = createColumnHelper<TAccounts>();

export const columns = [
  columnHelper.accessor('_id', {
    id: '_id',
    header: 'ID',
    size: 100,
    enableSorting: false,
    cell: props => props.getValue(),
  }),
  columnHelper.accessor('username', {
    id: 'username',
    header: 'Username',
    size: 100,
    enableSorting: false,
    cell: props => props.getValue(),
  }),
  columnHelper.accessor('first_name', {
    header: () => <span>First Name</span>,
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('middle_name', {
    id: 'middle_name',
    cell: info => info.getValue(),
    header: () => <span>Middle Name</span>,
    footer: props => props.column.id,
  }),
  columnHelper.accessor('last_name', {
    id: 'last_name',
    cell: info => info.getValue(),
    header: () => <span>Last Name</span>,
    footer: props => props.column.id,
  }),
  // columnHelper.group({
  //   header: 'Name',
  //   footer: props => props.column.id,
  //   columns: [
  //     columnHelper.accessor('first_name', {
  //       header: () => <span>First Name</span>,
  //       cell: info => info.getValue(),
  //       footer: props => props.column.id,
  //     }),
  //     columnHelper.accessor('middle_name', {
  //       id: 'middle_name',
  //       cell: info => info.getValue(),
  //       header: () => <span>Middle Name</span>,
  //       footer: props => props.column.id,
  //     }),
  //     columnHelper.accessor('last_name', {
  //       id: 'last_name',
  //       cell: info => info.getValue(),
  //       header: () => <span>Last Name</span>,
  //       footer: props => props.column.id,
  //     }),
  //   ],
  // }),
  columnHelper.accessor('email', {
    id: 'email',
    header: () => <span>Email</span>,
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
];
