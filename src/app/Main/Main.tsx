import { Children } from "react";

// my staartup треба буде прибрати 
export default function Main( {children} : any ) {
     
    return (
    <main className="w-full h-[1000px] relative  z-0">
        {children}
    </main>
    )
}