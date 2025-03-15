import investors from "./Investors";
import { Lilita_One, Poppins } from "next/font/google";
import Image from "next/image";

const lilitaOne = Lilita_One({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function InvestorsBlog() {
    const headings = ["Name", "Sector", "Portfolio Value", "Companies", "Country", "Experience"];

    return (
        <article className="absolute inset-0 m-auto z-[100] w-[90%] scroll-auto max-w-6xl bg-white mx-auto shadow-xl rounded-2xl overflow-hidden border border-gray-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white text-lg font-bold flex justify-around py-5 px-8">
                {headings.map((value, index) => (
                    <h2 key={index} className={`${poppins.className} text-center w-1/6 uppercase tracking-wide`}>{value}</h2>
                ))}
            </div>

            {/* Investor Rows */}
            {investors.map((investor, index) => (
                <div 
                    key={index} 
                    className={`flex justify-around items-center py-4 px-8 border-b border-gray-300 transition-all hover:bg-gray-100 ${lilitaOne.className}`}
                >
                    <div className="flex items-center gap-4 w-1/6">
                        <Image
                            className="rounded-full border-2 border-gray-700 shadow-md"
                            src={investor.imageUrl}
                            alt="Investor Image"
                            width={50}
                            height={50}
                        />
                        <h2 className="font-semibold text-gray-900 text-lg">{investor.name}</h2>
                    </div>
                    <p className="text-center w-1/6 text-gray-700 text-base">{investor.sector}</p>
                    <p className="text-center w-1/6 font-semibold text-green-600 text-lg">${investor.portfolioValue}</p>
                    <p className="text-center w-1/6 text-gray-700 text-base">{investor.companies}</p>
                    <p className="flex items-center justify-center gap-2 w-1/6 text-gray-700 text-base">
                        {investor.country} 
                        <Image 
                            className="w-[24px] h-[16px] rounded-sm border border-gray-400" 
                            src={investor.flags} 
                            alt={`${investor.country} flag`} 
                            width={24} 
                            height={16} 
                        />
                    </p>
                    <p className="text-center w-1/6 text-gray-700 text-base">{investor.experience} years</p>
                </div>
            ))}
        </article>
    );
}

