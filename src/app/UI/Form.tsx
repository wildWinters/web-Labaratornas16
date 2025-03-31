"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useForm } from "../Store/sections";
import { Rubik, Nunito } from "next/font/google";

const nunito400 = Nunito({ subsets: ["latin"], weight: "400" });
const rubik900 = Rubik({ subsets: ["latin"], weight: "900" });

const startupFields = [
  { name: "companyName", label: "Назва компанії", type: "text", placeholder: "Введіть назву" },
  { name: "industry", label: "Сфера діяльності", type: "text", placeholder: "Наприклад, IT, маркетинг" },
  { name: "employees", label: "Кількість працівників", type: "number", placeholder: "Скільки у вас працівників?" },
  { name: "revenue", label: "Прибуток (USD)", type: "number", placeholder: "Місячний прибуток" },
  { name: "expenses", label: "Витрати (USD)", type: "number", placeholder: "Скільки витрачаєте?" },
  { name: "markets", label: "Ринки збуту", type: "text", placeholder: "Основні ринки" },
  { name: "offices", label: "Кількість офісів", type: "number", placeholder: "Скільки офісів?" }
];

export default function StartupForm() {
  const [formData, setFormData] = useState<Record<string, string | number>>({});
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const disabledForm = useForm(state => state.disabledForm);

  useEffect(() => {
    setModalRoot(document.getElementById("body"));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Дані стартапу:", formData);
  };

  if (!modalRoot) return null;

  return createPortal(
    <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 p-4">
      <div className="relative w-[500px] max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform scale-100">
        <button onClick={disabledForm} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition">
          <Image src="/reject (1).png" alt="exit" width={24} height={24} />
        </button>
        <h2 className={`text-xl md:text-2xl font-extrabold text-gray-800 ${rubik900.className}`}>Створіть свій стартап</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full mt-4">
          {startupFields.map((field) => (
            <div key={field.name} className="flex flex-col items-start w-full">
              <label className={`text-sm font-semibold text-gray-700 ${rubik900.className}`}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className={`${nunito400.className} w-full p-2 border rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 text-sm md:text-base`}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg">
            <span className={`${rubik900.className}`}>Запустити стартап</span>
            <svg fill="#e8eaed" width="20px" viewBox="0 -960 960 960" height="20px" xmlns="http://www.w3.org/2000/svg">
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"></path>
            </svg>
          </button>
        </form>
      </div>
    </section>,
    modalRoot
  );
}