import { Gift, Users, MailOpen, MessageCircleMore } from "lucide-react";
import { testimonialData } from "./testimonialData";

const iconComponents = {
    Gift: <Gift className="h-6 w-6 text-red-500" />,
    MailOpen: <MailOpen className="h-6 w-6 text-yellow-500" />,
    MessageCircleMore: <MessageCircleMore className="h-6 w-6 text-blue-500" />,
    Users: <Users className="h-6 w-6 text-green-500" />,
};

const Testimonial = () => {
    return (
        <div className="  flex flex-col lg:flex-row items-center justify-center lg:min-h-screen bg-gray-50 px-6 md:px-20 py-20">
            {/* Left Section */}
            <div className="md:w-3/4 text-center flex flex-col">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 order-1 lg:order-none">
                    Effortlessly Plan and Manage Your Perfect Events with Our
                    <span className="text-green-700">
                        Streamlined, Smart, and Simple App
                    </span>
                </h1>

                <p className="mt-4 text-gray-600 order-2 lg:order-none">
                    Download App to unlock the following features.
                </p>

                <div className="mt-6 flex justify-center lg:justify-start space-x-4 order-3 lg:order-none">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Download_on_the_App_Store_Badge.svg/512px-Download_on_the_App_Store_Badge"
                        alt="App Store"
                        className="h-12 cursor-pointer"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                        alt="Google Play"
                        className="h-12 cursor-pointer"
                    />
                </div>
            </div>

            {/* Right Section  */}
            <div className=" flex justify-center  mt-10 md:mt-0 order-4 md:order-none">
                <div className="relative w-full max-w-md p-6 rounded-lg">
                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* inserted data */}
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
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
