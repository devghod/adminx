import { TLog } from './type';

export type TLogState = {
  log: TLog | any;
  logs: TLog[];
  size: number;
  page: number;
  filters: any;
  isLoading: boolean;
};

export const initialLogState: TLogState = {
  log: {},
  logs: [],
  isLoading: false,
  size: 10,
  page: 1,
  filters: {},
};
