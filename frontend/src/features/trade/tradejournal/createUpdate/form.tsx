'use client';

import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {
  createTradeJournalschema,
  updateTradeJournalSchema,
} from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTradeStore } from '@/stores/tradeStore';
import { useAccountStore } from '@/stores/accountStore';
import { Select } from '@/components/ui/select';
import { toast } from '@/utils/toastHelper';
import { RDatePicker } from '@/components/ui/datepicker';

const CreateEditTradeJournalForm = ({
  data,
  onClose,
}: {
  data: any;
  onClose: any;
}) => {
  const {
    createTradeJournal,
    updateTradeJournal,
    isLoading,
    message,
  } = useTradeStore();

  const { profile } = useAccountStore();

  const [isEdit, setIsEdit] = useState(false);

  const methods = useForm({
    defaultValues: {
      trade_type: data.trade_type || '',
      status: data.status || '',
      amount: data.amount || 0,
      date_entry: data.date_entry || '',
      user_id: profile._id || '',
    },
    resolver: zodResolver(
      isEdit ? updateTradeJournalSchema : createTradeJournalschema,
    ),
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  useEffect(() => {
    if (data._id) setIsEdit(true);
  }, [data._id]);

  const onSubmit = async (journal: any) => {
    if (isEdit) {
      journal._id = data._id;
      // journal.date_entry = new Date(journal.date_entry);

      await updateTradeJournal(journal)
        .then((res: any) => {
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
        .catch((err: any) => {
          console.error(err);
        });
    } else {
      await createTradeJournal(journal)
        .then((res: any) => {
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
        .catch((err: any) => {
          console.debug(`>> ${err}`);
          console.error(err);
        });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-96 flex flex-col gap-y-4 my-6'>
          <div className='grid grid-cols-2 gap-x-4'>
            <Select
              label='Trade Type'
              placeholder='Select Type'
              items={[
                { value: 'crypto', label: 'Crypto' },
                { value: 'currency', label: 'Currency' },
              ]}
              name='trade_type'
            />
            <Select
              label='Status'
              placeholder='Select Status'
              items={[
                { value: 'win', label: 'Win' },
                { value: 'lose', label: 'Lose' },
                { value: 'draw', label: 'Draw' },
              ]}
              name='status'
            />
          </div>
          <div className='grid grid-cols-2 gap-x-4'>
            <RDatePicker name='date_entry' label='Date Entry' />
            <Input
              type='number'
              placeholder='00'
              label='Amount'
              name='amount'
              validation={{ valueAsNumber: true }}
            />
          </div>
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

export default CreateEditTradeJournalForm;
