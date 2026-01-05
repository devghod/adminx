'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * @param className
 * @param children required
 * @param caption
 * @param captionDirection
 * @returns
 */
function Table({
  className,
  children,
  caption,
  captionDirection,
  ...props
}: {
  className?: string;
  children: any;
  caption?: string;
  captionDirection?: string;
} & React.ComponentProps<'table'>) {
  return (
    <div data-slot='table-container'>
      <table
        data-slot='table'
        className={cn(
          'w-full text-sm border dark:border-gray-500/40',
          className,
        )}
        {...props}
      >
        {caption && (
          <caption
            className={`caption-${captionDirection} py-3 text-gray-500 text-sm`}
          >
            {caption}
          </caption>
        )}
        {children}
      </table>
    </div>
  );
}

function TableHeader({
  className,
  children,
  ...props
}: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot='table-header'
      className={cn('', className)}
      {...props}
    >
      {children}
    </thead>
  );
}

function TableBody({
  className,
  children,
  ...props
}: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot='table-body'
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    >
      {children}
    </tbody>
  );
}

function TableFooter({
  className,
  children,
  ...props
}: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot='table-footer'
      className={cn(
        'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
        className,
      )}
      {...props}
    >
      {children}
    </tfoot>
  );
}

function TableRow({
  className,
  children,
  ...props
}: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot='table-row'
      className={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-y dark:border-gray-500/40 transition-colors',
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  );
}

function TableHead({
  className,
  children,
  border = false,
  ...props
}: {
  className: string;
  children: any;
  border?: boolean;
} & React.ComponentProps<'th'>) {
  return (
    <th
      data-slot='table-head'
      className={cn(
        `text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${border && 'border dark:border-gray-500/40'}`,
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
}

function TableCell({
  className,
  children,
  border = false,
  ...props
}: {
  className: string;
  children: any;
  border?: boolean;
} & React.ComponentProps<'td'>) {
  return (
    <td
      data-slot='table-cell'
      className={cn(
        `p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${border && 'border border-gray-500/20 dark:border-gray-500/40'}`,
        className,
      )}
      {...props}
    >
      {children}
    </td>
  );
}

function TableCaption({
  className,
  children,
  ...props
}: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot='table-caption'
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    >
      {children}
    </caption>
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
