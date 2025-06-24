import { usePathname } from 'next/navigation';
import { NavMenuLink } from '@/components/ui/navigationMenu';
import NextLink from 'next/link';

const MenuLink = ({ href, title, icon }: any) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavMenuLink active={isActive}>
      <NextLink href={href}>
        <div
          className={`mr-4 text-xs h-[2px] font-bold font-medium text-gray-500 dark:text-slate-400 
            ${isActive && `font-semibold text-violet-700 dark:text-violet-500`}`}
          aria-hidden='true'
        >
          {icon}
        </div>
        <div
          className={`font-medium text-gray-500 dark:text-slate-400 
            ${isActive && `font-semibold text-gray-950 dark:text-white`}`}
        >
          {title}
        </div>
      </NextLink>
    </NavMenuLink>
  );
};

export default MenuLink;
