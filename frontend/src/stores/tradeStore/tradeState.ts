import { TTradeJournal } from './type';

export type TTradeState = {
  tradeJournal: TTradeJournal;
  tradeJournals: TTradeJournal[];
  size: number;
  page: number;
  totalTradeJournals: number;
  message: string;
  isLoading: boolean;
  filters?: any;
  stats: {
    pieData: any[];
    lineData: any[];
    profitLossData: { profit: number, loss: number };
  };
};

export const initialTradeState: TTradeState = {
  tradeJournal: {},
  tradeJournals: [],
  size: 10,
  page: 1,
  totalTradeJournals: 0,
  message: '',
  isLoading: false,
  filters: {},
  stats: {
    pieData: [],
    lineData: [],
    profitLossData: { profit: 0, loss: 0 },
  },
};
