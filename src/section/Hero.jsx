import { HeroImg } from "../assets/images/index";
import { HeroArrow } from "../assets/images/index";
import { Search } from "lucide-react";

const Hero = () => {
    return (
        <section
            className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white text-center px-6"
            style={{ backgroundImage: `url(${HeroImg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 space-y-16">
                <h1 className=" text-2xl md:text-5xl text-white font-medium font-playfair">
                    Crafting Memorable Moments, <br /> One Event at a Time
                </h1>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white font-poppins">
                    Search over 1000 local professionals with reviews, pricing,
                    availability, and more.
                </p>

                {/* Search Bar */}
                <div className="py-5 lg:pb-10">
                    <div className="flex items-center bg-white bg-opacity-10 rounded-lg border border-[#7a6d64] px-4 py-2 shadow-md max-w-4xl mx-auto">
                        <span className="text-white">
                            <Search size={30}  />
                        </span>
                        <input
                            type="text"
                            placeholder="e.g Vendor, Products, Invites"
                            className="w-full px-3 py-2 text-white lg:text-2xl font-poppins bg-transparent outline-none placeholder-slate-300"
                        />
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="pt-10 lg:pt-24">
                    <div className=" flex justify-center animate-bounce">
                        <span>
                            <img src={HeroArrow} alt="Down Navigation Arrow" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
