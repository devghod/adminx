import { TInventory } from '../inventoryStore/type';

export type TInventoryState = {
  inventory: object;
  inventories: TInventory[];
  message: string;
  isLoading: boolean;
  isLoadingInventory: boolean;
};

export const initialInventoryState: TInventoryState = {
  inventory: {},
  inventories: [],
  message: '',
  isLoading: false,
  isLoadingInventory: false,
};
