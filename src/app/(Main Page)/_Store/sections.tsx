import { create } from "zustand";

interface Sections {
    index: number;
    switchElement: (event: React.MouseEvent) => void;
}

const useSwitchSections = create<Sections>((set, get) => ({
    index: 0,
    switchElement: (event) => {
        event.stopPropagation();
        set((state) => ({ index: state.index < 2 ? state.index + 1 : 0 }));
    },
}));

export default useSwitchSections;



