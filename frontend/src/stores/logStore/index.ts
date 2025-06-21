import { create } from 'zustand';
import { TLogState, initialLogState } from './logState';
import { TLogActions, createLogActions } from './logActions';
import { TLog } from './type';

export type TLogStore = TLogState & TLogActions;

export const useLogStore = create<TLogStore>()((set, get, store) => ({
  ...initialLogState,
  ...createLogActions(set, get, store),
}));

export type { TLog };
