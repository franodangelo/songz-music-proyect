import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => {
    return <div className="flex flex-col gap-8">
        {links.map((item) => (
            <NavLink
                onClick={() => handleClick && handleClick()}
                key={item.name}
                to={item.to}
                className="flex items-center font-medium text-sm text-gray-400 hover:text-cyan-400 ease-in-out duration-300">
                <item.icon className="w-6 h-6 mr-2" />
                {item.name}
            </NavLink>
        ))}
    </div>
}

export default function Sidebar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <div className="md:flex hidden flex-col w-60 py-8 px-6 bg-slate-900">
                <NavLinks />
            </div>
            <div className="absolute md:hidden block top-8 right-4">
                {mobileMenuOpen ?
                    <RiCloseLine onClick={() => setMobileMenuOpen(false)} className="w-6 h-6 mr-2 text-gray-100" /> :
                    <HiOutlineMenu onClick={() => setMobileMenuOpen(true)} className="w-6 h-6 mr-2 text-gray-100" />}
            </div>
            <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-gray-900 backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? "left-0" : "-left-full"}`}>
                <NavLinks handleClick={() => setMobileMenuOpen(false)} />
            </div>
        </>
    )
}

