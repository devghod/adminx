export type TLog = {
  _id: string;
  action: string;
  date_created: string;
  id_in_table: string;
  model: string;
  new_data: any;
  user_id_execute: any;
  details: string;
};

export type TLogs = TLog[] | [];
