'use client';

import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { ToasterProvider } from '@/components/ui/toast';
import { useThemeStore } from '@/stores/themeStore';

export function Providers({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProvider>) {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark',
    );
  }, [theme]);

  return (
    <>
      <ThemeProvider {...props}>{children}</ThemeProvider>
      <ToasterProvider />
    </>
  );
}
