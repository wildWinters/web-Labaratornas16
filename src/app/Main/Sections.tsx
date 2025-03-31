"use client"
import { nunito400 } from "./Footer";
import { Fragment } from "react";
import { damion } from "./Header";
import Image from "next/image";
import { useRef } from "react";
import useSwitchSections from "../Store/sections";
import Button from "../UI/button";
import { Inter } from "next/font/google";
import Link from "next/link"; 


export const inter500 = Inter({
    subsets: ["latin"],
    weight: "500",
})

export default function Section() {
    const filterAnimations = useRef<HTMLDivElement>(null);
    const indexes = useSwitchSections(state => state.index);


    const sections = [
        {
            heading: "Market",
            paragraph: "The startup market is constantly evolving, incorporating new technologies and innovative solutions. Key players influence the formation of trends and industry development directions.",
            linkButton: "/Market",
        },
        {
            heading: "Investors",
            paragraph: "Attracting investments is a crucial stage in a startup's development. Choosing the right investors and partners will help scale the business and reach new heights.",
            linkButton: "/investors",
        }
    ];
    

    return (
        <section className={` flex items-center justify-center w-full h-full top-0 absolute bg-[rgba(0,0,255,0.18)] ${nunito400.className}`}>
            <div ref={filterAnimations} className="rounded-[20px] top-[-120px] flex flex-col justify-around text-white relative z-40 ml-[20px] w-[850px] h-[300px] overflow-hidden" 
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.9)", // Напівпрозорий чорний фон
                backdropFilter: "blur(10px) brightness(100%)" // Розмиття та збереження яскравості
            }}
            >

                {sections.filter((_, index) => index === indexes).map((value, index) => (
                    <Fragment key={index}>
                        <h1 className={`text-[30px] text-white text-center ${damion.className}`}>{value.heading}</h1>
                        <p className={`${nunito400.className} w-[700px] text-alig   m-auto text-justify text-[20px]`}  
                        style={{textAlignLast:"center"}}
                        >{value.paragraph}</p>
                        <div className="flex gap-4 items-center justify-around w-full h-[80px]">

                            <Button  text="prev"  order={-200}  rotate={180} />
                            <Link href={value.linkButton} className={`${inter500.className}  italic font-Arial relative z-10 top-0 w-[170px] h-[35px] cursor-pointer rounded-[12px] bg-gray-900 duration-300 transition-all text-white flex items-center text-[20px] justify-center gap-2 p-2  hover:top-[-5px]`} onClick={(event) => { event.stopPropagation(); }}>
                                Learn More
                            </Link>
                            <Button   text="Next"  order={3} rotate={0} />
                        </div>
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
