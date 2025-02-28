

import { useState } from "react";
import { N_BagSvg } from "../../assets/Icons/index";
import { MyGalaNav_logo } from "../../assets/images/index";
import { ChevronDown } from "lucide-react";
import { NavbarMobileIcon } from "../../assets/images/index";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className=" bg-white shadow-md py-5 px-5 md:px-7 lg:px-12">
            {/* Mobile Layout */}
            <div className="flex items-center justify-between lg:hidden">
                {/* Hamburger Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-[#11235a]"
                >
                    <img
                        src={NavbarMobileIcon}
                        alt="menuIcon"
                        className="h-auto w-5 md:w-7"
                    />
                </button>

                {/* Logo - Center */}
                <div className="flex justify-center">
                    <img
                        src={MyGalaNav_logo}
                        alt="MyGala"
                        className="h-8 w-auto md:h-10 md:w-auto"
                    />
                </div>

                {/* City Dropdown - Right */}
                <div className="relative">
                    <button className="flex items-center text-[#11235a] bg-[#ffefea] font-medium px-1 md:px-2">
                        Cities <ChevronDown size={16} className="ml-1" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Conditional Rendering */}
            {isMobileMenuOpen && (
                <div className="mt-3 py-2 bg-white border-t lg:hidden">
                    <a
                        href="#"
                        className="block px-4 py-2 text-[#11235a] font-poppins"
                    >
                        Services
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-[#11235a] font-poppins"
                    >
                        Log In
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-[#11235a] font-poppins"
                    >
                        Are you a Vendor?
                    </a>
                </div>
            )}

            {/* Desktop Layout */}
            <div className="hidden lg:flex w-full">
                {/* Left Section - Fixed width */}
                <div className="w-1/3 flex justify-start items-center">
                    <div className="flex items-center gap-2">
                        <img
                            src={N_BagSvg}
                            alt="Bag Icon"
                            className="lg:h-8 lg:mx-4"
                        />
                        <span className="text-xl text-black font-medium font-poppins">
                            Are you a Vendor?
                        </span>
                    </div>
                </div>

                {/* Center Logo Section - Fixed width */}
                <div className="w-1/3 flex justify-center items-center">
                    <img
                        src={MyGalaNav_logo}
                        alt="MyGala"
                        className="lg:w-60 h-auto"
                    />
                </div>

                {/* Right Section - Fixed width */}
                <div className="w-1/3 flex justify-end items-center gap-4">
                    {/* City Selector */}
                    <div className="relative">
                        <select className="appearance-none border-none bg-[#ffefea] text-black font-medium font-poppins rounded-md px-10 py-3 lg:text-xl hover:bg-slate-50">
                            <option>Select City</option>
                            <option>New York</option>
                            <option>Los Angeles</option>
                        </select>
                        {/* Custom dropdown arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                            <span className="text-sm">▼</span>
                        </div>
                    </div>

                    {/* Services Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:text-xl text-black font-poppins font-medium py-3 px-4 hover:bg-slate-50"
                        >
                            Services ▼
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg font-poppins rounded-md p-2 z-10">
                                <a
                                    href="#"
                                    className="block px-2 py-1 hover:bg-gray-100"
                                >
                                    Photography
                                </a>
                                <a
                                    href="#"
                                    className="block px-2 py-1 hover:bg-gray-100"
                                >
                                    Catering
                                </a>
                                <a
                                    href="#"
                                    className="block px-2 py-1 hover:bg-gray-100"
                                >
                                    Decor
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Login Button */}
                    <button className="bg-[#11235a] text-white lg:text-xl px-7 lg:py-3 rounded-xl hover:bg-[#2143aa]">
                        Log In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;