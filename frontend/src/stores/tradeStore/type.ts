export type TTradeJournal = {
  _id?: string;
  date_created?: string;
  date_modified?: string;
  status?: "win" | "lose" | "draw";
  trade_type?: string;
  amount?: number;
};

export type TTradeJournals = TTradeJournal[] | [];

export type TCreateTradeJournal = {
  status?: "win" | "lose" | "draw";
  trade_type?: string;
  amount?: number;
};
