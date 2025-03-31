import { create } from "zustand";

interface Sections {
    index: number;
    switchElementNext: (event: React.MouseEvent) => void;
    switchElementPrev: () => void;
}

const useSwitchSections = create<Sections>((set, get) => ({
    index: 0,
    switchElementNext: (event) => {
        event.stopPropagation();
        set((state) => ({ index: state.index < 1 ? state.index + 1 : 0 }));
    },
    switchElementPrev : () =>  set( (state)  => ({index:  (state.index > 0) ? state.index - 1 : 1 }) ),

})); 

export default useSwitchSections;


interface Form {
    isForm: boolean;
    activateForm: () => void;
    disabledForm: () => void;
}
export  const useForm = create<Form>((set,get) => ({
    isForm: false,
    activateForm: () => set(({isForm:true})),
    disabledForm: () => set({isForm:false})    
}))

