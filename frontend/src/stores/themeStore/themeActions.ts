import { TThemeState } from './themeState';

export type TThemeActions = {
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
};

export type TThemeStore = TThemeState & TThemeActions;
