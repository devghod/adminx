import { usePathname } from 'next/navigation';
import { NavMenuLink } from '@/components/ui/navigationMenu';
import NextLink from 'next/link';

const MenuLink = ({
  href,
  title,
  icon,
  isShrink,
}: {
  href: string;
  title: string;
  icon: any;
  isShrink: boolean;
}) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavMenuLink
      active={isActive}
      className={`transition-all duration-500 hover:shadow-2xl
        ${isActive ? `shadow-lg border-gray-500/10` : 'hover:border-gray-500/10'}
        ${!isShrink ? `w-26 md:w-24` : 'w-full'}
      `}
    >
      <NextLink className='w-full' href={href}>
        <div
          className={`content-center
            ${isActive ? `font-semibold text-violet-700 dark:text-violet-500` : 'text-gray-500 dark:text-slate-400'}
            ${!isShrink ? 'h-[24px]' : 'mr-4'}
          `}
          aria-hidden='true'
        >
          {icon}
        </div>
        <div
          className={`transition-all ease-in-out duration-500 
            ${isShrink ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
        >
          {isShrink && (
            <div
              className={`font-semibold 
                ${isActive ? 'text-gray-950 dark:text-white' : 'text-gray-500 dark:text-slate-400'}
              `}
            >
              {title}
            </div>
          )}
        </div>
      </NextLink>
    </NavMenuLink>
  );
};

export default MenuLink;
