import { ReactNode } from "react";

interface SameButtonProps {
    children: ReactNode;
    click?: () => void
}

export default function SameButton({ children, click }: SameButtonProps) {
    return (
        <button onClick={click}
                className="w-[200px] h-[50px] border-2 border-black bg-black text-white rounded-lg text-lg font-semibold transform transition-all
                duration-300 ease-in-out hover:bg-white hover:text-black hover:border-2 my-[100px]
                hover:border-black hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black">
            {children}
        </button>
    );
}
