import { StateCreator } from 'zustand';
import { TTradeState } from './tradeState';
import { debounce } from '@/utils/debounce';
import { TTradeJournal } from './type';

export type TTradeActions = {
  createTradeJournal: (
    body: TTradeJournal,
  ) => Promise<boolean | undefined>;
  updateTradeJournal: (
    body: TTradeJournal,
  ) => Promise<boolean | undefined>;
  deleteTradeJournal: (id: string) => Promise<boolean | undefined>;
  getTradeJournal: (id: string) => Promise<{
    success: boolean;
    message?: string;
    data: string | undefined;
  }>;
  getTradeJournals: () => Promise<void>;
  getTradeJournalsPaginated: (
    page: number,
    limit: number,
    filters?: any,
  ) => Promise<void>;
  getTradeStatsByDate: (
    startDate: string,
    endDate: string,
    userId: string,
  ) => Promise<void>;
  setPage: (page: number) => void;
  setSize: (size: number) => void;
  setFilters: (filters: any) => void;
};

export type TTradeStore = TTradeState & TTradeActions;

export const createTradeActions: StateCreator<
  TTradeStore,
  [],
  [],
  TTradeActions
> = (set, get) => ({
  setPage: (page: number) => {
    set({ page });
  },
  setFilters: (filters: any) => {
    set({ filters });
  },
  setSize: (size: number) => {
    set({ size });
  },
  createTradeJournal: async (body: TTradeJournal) => {
    try {
      set({ isLoading: true });

      const result = await fetch(
        '/api/proxy-auth/trade/create-tradejournal',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      );

      if (result.ok) {
        get().getTradeJournalsPaginated(
          get().page,
          get().size,
          get().filters,
        );
        set({
          isLoading: false,
          message: '',
        });
        return true;
      } else {
        const data = await result.json();
        set({ isLoading: false, message: data.message });
        return false;
      }
    } catch (err) {
      console.error('Error', err);
      set({ isLoading: false });
    }
  },
  updateTradeJournal: async (body: TTradeJournal) => {
    try {
      set({ isLoading: true });

      const { _id: id, ...restBody } = body;

      const result = await fetch(
        `/api/proxy-auth/trade/update-tradejournal/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(restBody),
        },
      );

      if (result.ok) {
        get().getTradeJournalsPaginated(
          get().page,
          get().size,
          get().filters,
        );
        set({
          isLoading: false,
          message: '',
        });
        return true;
      } else {
        const data = await result.json();
        set({ isLoading: false, message: data.message });
        return false;
      }
    } catch (err) {
      console.error('Error', err);
      set({ isLoading: false });
    }
  },
  deleteTradeJournal: async (id: string) => {
    try {
      set({ isLoading: true });

      const result = await fetch(
        `/api/proxy-auth/trade/delete-tradejournal/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (result.ok) {
        get().getTradeJournalsPaginated(
          get().page,
          get().size,
          get().filters,
        );
        set({
          isLoading: false,
          message: '',
        });
        return true;
      } else {
        const data = await result.json();
        set({ isLoading: false, message: data.message });
        return false;
      }
    } catch (err) {
      console.error('Error', err);
      set({ isLoading: false });
    }
  },
  getTradeJournal: async (id: string) => {
    try {
      set({ isLoading: true });

      const result = await fetch(
        `/api/proxy-auth/trade/get-tradejournal/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const data = await result.json();

      set({ isLoading: false });

      return data;
    } catch (err) {
      console.error('Error', err);
      set({ isLoading: false });
    }
  },
  getTradeJournals: async () => {
    try {
      set({ isLoading: true });

      const result = await fetch('/api/proxy-auth/user/get-users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { success, data, message } = await result.json();

      await debounce(() => console.debug('3s delay'), 3000);

      if (result.ok && success) {
        set({ tradeJournals: data, isLoading: false });
      } else {
        set({ message });
        set({ isLoading: false });
      }
    } catch (err) {
      console.error('Error', err);
      set({ isLoading: false });
    }
  },
  getTradeJournalsPaginated: async (
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
        `/api/proxy-auth/trade/post-tradejournals-paginate`,
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
        message,
        total,
        size: currentSize,
        page: currentPage,
      } = await result.json();

      if (result.ok && success) {
        set({
          tradeJournals: data,
          size: currentSize,
          page: currentPage,
          totalTradeJournals: total,
          isLoading: false,
        });
      } else {
        set({ message });
        set({ isLoading: false });
      }
    } catch (err) {
      console.error('Error', err);
      set({ isLoading: false });
    }
  },
  getTradeStatsByDate: async (
    startDate: string,
    endDate: string,
    userId: string,
  ) => {
    try {
      set({ isLoading: true });

      const body = {
        start_date: startDate,
        end_date: endDate,
        user_id: userId,
      };

      const result = await fetch(
        '/api/proxy-auth/trade/get-tradejournals-stats-line-bydate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        },
      );

      const { success, data, message } = await result.json();

      await debounce(() => console.debug('3s delay'), 3000);

      if (result.ok && success) {
        set(state => ({
          stats: {
            ...state.stats,
            lineData: data,
          },
          isLoading: false,
        }));
      } else {
        set({ message });
        set({ isLoading: false });
      }
    } catch (err) {
      console.error('Error', err);
      set({ isLoading: false });
    }
  },
});
