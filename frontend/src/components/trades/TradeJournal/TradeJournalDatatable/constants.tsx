import { createColumnHelper } from '@tanstack/react-table';
import { TTradeJournals } from '@/stores/tradeStore/type';
import { Badge } from '@/components/ui/badge';
import { dateFormat } from '@/utils/dateHelper';
import {
  CryptoIcon,
  CoinIcon,
  DateIcon,
  TrophyIcon,
  PercentIcon,
} from '@/components/ui/icons';
import CircularProgress from '@/components/ui/circularProgress';

export const columnHelper = createColumnHelper<TTradeJournals>();

export const columns = [
  columnHelper.accessor('_id', {
    id: '_id',
    size: 10,
    enableSorting: false,
    header: () => <div className='text-left'>ID</div>,
    cell: (props: any) => (
      <div className='text-left line-clamp-1 text-xs text-slate-500'>
        {props.getValue()}
      </div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
    meta: {
      display: false,
    },
  }),
  columnHelper.accessor('trade_type', {
    id: 'tradeType',
    size: 80,
    enableGlobalFilter: true,
    enableColumnFilter: true,
    enableSorting: true,
    header: () => (
      <div className='text-left flex gap-1'>
        <CryptoIcon className='h-5' />
        Type
      </div>
    ),
    cell: (props: any) => (
      <div className='text-left uppercase font-medium'>
        {props.getValue()}
      </div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('status', {
    id: 'status',
    size: 50,
    header: () => (
      <div className='text-left flex gap-1'>
        <TrophyIcon className='h-5' />
        Status
      </div>
    ),
    cell: (props: any) => (
      <Badge
        data={props.getValue()}
        size='xs'
        colorTheme={
          props.getValue() === 'win'
            ? 'success'
            : props.getValue() === 'lose'
              ? 'danger'
              : props.getValue() === 'draw'
                ? 'warning'
                : 'default'
        }
        className='px-[7px] py-[2px] uppercase rounded font-bold'
      />
    ),
  }),
  columnHelper.accessor('percentage', {
    id: 'percentage',
    size: 10,
    header: () => (
      <div className='text-left flex gap-1'>
        <PercentIcon className='h-5' />
      </div>
    ),
    cell: (props: any) => {
      const percentage = props.getValue() || 0;
      return (
        <div className=''>
          <CircularProgress
            value={percentage}
            size={32}
            strokeWidth={4}
          />
        </div>
      );
    },
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('amount', {
    id: 'amount',
    size: 100,
    header: () => (
      <div className='text-left flex gap-1'>
        <CoinIcon className='h-5' />
        Amount
      </div>
    ),
    cell: (props: any) => (
      <div className='text-left font-light md:font-normal'>
        ${props.getValue()}
      </div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('date_entry', {
    id: 'date_entry',
    size: 100,
    header: () => (
      <div className='text-left flex gap-1'>
        <DateIcon className='h-5' />
        Date Entry
      </div>
    ),
    cell: (props: any) => (
      <div className='text-left font-light md:font-normal'>
        {dateFormat(props.getValue(), 'MM-DD-YYYY')}
      </div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('date_created', {
    id: 'date_created',
    size: 100,
    header: () => (
      <div className='text-left flex gap-1'>
        <DateIcon className='h-5' />
        Date Created
      </div>
    ),
    cell: (props: any) => (
      <div className='text-left font-semibold md:font-bold'>
        {dateFormat(props.getValue(), 'MM-DD-YYYY')}
      </div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
    meta: {
      display: false,
    },
  }),
  columnHelper.accessor('date_modified', {
    id: 'date_modified',
    header: () => (
      <div className='text-left flex gap-1'>
        <DateIcon className='h-5' />
        Date Modified
      </div>
    ),
    cell: (props: any) => (
      <div className='text-left'>
        {dateFormat(props.getValue(), 'MM-DD-YYYY')}
      </div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
    meta: {
      display: false,
    },
  }),
];
