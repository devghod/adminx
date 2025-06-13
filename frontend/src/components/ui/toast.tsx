import React from 'react';
import { Toaster, type ToasterProps } from 'sonner';
import { useTheme } from 'next-themes';

const ToasterProvider = () => {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme as ToasterProps['theme']}
    />
  );
};

export { ToasterProvider };
