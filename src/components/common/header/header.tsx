/** React Imports */
import { useState } from 'react';

/** Icons */
import LogoIcon from '../../../assets/icons/cloud-code.svg?react';
import MenuIcon from '../../../assets/icons/menu-barger.svg?react';
import CrossIcon from '../../../assets/icons/cross.svg?react';

/** Main Export */
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const NavLinks = ["Home", "Network", "Projects", "Contact", "About"];

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1350px] px-4">
            <div className="bg-black backdrop-blur-md shadow-lg rounded-3xl md:rounded-4xl border border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <LogoIcon className="w-5 h-5 fill-white" />
                    <p className="text-md font-semibold text-white">React App</p>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-2">
                        {NavLinks.map((link) => (
                            <li
                                key={link}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium cursor-pointer transition-colors ${link === "Home" ? "bg-zinc-800 text-white" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-1 focus:outline-none"
                >
                    {isOpen ? (
                        <CrossIcon className="w-5 h-5" fill='white' />
                    ) : (
                        <MenuIcon className="w-5 h-5" fill='white' />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <nav className="md:hidden mt-2 w-full bg-black/95 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-2xl">
                    <ul className="flex flex-col gap-4">
                        {NavLinks.map((link) => (
                            <li
                                key={link}
                                onClick={() => setIsOpen(false)}
                                className="text-white text-sm font-medium py-2 border-b border-white/5 last:border-none"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default Header