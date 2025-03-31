"use client"
import { Lilita_One } from "next/font/google";
import useAuth from "../Store/useRegistration";
const lilitaOne = Lilita_One({
    subsets: ["latin-ext"],
    weight: "400"
})

interface AuthButton {
    txt: "Log in" | "Log out";   
    mode: () => void;  
}

export default function AuthButton({ txt, mode }: AuthButton) {
    const {openAuthModal,isAuthModal} =  useAuth();
    function settos() {
        openAuthModal();
        setTimeout(() => console.log(isAuthModal),1000);
        mode();
    }

    
    return (
        <button onClick={settos} className={`rounded-[20px] text-white w-[150px] h-[30px] group border-2 border-transparent bg-black hover:bg-white transition-all duration-300 hover:border-black ${lilitaOne.className} hover:text-black `}>  
            {txt}
            <div className="m-auto rounded-[20px] w-[0px] transition-all duration-1000  mb-[20px] bg-white h-[2px]  group-hover:w-[80%] group-hover:bg-black"/>
        </button>
    )
}