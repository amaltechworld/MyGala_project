import { Gift, Users, MailOpen, MessageCircleMore } from "lucide-react";
import { testimonialData } from "./testimonialData";
import { Apple, PlayStore } from "../../assets/badge/index";

const iconComponents = {
    Gift: <Gift className="h-6 w-6 lg:h-10 lg:w-10 text-black" />,
    MailOpen: <MailOpen className="h-6 w-6 text-black" />,
    MessageCircleMore: <MessageCircleMore className="h-6 w-6 text-black" />,
    Users: <Users className="h-6 w-6 text-black" />,
};


const Testimonial = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:min-h-screen bg-gray-50 px-6 md:px-20 py-20">
            {/* Left Section */}
            <div className="md:w-3/4 lg:w-1/2 text-center lg:text-left flex flex-col lg:flex-none order-2 lg:order-none">
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 order-1 lg:order-none">
                    Effortlessly Plan and Manage Your Perfect Events with Our{" "}
                    <span className="text-green-700">
                        Streamlined, Smart, and Simple App
                    </span>
                </h1>

                {/* Feature Grid + right sectio */}
                <div className="mt-6 grid grid-cols-2 gap-4 order-2 lg:order-none">
                    {testimonialData.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex items-center space-x-3 p-4 rounded-md ${feature.color} shadow-md`}
                        >
                            {iconComponents[feature.icon]}
                            <span className="text-gray-800 font-medium">
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Paragraph */}
                <p className="mt-4 text-gray-600 order-3 lg:order-none">
                    Download App to unlock the following features.
                </p>

                {/* App Buttons */}
                <div className="mt-6 flex justify-center lg:justify-start space-x-4 order-4 lg:order-none ">
                    <a
                        href="https://apps.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={Apple}
                            alt="App Store"
                            className="h-12 cursor-pointer"
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
                            className="h-12 cursor-pointer"
                        />
                    </a>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex justify-center mt-10 md:mt-0 order-1 lg:order-none">
                <div className="relative w-full max-w-md p-6 rounded-lg"></div>
            </div>
        </div>
    );
};

export default Testimonial;


// const Testimonial = () => {
//     return (
//         <div className="flex flex-col lg:flex-row items-center justify-center lg:min-h-screen bg-gray-50 px-6 md:px-20 py-20">
//             {/* Left Section (Text) */}
//             <div className="lg:w-1/2 text-center lg:text-left">
//                 <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
//                     Effortlessly Plan and Manage Your Perfect Events with Our{" "}
//                     <span className="text-green-700">
//                         Streamlined, Smart, and Simple App
//                     </span>
//                 </h1>
//                 <p className="mt-4 text-gray-600">
//                     Download App to unlock the following features.
//                 </p>

//                 {/* App Buttons */}
//                 <div className="mt-6 flex justify-center lg:justify-start space-x-4">
//                     <a
//                         href="https://apps.apple.com"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <img
//                             src={Apple}
//                             alt="App Store"
//                             className="h-12 cursor-pointer"
//                         />
//                     </a>
//                     <a
//                         href="https://play.google.com/store"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <img
//                             src={PlayStore}
//                             alt="Google Play"
//                             className="h-12 cursor-pointer"
//                         />
//                     </a>
//                 </div>
//             </div>

//             {/* Right Section (Image + Feature Cards) */}
//             <div className="relative w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
//                 <img
//                     // src={BackgroundImage}
//                     alt="Decorative Background"
//                     className="w-full max-w-md rounded-lg"
//                 />

//                 {/* Feature Cards Overlay */}
//                 <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex flex-col gap-4">
//                     {testimonialData.map((feature, index) => (
//                         <div
//                             key={index}
//                             className={`flex items-center space-x-3 p-4 rounded-md ${feature.color} shadow-md w-64`}
//                         >
//                             {iconComponents[feature.icon]}
//                             <span className="text-gray-800 font-medium">
//                                 {feature.text}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Testimonial;

