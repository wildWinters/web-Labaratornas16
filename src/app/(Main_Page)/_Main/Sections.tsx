"use client"
import { nunito400 } from "./Footer";
import { Fragment } from "react";
import { damion } from "./Header";
import Image from "next/image";
import { useRef } from "react";
import useSwitchSections from "../_Store/sections";
import Button from "../_UI/button";
import { Inter } from "next/font/google";

export const inter600 = Inter({
    subsets:["latin"],
    weight:"600",

})

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
            <div ref = {filterAnimations} className="top-[-120px] flex flex-col justify-around  text-white relative z-40 ml-[20px] w-[830px] h-[250px] overflow-hidden">         

                {sections.filter((_ , index)=> index === indexes).map( (value, index, array) => (
                    <Fragment key={index} >  
                        <h1 className={`text-[30px]  text-white ${damion.className} `}>{value.heading}</h1>
                        <p className={`${nunito400.className} text-justify text-[20px]`}>{value.paragraph}</p>
                    

                    <div className="flex gap-4 items-center w-full h-[80px]">

                        <button className={`${inter600.className} italic font-Arial relative z-10 top-0 w-[170px] h-[40px] cursor-pointer rounded-[12px]  bg-gray-900 duration-300 transition-all text-white flex items-center text-[20px] justify-center gap-2 p-2 hover:shadow-md shadow-white hover:top-[-5px]`} onClick={(event) => { event.stopPropagation(); }}>
                            {value.linkButton} 
                            <Image alt="click to switch" src="/right-arrow (2).png" width={18} height={18}  />
                        </button>
                        <Button />
                    </div>

                    </Fragment>
                ))}

            </div>
        </section>
    )
}