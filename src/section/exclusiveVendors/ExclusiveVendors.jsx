

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { vendorData } from "./VendorsData";
import { E_VendorNavigation } from "../../assets/images/index";

const ExclusiveVendors = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % vendorData.length);
    };

        const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? vendorData.length - 1 : prev - 1
        );
    }
    return (
        <>
            {/* desktop version */}
            <div className="relative bg-[#ffefea] h-screen items-center px-10 hidden lg:flex">
                {/* Left Content - Fixed Column */}

                <div className="w-1/3 space-y-4 z-10">
                    <h1 className="text-5xl text-black font-bold leading-tight font-playfair pb-10">
                        Embark on a <br /> Journey with Our <br />
                        <span className="text-[#788247] ">
                            Exclusive Vendors
                        </span>
                    </h1>
                    <p className="text-gray-700 font-poppins text-lg w-[22vw] py-10">
                        Explore a range of tailored solutions that elevate your
                        event & celebration to new heights.
                    </p>
                    {/* button */}
                    <button className="bg-[#11235a] text-white px-10 py-4 rounded-lg font-poppins">
                        Explore More
                    </button>
                </div>

                {/* Image Slider - Image by Image Scrolling -right*/}
                <div className="absolute left-1/3 w-[65.9vw] flex overflow-hidden h-3/4">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * 25}%)`,
                        }}
                    >
                        {vendorData.map((item, index) => (
                            <div
                                key={item.id}
                                className={`relative w-[400px] h-[550px] flex-shrink-0 transition-transform duration-500 ease-in-out ${
                                    index === currentIndex
                                        ? "opacity-100 scale-100 cursor-pointer"
                                        : "opacity-90 scale-90"
                                }`}
                                style={{
                                    transform: `translateX(${
                                        (index - currentIndex) * 5
                                    }%)`,
                                }}
                                onClick={() => setCurrentIndex(index)} // image lead to the next page
                            >
                                <div className="px-4">
                                    <div
                                        className={`relative overflow-hidden rounded-lg shadow-md transition-height duration-500 ease-in-out ${
                                            index === currentIndex
                                                ? "w-[400px] h-[550px]"
                                                : "w-[350px] h-[400px]"
                                        }`}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />

                                        <div className="absolute bottom-10 left-6 bg-white bg-opacity-70 p-4  flex items-center w-[60%] py-10 pr-12 ">
                                            <span className="text-gray-700 text-2xl font-semibold font-poppins">
                                                {item.title}
                                            </span>
                                        </div>
                                        {/* Arrow placed outside */}
                                        <div className="absolute bottom-6 left-[calc(6%+60%)]  -translate-y-1/2">
                                            <img
                                                src={E_VendorNavigation}
                                                alt="navigation right arrow"
                                                className="h-auto w-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow Navigation */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-30"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>

                {/* Bottom Indicators */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-5 ">
                    {vendorData.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 w-2 rounded-full cursor-pointer ${
                                index === currentIndex
                                    ? "bg-black"
                                    : "bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* mobile version */}
            <div className="lg:hidden relative bg-[#ffefea] h-auto flex items-center justify-center p-5 w-full overflow-hidden">
                <div className="text-center w-full">
                    <h1 className="text-xl text-black font-bold leading-tight font-playfair pt-5">
                        Embark on a Journey with Our <br />
                        <span className="text-[#788247]">
                            Exclusive Vendors
                        </span>
                    </h1>
                    <p className="text-gray-700 font-poppins text-xs py-5">
                        Explore a range of tailored solutions that elevate your
                        event & celebration to new heights.
                    </p>

                    {/* Image Slider */}
                    <div className="relative  w-full mx-auto flex items-center justify-center">
                        {/* position absolute */}
                        <div className="relative w-full overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out ml-4"
                                style={{
                                    transform: `translateX(-${
                                        currentIndex * 20
                                    }%)`,
                                }}
                            >
                                {vendorData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`relative flex-shrink-0 transition-transform duration-500 ease-in-out mx-2 ${
                                            index === currentIndex
                                                ? "opacity-100 scale-100 cursor-pointer"
                                                : "opacity-90 scale-90"
                                        }`}
                                        onClick={() => setCurrentIndex(index)}
                                    >
                                        <div className="px-2">
                                            <div
                                                className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
                                                    index === currentIndex
                                                        ? "w-[180px] h-[250px] "
                                                        : "w-[150px] h-[200px] "
                                                }`}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />

                                                {/* Title */}
                                                <div className="absolute bottom-10 left-4 bg-white bg-opacity-70 p-2 rounded">
                                                    <span className="text-gray-700 text-sm font-semibold font-poppins">
                                                        {item.title}
                                                    </span>
                                                </div>

                                                {/* Navigation Arrow */}
                                                <div className="absolute bottom-6 right-4">
                                                    <img
                                                        src={E_VendorNavigation}
                                                        alt="navigation right arrow"
                                                        className="h-6 w-6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Arrow */}
                            <button
                                className="absolute right-0 z-10 bg-white bg-opacity-70 p-2 rounded-full shadow"
                                onClick={nextSlide}
                            >
                                ▶
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExclusiveVendors;


