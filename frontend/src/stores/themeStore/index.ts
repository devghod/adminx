import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TThemeState } from './themeState';

export type ThemeStore = TThemeState;

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () => {
        const newTheme = get().theme === 'light' ? 'dark' : 'light';
        set({ theme: newTheme });
        document.documentElement.classList.toggle(
          'dark',
          newTheme === 'dark',
        );
      },
      setTheme: (theme: any) => {
        set({ theme });
        document.documentElement.classList.toggle(
          'dark',
          theme === 'dark',
        );
      },
    }),
    {
      name: 'theme-storage',
    },
  ),
);
