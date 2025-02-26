
import { useState } from "react";
import { N_BagSvg } from "../../assets/icons/index";
import { MyGalaNav_logo } from "../../assets/images/index";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md py-5 px-6 flex justify-between items-center">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <img src={N_BagSvg} alt="Bag Icon" className="lg:h-9 lg:mx-4" />
                <span className="text-2xl text-black font-medium font-poppins">
                    Are you a Vendor?
                </span>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2">
                <img
                    src={MyGalaNav_logo}
                    alt="MyGala"
                    className="lg:w-60 h-auto lg:mx-2"
                />
        
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
                {/* City Selector */}
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                    <option>Select City</option>
                    <option>New York</option>
                    <option>Los Angeles</option>
                </select>

                {/* Services Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-sm font-medium"
                    >
                        Services ▼
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md p-2">
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
                <button className="bg-indigo-700 text-white px-4 py-1 rounded-md">
                    Log In
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
