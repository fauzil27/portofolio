/* eslint-disable @typescript-eslint/no-explicit-any */
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constant/portofolio/data";
import { create } from "zustand";

export interface WindowItem {
  isOpen: boolean;
  zIndex: number;
  data: any | null;
}

export interface WindowsMap {
  [key: string]: WindowItem;
}

export interface WindowStore {
  windows: WindowsMap;
  nextZIndex: number;

  openWindow: (windowKey: string, data?: any | null) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
}

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex;
      }),
  }))
);

export default useWindowStore;
