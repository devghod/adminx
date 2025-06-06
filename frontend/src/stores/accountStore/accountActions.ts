import { StateCreator } from 'zustand';
import { TAccountState } from './accountState';
import { debounce } from '@/utils/debounce';

export type TAccountActions = {
  createUser: (body: object) => Promise<boolean | undefined>;
  getUser: (id: string) => Promise<{
    success: boolean;
    message?: string;
    data: string | undefined;
  }>;
  getUsers: () => Promise<void>;
  // getUsersStatistics: () => Promise<void>;
};

export type TAccountStore = TAccountState & TAccountActions;

export const createAccountActions: StateCreator<
  TAccountStore,
  [],
  [],
  TAccountActions
> = (set, get) => ({
  createUser: async (body: object) => {
    try {
      set({ isLoading: true });

      const result = await fetch('/api/proxy-auth/user/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (result.ok) {
        const { data } = await result.json();
        set({
          users: [...get().users, data],
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

  getUser: async (id: string) => {
    try {
      set({ isLoading: true });

      const result = await fetch(
        `/api/proxy-auth/user/get-user/${id}`,
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

  getUsers: async () => {
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
        // get().getUsersStatistics();
        set({ users: data, isLoading: false });
      } else {
        set({ message });
      }
    } catch (err) {
      console.error('Error', err);
      set({ isLoading: false });
    }
  },

  // getUsersStatistics: async () => {
  //   try {
  //     const token = getCookie('token');
  //     const authToken = `Bearer ${token}`;
  //     const result = await fetch(
  //       'http://localhost:4001/api/user/get-users-statistics',
  //       {
  //         method: 'GET',
  //         headers: {
  //           Authorization: authToken,
  //           'Content-Type': 'application/json',
  //         },
  //       },
  //     );

  //     const { success, data, message } = await result.json();
  //     if (result.ok && success) {
  //       set({ statistics: data, isLoading: false });
  //     } else {
  //       set({ message });
  //     }
  //   } catch (err) {
  //     console.error('Error', err);
  //     set({ isLoading: false });
  //   }
  // },
});
