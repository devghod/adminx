import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTradeJournalschema, updateTradeJournalSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTradeStore } from '@/stores/tradeStore';
import { Select } from '@/components/ui/select';
import { toast } from '@/utils/toastHelper';

const CreateEditTradeJournalForm = ({
  data,
  onClose,
}: {
  data: any;
  onClose: any;
}) => {
  const { createTradeJournal, updateTradeJournal, isLoading, message } =
    useTradeStore();
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      trade_type: data.trade_type || '',
      status: data.status || '',
      amount: data.amount || '',
    },
    resolver: zodResolver(
      isEdit ? updateTradeJournalSchema : createTradeJournalschema,
    ),
  });

  useEffect(() => {
    if (data._id) setIsEdit(true);
  }, [data._id]);

  const onSubmit = async (journal: any) => {
    if (isEdit) {
      journal._id = data._id;

      await updateTradeJournal(journal)
        .then(res => {
          if (res) {
            toast({
              type: 'success',
              title: 'Success',
              description: 'Journal updated successfully',
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
      await createTradeJournal(journal)
        .then(res => {
          if (res) {
            toast({
              type: 'success',
              title: 'Success',
              description: 'Journal created successfully',
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-96 flex flex-col gap-y-4 my-5'>
          <div className='flex gap-x-4'>
            <Select
              className='flex'
              label='Trade Type'
              errors={errors}
              placeholder='Select Type'
              items={[
                { value: 'crypto', label: 'Crypto' },
                { value: 'currency', label: 'Currency' },
              ]}
              {...register('trade_type')}
            />
            <Select
              className='flex'
              label='Status'
              errors={errors}
              placeholder='Select Status'
              items={[
                { value: 'win', label: 'Win' },
                { value: 'lose', label: 'Lose' },
                { value: 'draw', label: 'Draw' },
              ]}
              {...register('status')}
            />
          </div>
          <Input
            type='string'
            placeholder='00'
            label='Amount'
            {...register('amount')}
            errors={errors}
          />
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

export default CreateEditTradeJournalForm;