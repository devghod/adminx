import { useForm } from 'react-hook-form';
import { schema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PasswordInput } from '@/components/ui/password';
import { useAccountStore } from '@/stores/accountStore';
import { Select } from '@/components/ui/select';

const CreateEditAccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      mobile: '',
      password: '',
      confirm_password: '',
    },
    resolver: yupResolver(schema),
  });
  const { createUser, isLoading } = useAccountStore();

  const onSubmit = async (data: any) => {
    console.debug(data);

    delete data.confirm_password;

    await createUser(data)
      .then(res => {
        console.debug(res);
        if (res) {
          console.debug(res);
        } else {
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-y-4 mb-4'>
          <div className='flex gap-x-4'>
            <Input
              type='text'
              placeholder='First name'
              hasLabel
              label='First name'
              {...register('first_name')}
              hasError
              errors={errors}
            />
            <Input
              type='text'
              placeholder='Middle name'
              hasLabel
              label='Middle name'
              {...register('middle_name')}
              hasError
              errors={errors}
            />
            <Input
              type='text'
              placeholder='Last name'
              hasLabel
              label='Last name'
              {...register('last_name')}
              hasError
              errors={errors}
            />
          </div>
          <Input
            type='text'
            placeholder='Username'
            hasLabel
            label='Username'
            {...register('username')}
            hasError
            errors={errors}
          />
          <Input
            type='text'
            placeholder='Email'
            hasLabel
            label='Email'
            {...register('email')}
            hasError
            errors={errors}
          />
          <Input
            type='tel'
            placeholder='Mobile number'
            hasLabel
            label='Mobile number'
            {...register('mobile')}
            hasError
            errors={errors}
          />
          <Select
            label='Status'
            hasLabel
            hasError
            errors={errors}
            items={[
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
              { value: 'hold', label: 'Hold' },
            ]}
            {...register('status')}
          />
          <div className='flex flex-row gap-x-4'>
            <PasswordInput
              id='password'
              hasLabel
              label='Password'
              hasError
              errors={errors}
              className='w-full'
              {...register('password')}
            />
            <PasswordInput
              id='confirm_password'
              hasLabel
              label='Confirm password'
              hasError
              errors={errors}
              className='w-full'
              {...register('confirm_password')}
            />
          </div>
        </div>
        <Button
          type='submit'
          variant='primary'
          shape='rounded'
          isLoading={isLoading}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default CreateEditAccountForm;
