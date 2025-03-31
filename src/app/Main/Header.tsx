import { Sigmar } from "next/font/google";
import { Nunito } from "next/font/google";
import { Lilita_One } from "next/font/google";
import { Damion } from "next/font/google";
import { useForm } from "../Store/sections";
import Link from "next/link";
import { ReactNode } from "react";
import AuthButton from "../UI/AuthButton";
import useAuth from "../Store/useRegistration";

export const damion = Damion({ subsets: ["latin"], weight: "400" });
const sigmar = Sigmar({ subsets: ["latin"], weight: "400" });
const nunito = Nunito({ subsets: ["latin"], weight: "700" });
export const nunito400 = Nunito({ subsets: ["latin"], weight: "400" });
const lilita = Lilita_One({ subsets: ["latin"], weight: "400" });

interface HeaderProps {
    editButton?: ReactNode;
    Selections?: any;
}


export default function Header({ editButton, Selections = null }: HeaderProps) {

    const headerinfo = ["Home", "Market", "Investors"];
    const path = ["/", "/Market", "/investors"];
    const activateForms = useForm(state => state.activateForm);
    const {logIn, logOut} = useAuth();
    return (
        <header className="sticky top-0 z-50 w-full flex items-center justify-between h-[80px] bg-black shadow-lg px-8 border-b-2 border-neon-blue">
            <nav className="flex items-center gap-8">
                {headerinfo.map((value, index) => (
                    <Link href={path[index]} key={value} className={`relative text-[18px] text-white transition-all duration-300 hover:text-neon-blue ${nunito.className}`}>
                        {value}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-neon-blue transition-all duration-300 hover:w-full" />
                    </Link>
                ))}
            </nav>
            <div className="flex items-center gap-6">
                {Selections}
                {editButton}

                <div className="flex flex-col justify-center items-center">
                    <button 
                        onClick={activateForms} 
                        className={`relative group flex flex-col justify-center items-center px-6 py-2 h-[30px] w-[150px] text-white bg-neon-blue rounded-full text-[14px] transition-all duration-300 shadow-md hover:shadow-neon-blue-glow hover:bg-white hover:text-black overflow-hidden ${nunito.className}`}
                    >
                        My Startup
                        <div className="absolute bottom-[5px]  left-1/2 w-0 h-[2px] bg-black transition-all duration-1000 group-hover:w-4/5 transform -translate-x-1/2"/>
                    </button>
                </div>


                <AuthButton txt="Log in" mode={logIn} />
                <AuthButton txt="Log out" mode={logOut} />
            </div>
        </header>
    );
}
