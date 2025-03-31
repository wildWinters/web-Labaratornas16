import { create } from "zustand";
import { clsx } from "clsx";
import { FC } from "react";
import { useFilterMarketOfCards } from "@/app/Store/useFilterCards";

export  const menuFilter = [
    "All", "Technology", "Healthcare", "Energy", "Financial Services", "Tourism",
    "Education", "Infrastructure", "Consumer Goods", "IT", "Automotive Industry",
    "Retail", "Finance", "Transportation", "AI Development", "Green Energy",
];


interface UseSelection {
    choice: string;
    isListActive: boolean;
    toggleList: VoidFunction;
    setChoice: (value: string) => void;
}

// то ідіотизм звісно повни але вже як так є потім треба буде перобити ось і все тут ізі усе 
export const useSelectionStore = create<UseSelection>((set, get) => ({
    choice: "",
    isListActive: false,
    toggleList: () => set( state => ({ isListActive: !state.isListActive })),
    setChoice: (value) => {
        console.log(get().choice);
        set({ choice: value, isListActive: false});
    },
}));

export default function Selection() {
    const { isListActive, toggleList, setChoice, choice } = useSelectionStore();                        
    const  setCardsMode = useFilterMarketOfCards( state => state.setCardsMode);
    const cardsMode =  useFilterMarketOfCards(state => state.cardsMode);
    //! мені  треба зроббити фільтрацію по значенню 

    return (
        <div className="relative inline-block text-left w-[300px]">
            <button
                onClick={toggleList}
                className="w-full px-6 py-3 bg-[#2D3B6C] text-white  shadow-md hover:bg-[#1E2A54] transition-all text-lg">
                {choice || "Select Category"}
            </button>
            {isListActive && (
                <div className="absolute mt-2 w-full bg-white  border-2  shadow-lg border-b border-black z-50 max-h-80 overflow-y-auto">
                    {menuFilter.map((value) => (
                        <div
                            key={value}
                            onClick={() => { setChoice(value);  setCardsMode(value);}}
                            className="text-center bg-black text-white p-3 transition-all duration-500 hover:text-blue-900 hover:bg-gray-200 cursor-pointer text-lg"
                        >
                            {value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}