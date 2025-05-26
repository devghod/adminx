import { TUser } from '@/stores/accountStore';
import { ColumnDef } from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Button } from '@/components/ui/Button';
import {
  CopyIcon,
  DotsHorizontalIcon,
  EditIcon,
  TrashIcon,
} from '@/components/ui/Icons';
import { Badge } from '@/components/ui/Badge';
import { DialogMenu, DialogMenuContent, DialogMenuTrigger } from '@/components/ui/dialog';
import * as Dialog from '@radix-ui/react-dialog';

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
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant='ghost' className='h-8 w-8 p-0'>
        //       <span className='sr-only'>Open menu</span>
        //       <DotsHorizontalIcon />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align='end'>
        //     <DropdownMenuItem
        //       onClick={() =>
        //         _id && navigator.clipboard.writeText(_id)
        //       }
        //     >
        //       Copy payment ID <CopyIcon />
        //     </DropdownMenuItem>
        //     <DropdownMenuSeparator />
        //     <DropdownMenuItem className='text-green-600'>
        //       {/* Edit <EditIcon /> */}
        //       <EditDialog />
        //     </DropdownMenuItem>
        //     <DropdownMenuItem className='text-rose-500 dark:text-rose-700'>
        //       Delete <TrashIcon />
        //     </DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="inline-flex h-[35px] items-center justify-center rounded bg-violet4 px-[15px] font-medium leading-none text-violet11 outline-none outline-offset-1 hover:bg-mauve3 focus-visible:outline-2 focus-visible:outline-violet6 select-none">
              Edit profile
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
            <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
              <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
                Edit profile
              </Dialog.Title>
              <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
                Make changes to your profile here. Click save when you're done.
              </Dialog.Description>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="w-[90px] text-right text-[15px] text-violet11"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                  id="name"
                  defaultValue="Pedro Duarte"
                />
              </fieldset>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label
                  className="w-[90px] text-right text-[15px] text-violet11"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
                  id="username"
                  defaultValue="@peduarte"
                />
              </fieldset>
              <div className="mt-[25px] flex justify-end">
                <Dialog.Close asChild>
                  <button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 outline-none outline-offset-1 hover:bg-green5 focus-visible:outline-2 focus-visible:outline-green6 select-none">
                    Save changes
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Close asChild>
                <button
                  className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                  aria-label="Close"
                >
                  Close
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
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