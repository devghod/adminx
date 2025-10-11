import { StateCreator } from 'zustand';
import { TAccountState } from './accountState';
import { debounce } from '@/utils/debounce';
import { TUser } from './type';
import { getToken, getRefreshToken } from '@/hooks/token';

export type TAccountActions = {
  createUser: (body: TUser) => Promise<boolean | undefined>;
  updateUser: (body: TUser) => Promise<boolean | undefined>;
  updateUserPassword: (body: TUser) => Promise<boolean | undefined>;
  deleteUser: (id: string) => Promise<boolean | undefined>;
  getUser: (id: string) => Promise<{
    success: boolean;
    message?: string;
    data: string | undefined;
  }>;
  getUsers: () => Promise<void>;
  getUsersStatistics: () => Promise<void>;
  getUsersPaginated: (
    page: number,
    limit: number,
    filters?: any,
  ) => Promise<void>;
  getProfile: () => void;
  setPage: (page: number) => void;
  setSize: (size: number) => void;
  setFilters: (filters: any) => void;
};

export type TAccountStore = TAccountState & TAccountActions;

export const createAccountActions: StateCreator<
  TAccountStore,
  [],
  [],
  TAccountActions
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
  getProfile: async () => {
    try {
      set({ profileIsLoading: true });

      const token = await getToken();
      const refreshToken = await getRefreshToken();

      const body = {
        token: token,
        refreshToken: refreshToken,
      };

      const result = await fetch('/api/proxy-auth/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (result.ok) {
        const data = await result.json();
        set({
          profile: data.profile,
          profileIsLoading: false,
          message: '',
        });
        return true;
      } else {
        const data = await result.json();
        set({ profileIsLoading: false, message: data.message });
        return false;
      }
    } catch (error) {
      console.error('Error', error);
      set({ profileIsLoading: false });
    }
  },
  createUser: async (body: TUser) => {
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
        get().getUsersPaginated(
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

  updateUser: async (body: TUser) => {
    try {
      set({ isLoading: true });

      const { _id: id, ...restBody } = body;

      const result = await fetch(
        `/api/proxy-auth/user/update-user/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(restBody),
        },
      );

      if (result.ok) {
        get().getUsersPaginated(
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

  updateUserPassword: async (body: TUser) => {
    try {
      set({ isLoading: true });

      const { _id: id, ...restBody } = body;

      const result = await fetch(
        `/api/proxy-auth/user/update-user-password/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(restBody),
        },
      );

      if (result.ok) {
        get().getUsersPaginated(
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

  deleteUser: async (id: string) => {
    try {
      set({ isLoading: true });

      const result = await fetch(
        `/api/proxy-auth/user/delete-user/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (result.ok) {
        get().getUsersPaginated(
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
        set({ users: data, isLoading: false });
      } else {
        set({ message });
        set({ isLoading: false });
      }
    } catch (err) {
      console.error('Error', err);
      set({ isLoading: false });
    }
  },

  getUsersPaginated: async (
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
        `/api/proxy-auth/user/post-users-paginate`,
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
          users: data,
          size: currentSize,
          page: currentPage,
          totalUsers: total,
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

  getUsersStatistics: async () => {
    try {
      set({ isLoading: true });

      const result = await fetch(
        `/api/proxy-auth/user/get-users-statistics`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const { success, data, message } = await result.json();
      if (result.ok && success) {
        set({ statistics: data, isLoading: false });
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
