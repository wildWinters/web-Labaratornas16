import Image from "next/image"
import InvestorsBlog from "./InvetorsBlog"
export default function  Section(){

    return (
        <section className="relative w-full h-[1200px] bg-no-repeat bg-cover" >   
            <Image className=" absolute   inset-0 bg-cover w-full h-[1200px]" src="/background/investing-at-market-high-1.jpg" alt="hello world" width={1000} height={1000} />
            <InvestorsBlog />
        </section>
    )
}