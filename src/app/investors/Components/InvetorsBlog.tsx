import investors from "./Investors";
import { Lilita_One, Poppins } from "next/font/google";
import Image from "next/image";

const lilitaOne = Lilita_One({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function InvestorsBlog() {
    const headings = ["Name", "Sector", "Portfolio Value", "Companies", "Country", "Experience"];

    return (
        <article className="overflow-y-scroll h-[630px] absolute inset-0 m-auto z-[100] w-[90%] max-w-6xl bg-white mx-auto shadow-xl rounded-2xl overflow-hidden border border-gray-300">
            
            <div className="grid grid-cols-6 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-lg font-bold py-5 px-8">
                {headings.map((value, index) => (
                    <h2 key={index} className={`${poppins.className} text-center uppercase tracking-wide`}>{value}</h2>
                ))}
            </div>

            <div className="grid grid-cols-1 divide-y divide-gray-300">
                {investors.map((investor, index) => (
                    <div 
                        key={index} 
                        className={`grid grid-cols-6 items-center py-4 px-8 transition-all hover:bg-gray-100 ${lilitaOne.className}`}
                    >
                        <div className="grid grid-cols-[50px_auto] items-center gap-4">
                            <Image
                                className="rounded-full border-2 border-gray-700 shadow-md"
                                src={investor.imageUrl}
                                alt="Investor Image"
                                width={50}
                                height={50}
                            />
                            <h2 className="font-semibold text-gray-900 text-lg">{investor.name}</h2>
                        </div>
                        <p className="text-center text-gray-700 text-base">{investor.sector}</p>
                        <p className="text-center font-semibold text-green-600 text-lg">${investor.portfolioValue}</p>
                        <p className="text-center text-gray-700 text-base">{investor.companies}</p>
                        <div className="grid grid-cols-[auto_24px] items-center gap-2 text-gray-700 text-base">
                            <p className="text-center">{investor.country}</p>
                            <Image 
                                className="w-[24px] h-[16px] rounded-sm border border-gray-400" 
                                src={investor.flags} 
                                alt={`${investor.country} flag`} 
                                width={24} 
                                height={16} 
                            />
                        </div>
                        <p className="text-center text-gray-700 text-base">{investor.experience} years</p>
                    </div>
                ))}
            </div>
        </article>
    );
}

