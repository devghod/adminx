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
        className={` ${isShrink ? 'w-24 md:w-24' : 'w-full'}`}
      >
        <NextLink
          className={`w-full ${isShrink && 'justify-center'}`}
          href={href}
        >
          <div
            className={`content-center
              ${isActive ? `font-semibold ` : ''}
              ${isShrink ? 'h-[24px]' : 'mr-4'}
            `}
            aria-hidden='true'
          >
            {icon}
          </div>
          <div
            className={`${isShrink ? 'opacity-0' : 'opacity-100'}`}
          >
            {!isShrink && (
              <div
                className={`
                  ${isActive ? '' : ''}
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
