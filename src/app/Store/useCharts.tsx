import { create } from "zustand";
export  type ChartsMode = "Revenue" | "Expenses" | "Clients" | null;

interface UseCharts {
  Charts: ChartsMode
  setChartsMode: (value: ChartsMode ) => void;
}

const useCharts = create<UseCharts>((set) => ({
  Charts: null,
  setChartsMode: (value) => set({ Charts: value }),
}));

export default useCharts;
