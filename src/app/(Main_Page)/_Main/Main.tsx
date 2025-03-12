import { Children } from "react";


export default function Main( {children} : any ) {
     
    return (
    <main className="w-full h-[1000px] relative  z-0">
        {children}
    </main>
    )
}