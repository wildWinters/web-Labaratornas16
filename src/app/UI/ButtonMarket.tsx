import Link from "next/link";

interface MarketButton {
    width?: number;
    bgc?: string;
    hgt?: string;
    txt: string;
}

export default function ButtonMarket({width,bgc,hgt,txt}: MarketButton) {



    return (
        <> 
            {  
                txt === "Charts"
                    &&  
                <Link href="/Charts">
                    <button className="bg-blue-950 w-[200px] h-[50px]">{txt}</button>
                </Link>
            }
            {txt !== "Charts" && <button className="rounded-[20px] bg-black w-[200px] h-[30px]">{txt}</button>}



        </>
    )
}