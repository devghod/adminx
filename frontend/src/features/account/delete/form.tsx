import { useAccountStore } from '@/stores/accountStore';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/utils/toastHelper';

const DeleteAccount = ({
  data,
  onClose,
}: {
  data: any;
  onClose: any;
}) => {
  const { deleteUser, isLoading, message } = useAccountStore();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: data._id,
    },
  });

  const onSubmit = async (account: any) => {
    await deleteUser(account.id)
      .then(res => {
        if (res) {
          toast({
            type: 'success',
            title: 'Success',
            description: 'Account deleted successfully',
          });
          onClose();
        } else {
          toast({
            type: 'error',
            title: 'Error',
            description: message,
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <p className='mb-5'>
        Are you sure you want to delete
        <span className='text-gray-500 dark:text-gray-400 mx-2'>
          {data.first_name ||
            data.email ||
            data.username ||
            data.mobile}
        </span>
        account?
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type='hidden' {...register('id')} />
        <div className='flex gap-x-1 justify-end'>
          <Button
            type='button'
            theme='outline-neutral'
            shape='rounded'
            disabled={isLoading}
            onClick={() => onClose()}
          >
            Cancel
          </Button>
          <Button
            type='submit'
            theme='fill-danger'
            shape='rounded'
            isLoading={isLoading}
          >
            Delete
          </Button>
        </div>
      </form>
    </>
  );
};

export default DeleteAccount;
