import { TUser, TStatistics } from './type';

export type TAccountState = {
  user: TUser;
  users: TUser[];
  statistics: TStatistics;
  message: string;
  isLoading: boolean;
};

export const initialAccountState: TAccountState = {
  user: {},
  users: [],
  statistics: {
    _id: null,
    totalCount: 0,
    activeCount: 0,
    inactiveCount: 0,
    softDeleteCount: 0,
    holdCount: 0,
  },
  message: '',
  isLoading: false,
};
