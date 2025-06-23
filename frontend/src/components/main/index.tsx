import AccountCountCard from './AccountCountCard';
import RecentActivityCard from './RecentActivityCard';

const Main = () => {
  return (
    <div className='grid grid-flow-col grid-cols-10 grid-rows-2 gap-4'>
      <div className="row-span-2">
        <AccountCountCard />
      </div>
      <div className="col-span-2 col-start-9">
        <RecentActivityCard />
      </div>
    </div>
  );
};

export default Main;
