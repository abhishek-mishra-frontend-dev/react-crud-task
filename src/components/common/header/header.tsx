/** Icons */
import LogoIcon from '../../../assets/icons/cloud-code.svg?react';

/** Main Export */
const Header = () => {

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1350px] px-4">
            <div className="bg-black backdrop-blur-md shadow-lg rounded-4xl border border-white/10 px-6 py-4 flex items-center">
                <div className="flex items-center gap-2 mr-10">
                    <LogoIcon className="w-5 h-5 fill-white"/>
                    <p className="text-md font-semibold text-white">React App</p>
                </div>
                <nav>
                    <ul className="flex items-center">
                        <li className="px-4 py-1.5 rounded-md bg-black-accent text-sm text-white font-medium cursor-pointer">
                            Home
                        </li>
                        <li className="px-3 rounded-md text-sm text-gray-dark font-medium hover:text-white transition-colors cursor-pointer">
                            Network
                        </li>
                        <li className="px-3 rounded-md text-sm text-gray-dark font-medium hover:text-white transition-colors cursor-pointer">
                            Projects
                        </li>
                        <li className="px-3 rounded-md text-sm text-gray-dark font-medium hover:text-white transition-colors cursor-pointer">
                            Contact
                        </li>
                        <li className="px-3 rounded-md text-sm text-gray-dark font-medium hover:text-white transition-colors cursor-pointer">
                            About
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header