import React from 'react';
import Image from 'next/image';
import useSwitchSections from '../Store/sections';
import { inter500 } from '../Main/Sections';
import { twMerge } from "tailwind-merge";

interface Button {
  text: string;
  order: number;
  rotate: number;
}

const Button = ({ text, order, rotate }: Button) => {  
  const switchElementNext = useSwitchSections(state => state.switchElementNext);
  const switchElementPrev = useSwitchSections(state => state.switchElementPrev);
  const switchIndexPrevOrNext = text === "Next" ? switchElementNext : switchElementPrev;

  return (
    <div className="flex items-center justify-center">
      <div className="relative group">
        <button 
          className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95" 
          onClick={switchIndexPrevOrNext}
        >
          <span className="relative  z-10 block px-6 py-3 rounded-2xl bg-gray-900">
            <div className="relative z-10 flex justify-center h-[10px] items-center space-x-3">
              <span className={twMerge(`${inter500.className} w-[100px] transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-blue-300`)}>
                {text}
              </span>
              <Image 
                style={{ transform: `rotate(${rotate}deg)`, order }} 
                width={18} 
                height={18} 
                src="/right-arrow (2).png" 
                alt="arrow" 
                className='mx-[5px]'
              />
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Button;
//динамічна вставку там можна  зробити 