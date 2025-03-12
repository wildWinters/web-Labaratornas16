import React from 'react';
import Image from 'next/image';
import useSwitchSections from '../_Store/sections';
import { inter600 } from '../_Main/Sections';
const Button = () => {

    const indexes = useSwitchSections( state => state.index);
    const switcher = useSwitchSections(state => state.switchElement);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative group">
        <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800  cursor-pointer rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
          {/* <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}
          <span className="relative z-10 block px-6 py-3 rounded-2xl bg-gray-900">
            <div className="relative z-10 flex items-center space-x-3">
              <span className={ ` ${inter600.className} transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-blue-300`} onClick={switcher}>Next </span>
                <Image width={18} height={18} src="/right-arrow (2).png"  alt ="arrow"/>
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Button;