import { z } from 'zod';

export const createTradeJournalschema = z.object({
  amount: z.string().nonempty('Amount is required'),
  trade_type: z.string().nonempty('Type is required'),
  status: z.string().nonempty('Status is required'),
});

export const updateTradeJournalSchema = z.object({
  amount: z.string().nonempty('Amount is required'),
  trade_type: z.string().nonempty('Type is required'),
  status: z.string().nonempty('Status is required'),
});
