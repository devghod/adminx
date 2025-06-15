const Loader = ({ page }: { page: string }) => {
  return (
    <div className='flex justify-center items-center animate-pulse text-shadow h-80 bg-white dark:bg-black rounded-lg'>
      {page} Page Loading
    </div>
  );
};

const LoaderTable = () => {
  return (
    <div className='absolute w-screen h-screen animate-pulse text-shadow bg-white dark:bg-black rounded-lg'>
      Table Loading
    </div>
  );
};

export { Loader, LoaderTable };
