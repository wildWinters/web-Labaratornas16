import { Rubik } from "next/font/google";
import React, { useRef } from "react";
import { createPortal } from "react-dom";
import useEditMode from "@/app/Store/useEdit";

const rubik = Rubik({ subsets: ["latin"], weight: "700" });

interface MarketDetails {
    marketDetails: Record<string, any>;
    mode: "Edit" | "Watch";
    indexForChangeCompanies?: number;
    onClose: () => void;
}

const cardInfo = [
    "name", "sector", "capital", "address", "financialIndicators",
    "foundedYear", "ceo", "employeesCount", "marketShare", "trends",
    "developmentOpportunities"
];

export default function MarketCards({ marketDetails, onClose, mode, indexForChangeCompanies }: MarketDetails) {
    const { updateCompaniesStore } = useEditMode();
    const inputsRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleSave = () => {
        if (indexForChangeCompanies === undefined) return;
        const updatedData: Record<string, any> = {};
        cardInfo.forEach((field, idx) => {
            if (inputsRefs.current[idx]?.value) {
                updatedData[field] = inputsRefs.current[idx]?.value;
            }
        });
        updateCompaniesStore(indexForChangeCompanies, updatedData);
        onClose();
    };

    return createPortal(
        <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-[90]">
            <div className="w-[800px] h-[500px] overflow-y-auto bg-gray-900 shadow-2xl rounded-2xl p-6 relative border border-gray-600">
                <button className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full" onClick={onClose}>✖</button>
                <h2 className={`text-4xl font-bold text-center text-white border-b-2 pb-2 mb-4 ${rubik.className}`}>Market Details</h2>
                <div className="flex flex-col gap-4">
                    {cardInfo.map((value, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                            {mode === "Watch" && (
                                <span className="text-gray-400 text-xl">
                                    <strong className="text-white capitalize">{value.replace(/([A-Z])/g, ' $1').trim()}</strong>: {marketDetails[value]}
                                </span>
                            )}
                            {mode === "Edit" && (
                                <>
                                    <label className="text-gray-400 text-lg capitalize">{value.replace(/([A-Z])/g, ' $1').trim()}</label>
                                    <input
                                        defaultValue={marketDetails[value]}
                                        ref={(el) => { if (el) inputsRefs.current[idx] = el; }}
                                        className="border-b-2 border-gray-500 bg-gray-800 text-white px-3 py-2"
                                    />
                                </>
                            )}
                        </div>
                    ))}
                </div>
                {mode === "Edit" && (
                    <button onClick={handleSave} className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg">Save Changes</button>
                )}
            </div>
        </section>,
        document.body
    );
}
//  indexForChangeCompanies елемент гріда 
//   масив полів 
// рефи то дані з полів 

