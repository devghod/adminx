import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
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
  const { createUser, updateUser, isLoading } = useAccountStore();
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: data.username || '',
      first_name: data.first_name || '',
      middle_name: data.middle_name || '',
      last_name: data.last_name || '',
      email: data.email || '',
      mobile: data.mobile || '',
      status: data.status || '',
      new_password: '',
      confirm_password: '',
    },
    resolver: zodResolver(
      isEdit ? updateAccountSchema : createAccountschema,
    ),
  });

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
              description: 'Account update failed',
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
              description: 'Account creation failed',
            });
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-y-4 mb-4'>
          <div className='flex gap-x-4'>
            <Input
              type='text'
              placeholder='First name'
              label='First name'
              {...register('first_name')}
              errors={errors}
            />
            <Input
              type='text'
              placeholder='Middle name'
              label='Middle name'
              {...register('middle_name')}
              errors={errors}
            />
            <Input
              type='text'
              placeholder='Last name'
              label='Last name'
              {...register('last_name')}
              errors={errors}
            />
          </div>
          <Input
            type='text'
            placeholder='Username'
            label='Username'
            {...register('username')}
            errors={errors}
          />
          <Input
            type='text'
            placeholder='Email'
            label='Email'
            {...register('email')}
            errors={errors}
          />
          <Input
            type='tel'
            placeholder='Mobile number'
            label='Mobile number'
            {...register('mobile')}
            errors={errors}
          />
          <Select
            label='Status'
            errors={errors}
            placeholder='Select status'
            items={[
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
              { value: 'hold', label: 'Hold' },
            ]}
            {...register('status')}
          />
          {!isEdit && (
            <div className='flex flex-row gap-x-4 '>
              <PasswordInput
                label='New Password'
                errors={errors}
                className='w-full'
                {...register('new_password')}
              />
              <PasswordInput
                label='Confirm password'
                errors={errors}
                className='w-full'
                {...register('confirm_password')}
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
    </>
  );
};

export default CreateEditAccountForm;
