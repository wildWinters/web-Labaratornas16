import Image from "next/image"
import InvestorsBlog from "./InvetorsBlog"
import Button from "../UI/Button"
import useInvestors from "@/app/Store/useInvestors"
export default function  Section() {
    const setInvestorCardTrue = useInvestors(state => state.setInvestorsCardExistsTrue);
    const setInvestorsCardFalse = useInvestors(state => state.setInvestorsCardExistFalse);
    const isInvestorsCard = useInvestors(state => state.isInvestorCardExists);

    return (
        <section className="relative w-full h-[1050px] bg-no-repeat bg-cover" >   
            <Image className=" absolute  m-auto inset-0 bg-cover w-full h-[1200px]" src="/background/investing-at-market-high-1.jpg" alt="hello world" width={1000} height={1000} />
            <Button text="Inverstors" width={200} onClick={setInvestorCardTrue} />
             {isInvestorsCard &&  <InvestorsBlog /> } 
        </section>
    )
}