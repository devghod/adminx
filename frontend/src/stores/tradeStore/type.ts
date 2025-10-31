export type TTradeJournal = {
  _id?: string;
  date_created?: string;
  date_modified?: string;
  status?: 'win' | 'lose' | 'draw';
  percentage?: number;
  trade_type?: string;
  amount?: number;
  date_entry?: 'crypto' | 'currency';
};

export type TTradeJournals = TTradeJournal[] | [];

export type TCreateTradeJournal = {
  _id?: string;
  status: 'win' | 'lose' | 'draw';
  trade_type: 'crypto' | 'currency';
  amount: number;
  date_entry: string;
  percentage: number;
};
