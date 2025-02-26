

import { useState } from "react";
import { N_BagSvg } from "../../assets/icons/index";
import { MyGalaNav_logo } from "../../assets/images/index";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md py-5 px-12">
            {/* Main container with fixed width and 3 equal columns */}
            <div className="flex w-full">
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
                    <select className="border-none bg-[#ffefea] text-black font-medium font-poppins rounded-md px-10 py-3 lg:text-xl hover:bg-slate-50">
                        <option>Select City</option>
                        <option>New York</option>
                        <option>Los Angeles</option>
                    </select>

                    {/* Services Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:text-xl text-black font-poppins font-medium py-3 px-4 hover:bg-slate-50"
                        >
                            Services ▼
                        </button>
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg font-poppins rounded-md p-2">
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
                    <button className="bg-[#11235a] text-white lg:text-xl px-7 lg:py-3 rounded-xl font-poppins hover:bg-[#2143aa]">
                        Log In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;