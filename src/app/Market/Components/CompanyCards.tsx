import useCompanyCardsStore from "@/app/Store/useGridCompanies";
import Image from "next/image";
import { companies } from "./TS/ArrayForGrid";
import { Concert_One } from "next/font/google";
import { useState, ReactNode } from "react";
import MarketCards from "@/app/Modals/Market";
import useEditMode from "@/app/Store/useEdit";
import ButtonMarket from "@/app/UI/ButtonMarket";
import { useFilterMarketOfCards } from "@/app/Store/useFilterCards";

const concertOne = Concert_One({
    subsets: ["latin"],
    weight: "400",
});

//! Додати кнопку форму "Моделювання бізнес процесу", яка змінює параметри
//! стартапу (наприклад, збільшує прибуток чи кількість працівників).


interface SectionInterface {

     Selections?: any;
  }
  


export default function GridsCompanyCards({Selections}: SectionInterface) {
    const isEditMode = useEditMode(state => state.isEditMode);
    const {companiesStore} = useEditMode();
    const [component, setComponent] = useState<ReactNode | null>(null);   
    const {cardsMode} = useFilterMarketOfCards();  


    return (

        <div className="flex flex-col  rounded-[20px] overflow-y-scroll items-center gap-4 px-6" 
            style={{
            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
            backdropFilter: "blur(10px)",
            minHeight: "100vh",
         }}>
            <h1 className="text-white text-4xl font-bold mb-4 text-center drop-shadow-lg">
                Market and Competitor Analysis
            </h1>
            <ButtonMarket txt="Charts"/>
            {Selections}

            <div className={`grid ${concertOne.className} border-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto`}>
                {companiesStore.filter(value =>  cardsMode === "All" ? true : cardsMode === value.sector).map((value, index) => (
                    <div 
                    key={index} 
                    className="flex flex-col items-center text-left w-[300px] h-[310px] shadow-2xl justify-around
                             text-white rounded-[20px] p-4 relative transition-transform
                               transform hover:scale-110 hover:shadow-purple-500/50" 
                    style={{
                        backdropFilter: "blur(50px) brightness(1.2)",
                        background: "linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
                        transition: "all 0.3s ease-in-out",
                        }}>
                            {isEditMode && <input className="w-[20px] h-[20px] absolute top-[10px] right-[10px]" type="checkbox" />}
                        <Image className="w-[200px] h-[150px] object-contain" src={value.img} alt="company Picture" width={200} height={200} />
                        <h1 className="text-left text-[25px] font-semibold drop-shadow-md">Name: {value.name}</h1>
                        <p className="text-left text-[20px] drop-shadow-md">Sector: {value.sector}</p>
                        <div  
                            className="flex w-[90%] pt-[20px]  justify-between relative bottom-3 cursor-pointer mt-2 opacity-90 hover:opacity-100 transition-all"
                        >
                            <Image  
                                src="/play-button (1).png"
                                alt="details button" 
                                width={40}
                                height={40} 
                                onClick={() => setComponent(<MarketCards mode="Watch" marketDetails={value} onClose={() => setComponent(null)} />)}  
                            />  
                            <Image src={"/edit.png"} alt="Edit Mode" width={40} height={40}  
                            onClick={() => setComponent(<MarketCards mode="Edit" indexForChangeCompanies={index} marketDetails={value} onClose={() => setComponent(null)} />)} 
                            />
                        </div>
                    </div>
                ))}
            </div>
            {component && (
                <div 
                    className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    {component}
                    <button 
                            className="absolute top-5 right-5 bg-red-500 text-white px-3 py-1 rounded"
                            onClick={() => setComponent(null)}
                    >
                        close
                    </button>
                </div>
            )}
        </div>
    );
}
  