import { z } from 'zod';

export const createTradeJournalschema = z.object({
  user_id: z.string().nonempty('Type is required'),
  amount: z.number().min(0, { message: 'Value must be 0 or higher' }),
  percentage: z.number().min(0, { message: 'Value must be 0 or higher' }),
  trade_type: z.string().nonempty('Type is required'),
  status: z.string().nonempty('Status is required'),
  date_entry: z.string().nonempty('Date is required'),
  // direction: z.string().nonempty('Direction is required'), // long, short
  // coin: z.string().nonempty('Coin is required'), // SOLUSDT, ETHUSDT, USDJPNY, ...
  // time_frame: z.string().nonempty('Coin is required'), // 1m, 3m, 1h, 5h, 1d, ...
});

export const updateTradeJournalSchema = z.object({
  user_id: z.string().nonempty('Type is required'),
  amount: z.number().min(0, { message: 'Value must be 0 or higher' }),
  percentage: z.number().min(0, { message: 'Value must be 0 or higher' }),
  trade_type: z.string().nonempty('Type is required'),
  status: z.string().nonempty('Status is required'),
  date_entry: z.string().nonempty('Date is required'),
});
