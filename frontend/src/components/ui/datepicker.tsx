import * as React from 'react';
// import { Label } from './label';
import { cn } from '@/utils/tailwindMerge';
// import {
//  Controller,
//   useForm
// } from 'react-hook-form';
import {
  // DatePicker,
  // ReactDatePickerCustomHeaderProps,
  DatePickerProps,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

const ReactInput = React.forwardRef<HTMLInputElement, any>(
  ({ value, onClick, className, placeholder }, ref) => {
    return (
      <button
        type='button'
        onClick={onClick}
        ref={ref as any}
        className={cn(
          'flex h-10 w-full items-center justify-between rounded-md border text-slate-700 border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
      >
        <span className='truncate'>{value || placeholder}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4 ml-2 shrink-0'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden
        >
          <path
            fillRule='evenodd'
            d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM5 9a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    );
  },
);

ReactInput.displayName = 'ReactInput';

type Props = DatePickerProps & {
  className?: string;
  id: string;
};

export default function ReactDatePicker(
  {
    // className,
    // id,
    // ...props
  }: Props,
) {
  // const { control } = useForm();

  return (
    <>
      {/* <Controller
        name={id}
        control={control}
        // rules={{ required: 'Date is required' }}
        // render={({ field, fieldState }) => (
        //   <ReactDatePicker
        //     placeholderText='Select a date'
        //     selected={field.value}
        //     onChange={date => field.onChange(date)}
        //     className={`flex h-10 w-full rounded-md border text-slate-700 border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
        //       fieldState.error ? 'border-red-500' : ''
        //     }`}
        //   />
        // )}
      /> */}

      {/* // {handleError() && (
      //   <p className='text-red-500 text-sm'>{handleError()}</p>
      // )} */}
    </>
  );
}

// const ReactDatePicker = React.forwardRef<
//   HTMLInputElement,
//   React.InputHTMLAttributes<HTMLInputElement> & {
//     className?: string;
//     label?: string;
//     errors?: any; // Ojbect
//     type?: string;
//     onChange: () => void;
//   }
// >(({ className, type, label, errors, ...props }, ref) => {
//   const handleError = () => {
//     if (
//       errors &&
//       typeof errors === 'object' &&
//       Object.keys(errors).length > 0 &&
//       props.name
//     ) {
//       return errors[props.name]?.message || '';
//     }
//     return '';
//   };

//   return (
//     <div className='flex flex-col gap-y-3'>
//       {label && <Label htmlFor={props.name}>{label}</Label>}
//       <DatePicker
//         {...props}
//         id={props.name}
//         className={cn(
//           'flex h-10 w-full rounded-md border text-slate-700 border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
//           className,
//         )}
//         onChange={onChange}
//         // type={type}
//         // ref={ref}
//         // {...(type === 'number' && { step: 'any' })}
//         // autoComplete='off'
//       />
//       {handleError() && (
//         <p className='text-red-500 text-sm'>{handleError()}</p>
//       )}
//     </div>
//   );
// });

ReactDatePicker.displayName = 'ReactDatePicker';

export { ReactDatePicker };
