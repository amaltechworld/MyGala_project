//  T_GroupSvg, T_InvitesSvg, T_commentsSvg,
import {
    T_GiftSvg,
    T_GroupSvg,
    T_InvitesSvg,
    T_commentsSvg,
} from "../../assets/icons/index";

// import { Gift, Users, MailOpen, MessageCircleMore } from "lucide-react";
import { testimonialData } from "./testimonialData";
import { Apple, PlayStore } from "../../assets/badge/index";
import { T_background } from "../../assets/images";

// svg data
const iconComponents = {
    Gift: (
        <img
            src={T_GiftSvg}
            alt="Gift Icon"
            className="h-6 w-6 lg:h-10 lg:w-10"
        />
    ),
    MailOpen: (
        <img
            src={T_GroupSvg}
            alt="Group Icon"
            className="h-6 w-6 lg:h-9 lg:w-9"
        />
    ),
    MessageCircleMore: (
        <img
            src={T_InvitesSvg}
            alt="Invites Icon"
            className="h-6 w-6 lg:h-9 lg:w-9"
        />
    ),
    Users: (
        <img
            src={T_commentsSvg}
            alt="Comments Icon"
            className="h-6 w-6 lg:h-9 lg:w-9"
        />
    ),
};

const Testimonial = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:min-h-screen bg-[#fdfafa]  lg:px-32 py-20 mx-0">
            {/* Left Section */}
            <div className="md:w-3/4 lg:w-1/2 text-center lg:text-left flex flex-col lg:flex-none">
                {/* Heading */}
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-medium font-playfair text-gray-900 px-5 lg:px-0">
                    Effortlessly Plan and Manage Your Perfect Events with Our{" "}
                    <span className="text-[#788247]">
                        Streamlined, Smart, and Simple App
                    </span>
                </h1>

                {/* Feature Grid + right sectio */}
                <div className="relative w-full flex justify-center lg:hidden mt-6">
                    <div
                        style={{ backgroundImage: `url(${T_background})` }}
                        className="w-full max-w-none md:max-w-none h-52 md:rounded-lg bg-cover bg-center relative"
                    >
                        {/* Feature Cards Overlay */}
                        <div className="absolute bottom-[15px] md:bottom-[20px] left-1/2 transform -translate-x-1/2 grid grid-cols-2 gap-4 w-[90%]  py-4  ">
                            {testimonialData.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center space-x-3 p-4 font-poppins rounded-md ${feature.color} shadow-md w-full`}
                                >
                                    {iconComponents[feature.icon]}
                                    <span className="text-gray-800 text-xs md:text-base font-medium">
                                        {feature.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Paragraph */}
                <p className="mt-4 text-gray-600 font-poppins">
                    Download App to unlock the following features.
                </p>

                {/* App Buttons */}
                <div className="mt-6 flex justify-center lg:justify-start space-x-4 ">
                    <a
                        href="https://apps.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Apple}
                            alt="App Store"
                            className="h-12 lg:h-16 cursor-pointer"
                        />
                    </a>
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={PlayStore}
                            alt="Google Play"
                            className="h-12 lg:h-16 cursor-pointer"
                        />
                    </a>
                </div>
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex relative  lg:w-1/2 lg:justify-center lg:mt-0 h-screen">
                <div
                    style={{ backgroundImage: `url(${T_background})` }}
                    className="w-full max-w-2xl h-[80vh] md:rounded-lg bg-cover bg-center relative"
                ></div>

                {/* Feature Cards Overlay */}
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 flex flex-col gap-1   ">
                    {testimonialData.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex items-center space-x-3 p-6 m-6 font-poppins rounded-md ${feature.color} shadow-md w-full`}
                        >
                            {iconComponents[feature.icon]}
                            <span className="text-gray-800 lg:text-lg font-medium">
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
