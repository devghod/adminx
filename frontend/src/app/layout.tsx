import './globals.css';
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='' suppressHydrationWarning>
      <body className='h-dvh'>
        <Providers
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
