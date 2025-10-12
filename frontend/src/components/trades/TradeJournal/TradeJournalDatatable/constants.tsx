import { createColumnHelper } from '@tanstack/react-table';
import { TTradeJournals } from '@/stores/tradeStore/type';
import { Badge } from '@/components/ui/badge';
import { dateFormat } from '@/utils/dateHelper';

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
    size: 100,
    enableGlobalFilter: true,
    enableColumnFilter: true,
    enableSorting: true,
    header: () => <div className='text-left'>Trade Type</div>,
    cell: (props: any) => (
      <div className='text-left capitalize'>{props.getValue()}</div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('status', {
    id: 'status',
    size: 100,
    header: () => <div className='text-left'>Status</div>,
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
  columnHelper.accessor('amount', {
    id: 'amount',
    header: () => <div className='text-left'>Amount</div>,
    cell: (props: any) => (
      <div className='text-left'>{props.getValue()}</div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('date_entry', {
    id: 'date_entry',
    header: () => <div className='text-left'>Date Entry</div>,
    cell: (props: any) => (
      <div className='text-left'>
        {dateFormat(props.getValue(), 'MM-DD-YYYY')}
      </div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('date_created', {
    id: 'date_created',
    header: () => <div className='text-left'>Date Created</div>,
    cell: (props: any) => (
      <div className='text-left'>
        {dateFormat(props.getValue(), 'MM-DD-YYYY')}
      </div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
  columnHelper.accessor('date_modified', {
    id: 'date_modified',
    header: () => <div className='text-left'>Date Modified</div>,
    cell: (props: any) => (
      <div className='text-left'>
        {dateFormat(props.getValue(), 'MM-DD-YYYY')}
      </div>
    ),
    footer: props => (
      <div className='text-left'>{props.column.id}</div>
    ),
  }),
];
