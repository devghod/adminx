'use client';

import './globals.css';
import { Providers } from './providers';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang='en' className='' suppressHydrationWarning>
      <body className='h-dvh'>
        <Providers
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Providers>
      </body>
    </html>
  );
}
