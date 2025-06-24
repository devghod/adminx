import { TUser, TStatistics } from './type';

export type TAccountState = {
  profile: TUser;
  users: TUser[];
  size: number;
  page: number;
  totalUsers: number;
  statistics: TStatistics;
  message: string;
  isLoading: boolean;
  profileIsLoading: boolean;
  filters?: any;
};

export const initialAccountState: TAccountState = {
  profile: {},
  users: [],
  size: 10,
  page: 1,
  totalUsers: 0,
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
  profileIsLoading: false,
  filters: {},
};
