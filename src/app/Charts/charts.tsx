"use client"
import { companies } from "../Market/Components/TS/ArrayForGrid";
import SameButton from "../UI/SameButton";
import useCharts from "../Store/useCharts";
import { ChartsMode } from "../Store/useCharts"; // Імпортуємо тип для коректності


export default function Schedule() { 
    let scheduleButtons: ChartsMode[] = ["Revenue", "Expenses", "Clients"];
    const { Charts, setChartsMode } = useCharts();


    return (
        <section className="inset-0 m-auto absolute flex gap-5 items-center bg-gradient-to-br bg-black justify-center border-4 border-neon-pink rounded-lg shadow-neon-pink p-10 w-full h-full">
            <div className="bg-black flex justify-center items-end rounded-[20px] w-[800px] h-[400px] border-2 border-neon-blue shadow-neon-blue">
                {scheduleButtons.map((value) => (
                    <SameButton 
                        click={() => setChartsMode(value)} 
                        key={value}>
                        {value}
                    </SameButton>
                ))}
            </div>
        </section>
    );
}
