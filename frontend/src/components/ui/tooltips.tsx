import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/tailwindMerge';

const tooltipContentVariants = cva(
  'bg-white dark:bg-gray-800 px-2 py-1 border border-gray-500/20 rounded',
  // {},
);

const ToolTip = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider> &
    VariantProps<typeof tooltipContentVariants> & {
      title: string;
      className?: string;
      delayDuration?: number;
      skipDelayDuration?: number;
      hasArrow?: boolean;
      avoidCollisions?: boolean;
    }
>(
  (
    {
      children,
      className,
      title,
      delayDuration = 800,
      skipDelayDuration = 500,
      hasArrow = false,
      avoidCollisions = false,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <TooltipPrimitive.Provider
        delayDuration={delayDuration}
        skipDelayDuration={skipDelayDuration}
      >
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger asChild>
            {children}
          </TooltipPrimitive.Trigger>
          <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
              {...props}
              className={cn(tooltipContentVariants(), className)}
              ref={forwardedRef}
              sideOffset={5}
              avoidCollisions={avoidCollisions}
            >
              {title}
              {hasArrow && <TooltipPrimitive.Arrow />}
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    );
  },
);

ToolTip.displayName = 'ToolTip';

export { ToolTip };
