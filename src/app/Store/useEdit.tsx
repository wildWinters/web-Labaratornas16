import { create } from "zustand";
import { companies } from "../Market/Components/TS/ArrayForGrid";

interface EditModeStore {
    companiesStore: typeof companies;
    isEditMode: boolean;
    enableEditMode: () => void;
    disableEditMode: () => void;
    toggleEditMode: () => void;
    updateCompaniesStore: (index: number, updatedData: Partial<typeof companies[0]>) => void;
}

const useEditMode = create<EditModeStore>((set) => ({
    companiesStore: companies,
    isEditMode: false,
    enableEditMode: () => set({ isEditMode: true }),  
    disableEditMode: () => set({ isEditMode: false }),  
    toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
    updateCompaniesStore: (index, updatedData) => {
        set((state) => {
            const updatedCompanies = [...state.companiesStore];
            updatedCompanies[index] = { ...updatedCompanies[index], ...updatedData };
            return { companiesStore: updatedCompanies };
        });
    }
}));

export default useEditMode;
