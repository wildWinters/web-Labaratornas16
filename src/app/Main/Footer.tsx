import { Fragment } from "react";
import { damion } from "./Header";
import { Nunito } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTelegram, FaYoutube, FaFacebook } from "react-icons/fa";

export const nunito400 = Nunito({
    subsets: ["latin"],
    weight: "400"
});

export default function Footer() {
    const footerDescription = [
        "Roundazzle",
        "Our mission is your vision and your mission is to tell us your vision, so that what you envision will become our mission.",
        "We are a placeholder text and yes we are aware of that. We have generated self-awareness ever since the beginning of time and space."
    ];

    const FooterLinkList = ["Useful Links", "Home", "About", "Service", "Industries", "Blog", "Career", "Contact"];

    // Розділили заголовок і контакти
    const FooterAdminContactsTitle = "Get in touch";
    const FooterAdminContacts = [
        { img: "/email (1).png", adminInfo: "nonexistentadd@gmail.com" },
        { img: "/phone-call (1).png", adminInfo: "+639123456789" },
        { img: "/maps-and-flags.png", adminInfo: "20th street.Dremland" }
    ];

    const socialNetworks = [
        { icon: <FaInstagram />, link: "https://instagram.com" },
        { icon: <FaTelegram />, link: "https://t.me" },
        { icon: <FaYoutube />, link: "https://youtube.com" },
        { icon: <FaFacebook />, link: "https://facebook.com" }
    ];

    return (
        <footer className="flex flex-col w-full bg-black text-white py-12">
            <div className="flex flex-col md:flex-row justify-between w-[85%] mx-auto gap-10">
                {/* Опис */}
                <div className="flex flex-col w-[350px] text-justify space-y-4">
                    {footerDescription.map((value, index) => (
                        <Fragment key={index}>
                            {index === 0 && <h1 className={`${damion.className} text-[42px] font-bold border-b-2 pb-2`}>{value}</h1>}
                            {index > 0 && <p className={`${nunito400.className} text-gray-400`}>{value}</p>}
                        </Fragment>
                    ))}
                </div>

                {/* Контакти */}
                <div className="flex flex-col space-y-3">
                    <h1 className={`${damion.className} text-[30px] font-bold border-b-2 pb-2`}>{FooterAdminContactsTitle}</h1>
                    {FooterAdminContacts.map((value, index) => (
                        <Link key={index} href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all">
                            <Image className="rounded-md" src={value.img} alt="icon" width={25} height={25} />
                            {value.adminInfo}
                        </Link>
                    ))}
                    <div className="flex space-x-3 mt-4">
                        {socialNetworks.map((item, index) => (
                            <Link key={index} href={item.link} target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-500 transition-all">
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Посилання */}
                <div className="flex flex-col w-[220px] space-y-3">
                    <h1 className={`${damion.className} text-[30px] font-bold border-b-2 pb-2`}>{FooterLinkList[0]}</h1>
                    {FooterLinkList.slice(1).map((value, index) => (
                        <Link key={index} className="flex items-center text-gray-300 hover:text-white transition-all" href="#">
                            <Image className="mr-2" src="/next.png" alt="icon" width={15} height={15} />
                            {value}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="w-full text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
                &copy; Your site - Copyright 2025
            </div>
        </footer>
    );
}
