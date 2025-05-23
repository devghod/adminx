import { memo } from 'react';
import { dateFormat } from '@/utils/dateHelper';
import { Badge } from '@/components/ui/Badge';

const CardListItem = memo(({ user }: { user: any }) => {
  const fullName =
    user?.first_name && user?.last_name
      ? user.first_name + ' ' + user.last_name
      : 'No Name';
  const email = user?.email ? user.email : '';
  const createdAt = user?.date_created
    ? dateFormat(user.date_created, 'MM/DD/YYYY')
    : '';
  const mobile = user?.mobile ? user.mobile : '';

  return (
    <div className='p-4 border border-gray-200 dark:border-gray-800 rounded-lg shadow bg-white dark:bg-black'>
      <div className=''>{fullName}</div>
      <div className=''>{email}</div>
      <div className=''>{mobile}</div>
      <div className=''>
        <Badge
          data={user?.status}
          size='xs'
          colorTheme='info'
          variant='subtle'
          className='capitalize rounded'
        />
      </div>
      <div className=''>{createdAt}</div>
    </div>
  );
});

export default CardListItem;
