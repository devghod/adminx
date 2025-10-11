import { Label } from './label';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker, DatePickerProps } from 'react-datepicker';
import { dateFormat } from '@/utils/dateHelper';
import 'react-datepicker/dist/react-datepicker.css';

const dateVariants = cva(
  'flex h-10 w-full rounded-md border text-slate-700 border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
);

type ReactDatePickerProps = DatePickerProps & {
  name: string;
  validation?: object;
  className?: string;
  label?: string;
  errorMsg?: string;
  type?: string;
};

/**
 * @type {VariantProps<typeof inputVariants>}
 * @param {string} className
 * @param {string} label
 * @param {boolean} hasError
 * @param {any} errors
 * @param {string} type
 * @param {string} ref
 * @param {any} props
 */
export default function RDatePicker({
  name,
  className,
  validation,
  errorMsg,
  label,
  ...props
}: ReactDatePickerProps) {
  const context = useFormContext();

  if (!context) return null;

  const {
    control,
    formState: { errors },
  } = context;

  const hasError =
    errors && typeof errors[name]?.message === 'string'
      ? true
      : false;

  return (
    <div className='flex flex-col gap-y-3'>
      {label && <Label htmlFor={name}>{label}</Label>}

      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({
          field: { onChange, value },
        }: {
          field: { onChange: (value: any) => void; value: any };
        }) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { onChange: _, ...datePickerProps } = props;
          return (
            <DatePicker
              {...(datePickerProps as any)}
              selected={value ? new Date(value) : null}
              onChange={(date: Date | null) => {
                onChange(
                  date
                    ? dateFormat(date.toISOString(), 'YYYY-MM-DD')
                    : '',
                );
              }}
              placeholderText='Select a date'
              className={cn(dateVariants(), className)}
            />
          );
        }}
      />

      {hasError && (
        <p className='text-red-500 text-sm'>
          {typeof errors[name]?.message === 'string'
            ? errors[name]?.message
            : errorMsg}
        </p>
      )}
    </div>
  );
}

export { RDatePicker };
