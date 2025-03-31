import {create} from "zustand";

interface useFilterCards{
    cardsMode: string; 
    setCardsMode: (value:string) => void;    
}


export const useFilterMarketOfCards = create<useFilterCards>((set, get) => ({ 
    cardsMode: "All",    
    setCardsMode: (value: string) =>  set({cardsMode: value}),
}));

