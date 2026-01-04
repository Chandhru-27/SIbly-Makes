import { create } from "zustand";

interface LoadingStoreProps {
  progress: number;
  isLoaded: boolean;
  setProgress: (value: number) => void;
  finishLoading: () => void;
}

export const useLoadingStore = create<LoadingStoreProps>((set) => ({
  progress: 0,
  isLoaded: false,

  setProgress: (value) => set({ progress: Math.min(value, 100) }),

  finishLoading: () => {
    set({ progress: 100 });
    setTimeout(() => {
      set({ isLoaded: true });
    }, 0);
  },
}));
