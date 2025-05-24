export const columns = [
  {
    header: 'First Name',
    accessorKey: 'first_name',
    id: 'first_name',
    size: 100,
    enableSorting: false,
  },
  {
    header: 'Middle Name',
    accessorKey: 'middle_name',
    id: 'middle_name',
    size: 100,
    enableSorting: false,
  },
  {
    header: 'Last Name',
    accessorKey: 'last_name',
    id: 'last_name',
    size: 100,
    enableSorting: false,
  },
  {
    header: 'Email',
    accessorFn: (row: any) => row.email,
    id: 'email',
    size: 100,
    enableSorting: false,
  },
];
