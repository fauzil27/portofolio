import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constant/portofolio/data";

const DEFAULT_LOCATION = locations.work;

type Location = typeof DEFAULT_LOCATION;

interface LocationState {
  activeLocation: Location;
  setActiveLocation: (location: Location) => void;
  resetActiveLocation: () => void;
}

const useLocationStore = create<LocationState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location: Location) =>
      set({ activeLocation: location }),

    resetActiveLocation: () => set({ activeLocation: DEFAULT_LOCATION }),
  }))
);

export default useLocationStore;
