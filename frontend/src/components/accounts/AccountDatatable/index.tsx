import { TUsers as TAccounts } from '@/stores/accountStore/type';
import Datatable from './datatable';

const AccountDatatable = ({
  accounts = [],
  fetchUsers,
}: {
  accounts: TAccounts;
  fetchUsers: () => void;
}) => {
  return (
    <>
      <Datatable accounts={accounts} fetchUsers={fetchUsers} />
    </>
  );
};

export default AccountDatatable;
