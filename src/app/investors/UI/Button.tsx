import React, { ReactNode } from "react";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: "900", 
})

interface ButtonProps {
  width?: number;
  children?: ReactNode;
  text: string,
  onClick?: () => void;
}

export default function Button({width, text, onClick }: ButtonProps) {
  const widthButton = width ? `${width}px` : "100px"; 

  return (
    <button
      style = {{ width: widthButton }} 
      onClick = {onClick}
      className = {`${poppins.className} text-[1.7vh] absolute inset-0 m-auto rounded-[10px] h-10 bg-black text-white outline-none `}>
      {text}
    </button>
  );
}
