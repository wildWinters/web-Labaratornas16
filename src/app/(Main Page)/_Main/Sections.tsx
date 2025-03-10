"use client"
import { nunito400 } from "./Footer";
import { Fragment } from "react";
import { damion } from "./Header";
import Image from "next/image";
import { useRef } from "react";
import useSwitchSections from "../_Store/sections";

export default function Section() {
    const  filterAnimations = useRef<HTMLDivElement>(null);

    const indexes = useSwitchSections( state => state.index);
    const switcher = useSwitchSections(state => state.switchElement);

    const sections = [
        {
            heading: "My stARTup",
            paragraph: "A free HTML template for both personal and commercial use, designed by JAC - Johnny A C. The name 'Roundazzle' is inspired by its abundance of rounded borders.",
            linkButton: "Learn More",
        },
        {
            heading: "Ринок",
            paragraph: "Ринок стартапів постійно змінюється, залучаючи нові технології та інноваційні рішення. Основні гравці впливають на формування трендів та напрямків розвитку галузі.",
            linkButton: "Learn More",
        },
        {
            heading: "Інвестори",
            paragraph: "Залучення інвестицій є ключовим етапом розвитку стартапу. Правильний вибір інвесторів та партнерів допоможе вийти на новий рівень та масштабувати бізнес.",
            linkButton: "Learn More",
        }
    ];

    return (
        <section className="flex items-center justify-left w-full h-full top-0 absolute bg-[rgba(0,0,255,0.18)]  ">
            <div ref = {filterAnimations} className="top-[-120px] flex flex-col justify-around  text-white relative z-40 ml-[20px] w-[830px] h-[250px] overflow-hidden"
             onClick={switcher}>         

                {sections.filter((_ , index)=> index === indexes).map( (value, index, array) => (
                    <Fragment key={index} >  
                        <h1 className={`text-[30px]  text-white ${damion.className} `}>{value.heading}</h1>
                        <p className={`${nunito400.className} text-justify text-[20px]`}>{value.paragraph}</p>

                        <button  className = {` ${nunito400.className} relative z-10 top-0 w-[170px] h-[40px] cursor-pointer rounded-[12px] bg-white duration-300 transition-all text-black flex items-center text-[20px] justify-center gap-2 p-2 hover:shadow-md shadow-white hover:top-[-20px]`} onClick={ (event)=>{event.stopPropagation()}}>
                         {value.linkButton} 
                         <Image alt="click to switch" src="/next (1).png" width={18} height={18} unoptimized />
                     </button>
                    </Fragment>
                ))}

            </div>
        </section>
    )
}