import { create } from 'zustand';

export interface ICountProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  setCount: (count: number) => void;
}

export const useCounterStore = create<ICountProps>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setCount: (count) => set(() => ({ count })),
}));
