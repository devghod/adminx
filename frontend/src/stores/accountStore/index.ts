import { create } from 'zustand';
import { TAccountState, initialAccountState } from './accountState';
import {
  TAccountActions,
  createAccountActions,
} from './accountActions';
import { TUser, TCreateUser, TStatistics } from './type';

export type TAccountStore = TAccountState & TAccountActions;

export const useAccountStore = create<TAccountStore>()(
  (set, get, store) => ({
    ...initialAccountState,
    ...createAccountActions(set, get, store),
  }),
);

export type { TUser, TCreateUser, TStatistics };