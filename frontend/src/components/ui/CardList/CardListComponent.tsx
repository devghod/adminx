import { memo } from "react";

const CardListComponent = ({
  users,
  isLoading,
} : {
  users: any;
  isLoading: boolean;
}) => {

  if (isLoading) {
    return <div>Loading...</div>;
  };

  return (
    <>
      {users.length === 0 ? (
        <div className='text-center text-gray-500'>No users found</div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4'>
          {users.map((user: any, index: number) => (
            <Card key={index} user={user} />
          ))}
        </div>
      )} 
    </>
  );
};

export default CardListComponent;

const Card = memo(({ user }: { user: any}) => {

  const fullName = (user?.first_name && user?.last_name) ? user.first_name + " " + user.last_name : '';

  return (
    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg shadow bg-white dark:bg-black">
      <div className="">
        {user.first_name}
      </div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
});