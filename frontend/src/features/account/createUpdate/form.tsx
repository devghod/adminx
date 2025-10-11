import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { createAccountschema, updateAccountSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PasswordInput } from '@/components/ui/password';
import { useAccountStore } from '@/stores/accountStore';
import { Select } from '@/components/ui/select';
import { toast } from '@/utils/toastHelper';

const CreateEditAccountForm = ({
  data,
  onClose,
}: {
  data: any;
  onClose: any;
}) => {
  const { createUser, updateUser, isLoading, message } =
    useAccountStore();
  const [isEdit, setIsEdit] = useState(false);

  const methods = useForm({
    defaultValues: {
      username: data.username || '',
      first_name: data.first_name || '',
      middle_name: data.middle_name || '',
      last_name: data.last_name || '',
      email: data.email || '',
      mobile: data.mobile || '',
      status: data.status || '',
      gender: data.gender || '',
      new_password: '',
      confirm_password: '',
    },
    resolver: zodResolver(
      isEdit ? updateAccountSchema : createAccountschema,
    ),
  });

  const { handleSubmit } = methods;

  useEffect(() => {
    if (data._id) setIsEdit(true);
  }, [data._id]);

  const onSubmit = async (account: any) => {
    account.password = account.new_password;

    delete account.new_password;
    delete account.confirm_password;

    if (isEdit) {
      account._id = data._id;
      delete account.password;

      await updateUser(account)
        .then(res => {
          if (res) {
            toast({
              type: 'success',
              title: 'Success',
              description: 'Account updated successfully',
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
        .catch(err => {
          console.error(err);
        });
    } else {
      await createUser(account)
        .then(res => {
          console.debug(res);
          if (res) {
            toast({
              type: 'success',
              title: 'Success',
              description: 'Account created successfully',
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
          console.debug(`>> ${err}`);
          console.error(err);
        });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-y-4 mb-4'>
          <div className='flex gap-x-4'>
            <Input
              type='text'
              placeholder='First name'
              label='First name'
              name='first_name'
            />
            <Input
              type='text'
              placeholder='Middle name'
              label='Middle name'
              name='middle_name'
            />
            <Input
              type='text'
              placeholder='Last name'
              label='Last name'
              name='last_name'
            />
          </div>
          <Input
            type='text'
            placeholder='Username'
            label='Username'
            name='username'
          />
          <Input
            type='text'
            placeholder='Email'
            label='Email'
            name='email'
          />
          <Input
            type='tel'
            placeholder='Mobile number'
            label='Mobile number'
            name='mobile'
          />
          <div className='w-full flex flex-row gap-x-4'>
            <Select
              className='flex-1'
              label='Gender'
              placeholder='Select gender'
              items={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
              ]}
              name='gender'
            />
            <Select
              className='flex-1'
              label='Status'
              placeholder='Select status'
              items={[
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' },
                { value: 'hold', label: 'Hold' },
              ]}
              name='status'
            />
          </div>
          {!isEdit && (
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
          )}
        </div>
        <Button
          type='submit'
          theme={isEdit ? 'fill-success' : 'fill-primary'}
          shape='rounded'
          isLoading={isLoading}
        >
          {isEdit ? 'Update' : 'Create'}
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreateEditAccountForm;
