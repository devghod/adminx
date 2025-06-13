'use client';

import { ThemeProvider } from 'next-themes';
import { ToasterProvider } from '@/components/ui/toast';

export function Providers({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProvider>) {
  return (
    <>
      <ThemeProvider {...props}>{children}</ThemeProvider>
      <ToasterProvider />
    </>
  );
}
