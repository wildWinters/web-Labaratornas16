"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useForm } from "../_Store/sections";
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
    <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 animate-fadeIn">
      <div className="relative w-[600px] bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition-transform scale-100">
        <button onClick={disabledForm} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition">
          <Image src="/reject (1).png" alt="exit" width={24} height={24} />
        </button>
        <svg fill="#333" width="50" height="50" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" className="mb-4">
          <path d="M106.67-564q0-93.33 41.5-171.17 41.5-77.83 111.16-129.5L299-811.33q-57.33 42.66-91.5 106.66T173.33-564h-66.66Zm680 0q0-76.67-34.17-140.67-34.17-64-91.5-106.66l39.67-53.34q69.66 51.67 111.16 129.5 41.5 77.84 41.5 171.17h-66.66ZM160-200v-66.67h80v-296q0-83.66 49.67-149.5Q339.33-778 420-796v-24q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v24q80.67 18 130.33 83.83Q720-646.33 720-562.67v296h80V-200H160Zm320-301.33ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM306.67-266.67h346.66v-296q0-72-50.66-122.66Q552-736 480-736t-122.67 50.67q-50.66 50.66-50.66 122.66v296Z"></path>
        </svg>
        <h2 className={`text-2xl font-extrabold text-gray-800 ${rubik900.className}`}>Створіть свій стартап</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full mt-4">
          {startupFields.map((field) => (
            <div key={field.name} className="flex flex-col items-center w-full">
              <label className={`text-sm font-semibold text-gray-700 ${rubik900.className}`}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className={`${nunito400.className} text-[18px] w-[90%] p-3 border rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800`}
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