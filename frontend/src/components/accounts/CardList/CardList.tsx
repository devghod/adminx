import CardListItem from './CardListItem';

const CardListComponent = ({
  users,
  isLoading,
}: {
  users: any;
  isLoading: boolean;
}) => {

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {users.length === 0 ? (
        <div className='text-center text-gray-500'>
          No users found
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {users.map((user: any, index: number) => (
            <CardListItem key={index} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default CardListComponent;
