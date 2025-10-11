import { useForm, FormProvider } from 'react-hook-form';
import { changePasswordSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { PasswordInput } from '@/components/ui/password';
import { useAccountStore } from '@/stores/accountStore';
import { toast } from '@/utils/toastHelper';

const ChangePasswordForm = ({
  data,
  onClose,
}: {
  data: any;
  onClose: any;
}) => {
  const { updateUserPassword, isLoading, message } =
    useAccountStore();

  const methods = useForm({
    defaultValues: {
      new_password: '',
      confirm_password: '',
    },
    resolver: zodResolver(changePasswordSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (account: any) => {
    account._id = data._id;
    account.password = account.new_password;

    delete account.new_password;
    delete account.confirm_password;

    await updateUserPassword(account)
      .then((res: any) => {
        if (res) {
          toast({
            type: 'success',
            title: 'Success',
            description: 'Account Password updated successfully',
            className: 'text-green-500',
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
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-y-4 mb-4'>
          <div className='flex flex-row gap-x-4 '>
            <PasswordInput
              label='New Password'
              className='w-full'
              name='new_password'
              type='signup'
            />
            <PasswordInput
              label='Confirm password'
              className='w-full'
              name='confirm_password'
              type='signup'
            />
          </div>
        </div>
        <Button
          type='submit'
          theme='fill-success'
          shape='rounded'
          isLoading={isLoading}
        >
          Update Password
        </Button>
      </form>
    </FormProvider>
  );
};

export default ChangePasswordForm;
