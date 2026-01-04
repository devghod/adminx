import { usePathname } from 'next/navigation';
import { NavMenuLink } from '@/components/ui/navigationMenu';
import { ToolTip } from '../ui/tooltips';
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
    <ToolTip title={title} className='text-xs' avoidCollisions>
      <NavMenuLink
        active={isActive}
        className={`transition-all duration-500
          ${isShrink ? 'w-24 md:w-24' : 'w-full'}
        `}
      >
        <NextLink
          className={`w-full ${isShrink && 'justify-center'}`}
          href={href}
        >
          <div
            className={`content-center
              ${isActive ? `font-semibold text-cyan-50 dark:text-cyan-500` : 'text-gray-600 dark:text-gray-50'}
              ${isShrink ? 'h-[24px]' : 'mr-4'}
            `}
            aria-hidden='true'
          >
            {icon}
          </div>
          <div
            className={`transition-all ease-in-out duration-500
              ${isShrink ? 'opacity-0' : 'opacity-100'}
            `}
          >
            {!isShrink && (
              <div
                className={`transition-all duration-500
                  ${isActive ? 'text-cyan-50 dark:text-white' : 'text-gray-500 dark:text-slate-400'}
                `}
              >
                {title}
              </div>
            )}
          </div>
        </NextLink>
      </NavMenuLink>
    </ToolTip>
  );
};

export default MenuLink;
