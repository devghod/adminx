import { BackIcon } from '@/components/ui/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const UnderConstruction = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Image
        src='/images/Under-Construction-Site.jpg'
        width={500}
        height={500}
        alt='Under Construction'
        priority
      />
      <div className='text-lg mt-2'>Site is Under Construction</div>
      <div className='w-full'>
        <button
          className='flex items-center m-2 text-sky-600 dark:text-sky-300 hover:text-sky-800 cursor-pointer tracking-wide'
          onClick={() => router.back()}
        >
          Return <BackIcon className='h-4' />
        </button>
      </div>
    </div>
  );
};

export default UnderConstruction;
