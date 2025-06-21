import { StateCreator } from 'zustand';
import { TLogState } from './logState';
import { debounce } from '@/utils/debounce';

export type TLogActions = {
  getLogs: () => Promise<void>;
  getLogsPaginated: (
    page: number,
    limit: number,
    filters?: any,
  ) => Promise<void>;
  setFilters: (filters: any) => void;
  setSize: (size: number) => void;
};

export type TLogStore = TLogState & TLogActions;

export const createLogActions: StateCreator<
  TLogStore,
  [],
  [],
  TLogActions
> = set => ({
  setFilters: (filters: any) => {
    set({ filters });
  },
  setSize: (size: number) => {
    set({ size });
  },

  getLogs: async () => {
    try {
      set({ isLoading: true });

      const result = await fetch('/api/proxy-auth/log/get-logs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { success, data } = await result.json();

      await debounce(() => console.debug('3s delay'), 3000);

      if (result.ok && success) {
        set({ logs: data, isLoading: false });
      } else {
        set({ isLoading: false });
      }
    } catch (err) {
      console.error('Error', err);
      set({ isLoading: false });
    }
  },

  getLogsPaginated: async (
    page: number,
    size: number,
    filters?: any,
  ) => {
    try {
      set({ isLoading: true });

      const body = {
        page,
        size,
        filters,
      };

      const result = await fetch(
        `/api/proxy-auth/log/post-logs-paginate`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      );

      const {
        success,
        data,
        size: currentSize,
        page: currentPage,
      } = await result.json();

      if (result.ok && success) {
        set({
          logs: data,
          size: currentSize,
          page: currentPage,
          isLoading: false,
        });
      } else {
        set({ isLoading: false });
      }
    } catch (err) {
      console.error('Error', err);
      set({ isLoading: false });
    }
  },
});
