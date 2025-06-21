import AccountCountCard from './AccountCountCard';
import RecentActivityCard from './RecentActivityCard';

const Main = () => {
  return (
    <div className='flex gap-4'>
      <AccountCountCard />
      <RecentActivityCard />
    </div>
  );
};

export default Main;
