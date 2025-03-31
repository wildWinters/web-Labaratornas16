import { create } from "zustand";

interface useInvestorsInterface {
  isInvestorCardExists: boolean;
  setInvestorsCardExistsTrue: () => void;
  setInvestorsCardExistFalse: () => void;
}

 const useInvestors = create<useInvestorsInterface>((set) => ({
  isInvestorCardExists: false,
  setInvestorsCardExistsTrue: () => set({ isInvestorCardExists: true }),
  setInvestorsCardExistFalse: () => set({ isInvestorCardExists: false }),
}));

export default useInvestors;
