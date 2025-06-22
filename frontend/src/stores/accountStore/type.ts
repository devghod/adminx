export type TUser = {
  _id?: string;
  username?: string;
  email?: string;
  status?: string;
  date_created?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  mobile?: string;
  image?: string;
};

export type TUsers = TUser[] | [];

export type TCreateUser = {
  _id?: string;
  username?: string;
  email?: string;
  status?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  password?: string;
};

export type TStatistics = {
  _id?: null;
  totalCount?: number;
  activeCount?: number;
  inactiveCount?: number;
  softDeleteCount?: number;
  holdCount?: number;
};
