import { create } from 'zustand';
import { TTradeState, initialTradeState } from './tradeState';
import { TTradeActions, createTradeActions } from './tradeActions';
import { TTradeJournal, TCreateTradeJournal } from './type';

export type TTradeStore = TTradeState & TTradeActions;

export const useTradeStore = create<TTradeStore>()(
  (set, get, store) => ({
    ...initialTradeState,
    ...createTradeActions(set, get, store),
  }),
);

export type { TTradeJournal, TCreateTradeJournal };
