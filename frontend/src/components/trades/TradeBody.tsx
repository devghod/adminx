'use client';

import { useSearchParams } from 'next/navigation';
import TradeJournal from './TradeJournal';
import TradeMain from './TradeMain';

const TradeBody = () => {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab');

  switch (currentTab) {
    case 'main':
      return <TradeMain />;

    case 'journal':
      return <TradeJournal />;

    default:
      break;
  }

  if (!currentTab) return null;

  return (
    <div className='w-full h-96 border bg-white rounded-lg p-4'>
      {currentTab || 'No Data'}
    </div>
  );
};

export default TradeBody;
