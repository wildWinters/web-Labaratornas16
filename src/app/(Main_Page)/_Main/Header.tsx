import { Sigmar } from "next/font/google"
import { Nunito } from "next/font/google";
import { Lilita_One } from "next/font/google";
import { Damion } from "next/font/google";
import { useForm } from "../_Store/sections";
import Link from "next/link";

export const damion = Damion({
    subsets:["latin"],
    weight:"400",
})
const sigmar = Sigmar({
    subsets:["latin"],
    weight:"400",
})

const nunito = Nunito({
    subsets:["latin"],
    weight:"700"
})

const lilita =  Lilita_One({
    subsets:["latin"],
    weight:"400"
})



export default function Header({}) {
    const headerinfo = ["Home", "Market", "Investors"];
    const path = ["url1","url2","url3","url4"];

    const activateForms = useForm(state=>state.activateForm);
    return (
      <>
        <header className="sticky top-0 z-50 w-full justify-between items-center h-[74px] bg-white flex">
          <span className={`ml-[5%] text-[#324381] text-[30px] max-w-[130px] h-[42px] ${nunito.className} italic `}>
               <strong className={`${damion.className}`}>Roundazzle</strong> 
          </span>
  
          <div className="w-[500px] text-black justify-between flex items-center mr-[8%] gap-4">
           
            <div className="relative w-[500px] text-black justify-between flex items-center mr-[8%] gap-4">
                {headerinfo.map((value, index) => (
                    <h2 key={index} className={` flex justify-center items-center m-[10px] ${nunito.className} transition-all duration-300 relative group hover:text-[#7791ed]`}>
                        {value}
                        <div className = "absolute bottom-[3px] m-auto bg-[#324381] w-0 h-0.5 transition-all duration-300 group-hover:w-full " />
                    </h2> 
                ))}
            </div>



            <button onClick={activateForms} className = {`${nunito.className} relative w-[160px] h-[48px] shrink-0 flex text-white items-center justify-center bg-[#324381] text-[16px] rounded-[20px] group`}>
                    Create Startup 
                <span className = "w-0 h-[2px]  block absolute bottom-[10px] transition-all duration-300 group-hover:w-[70%] bg-[white] shadow-2xl"></span>
            </button>

          </div>
 
 
        </header>
      </>
    );
  }
  

