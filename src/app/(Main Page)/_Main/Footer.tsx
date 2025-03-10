import { Fragment } from "react";
import { damion } from "./Header";
import { Nunito } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

export const nunito400 = Nunito({
    subsets: ["latin"],
    weight: "400"
});


export default function Footer() {
    const footerDescription =
    [
        "Roundazzle",
        "Our mission is your vision and your mission is to tell us your vision, so that what you envision will become our mission.",
        "We are a placeholder text and yes we are aware of that. We have generated self-awareness ever since the beginning of time and space."
    ];

    const FooterLinkList = ["Useful Links", "Home", "About", "Service", "Industries", "Blog", "Career", "Contact"];

    const FooterAdminContacts = [
        "Get in touch",
        {
            img: "/email (1).png",
            adminInfo: "nonexistentadd@gmail.com"
        },
        {
            img: "/phone-call (1).png",
            adminInfo: "+639123456789"
        },
        {
            img: "/maps-and-flags.png",
            adminInfo: "20th street.Dremland"
        }
    ];

    const socialNetworks = [
        { img: "/instagram (8).png", link: "https://instagram.com" },
        { img: "/telegram (2).png", link: "https://t.me" },
        { img: "/youtube (2).png", link: "https://youtube.com" },
        { img: "/facebook (1).png", link: "https://facebook.com" }
    ];

    return (
        <footer className="flex justify-start w-full flex-col h-[450px] bg-[#272a31]">
            <div className="flex justify-between w-[80%] m-auto">
                <div className="flex justify-evenly w-[320px] text-justify h-[330px] flex-col">
                    {footerDescription.map((value, index) => (
                        <Fragment key={index}>
                            {index === 0 && <h1 className={`${damion.className} text-[40px] border-b-2 border-transparent transition-all duration-300 hover:border-white`}>{value}</h1>}
                            {index > 0 && <p className={`${nunito400.className} border-b-2 border-transparent transition-all duration-300 hover:border-white`}>{value}</p>}
                        </Fragment>
                    ))}
                </div>

                <div className="flex flex-col h-[300px]">
                    {FooterAdminContacts.map((value, index) => (
                        <Fragment key={index}>
                            {index === 0 && value === "Get in touch" && (
                                <h1 className={`${damion.className} mx-3 text-[40px] border-b-2 border-transparent transition-all duration-300 hover:border-white`}>{value}</h1>
                            )}
                            {index > 0 && typeof value === "object" && typeof value.img === "string" && (
                                <Link passHref href="#" className="relative group flex items-center gap-2 my-3 transition-all duration-300 border-b-2 border-transparent hover:border-white">
                                    <Image className="mx-3 flex rounded-[5px]" src={value.img} alt="img" width={30} height={20} />
                                    {value.adminInfo}
                                </Link>
                            )}
                        </Fragment>
                    ))}

                    <div className="flex justify-around">
                        {socialNetworks.map((item, index) => (
                            <Link key={index} href={item.link} target="_blank" className="flex items-center justify-center w-[60px] h-[60px] transition-all duration-300 border-b-2 border-transparent hover:border-white">
                                <Image src={item.img} alt="social-networks" width={30} height={30} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col h-[270px] w-[200px]"> 
                    {FooterLinkList.map((value, index) => (
                        <Fragment key={index}> 
                            {index === 0 && <h1 className={`${damion.className} text-[40px] border-b-2 border-transparent transition-all duration-300 hover:border-white`}>{value}</h1>}
                            {index > 0 && (
                                <Link className="flex justify-start items-center border-b-2 border-transparent transition-all duration-300 hover:border-white" href="#">
                                    <Image className="mr-3 my-2" src="/next.png" alt="strong mentality" width={15} height={15} /> 
                                    {value}
                                </Link>
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>

            <div className="w-full h-[40px] flex items-center justify-center border-b-2 border-transparent transition-all duration-300 hover:border-white">&copy; Your site - Copyright 2025</div>
        </footer>
    );
}
