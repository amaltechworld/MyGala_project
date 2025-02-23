import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { comments } from "./CustomerData";
import { Cu_Co_backgroundImg } from "../../assets/images/index";

const CustomerComment = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : comments.length - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < comments.length - 1 ? prevIndex + 1 : 0
        );
    };

    return (
        <section className="hidden lg:block min-h-screen bg-[#fdfafa] py-20">
            {/* Main Container //px-4*/}
            <div className="container mx-0 ">
                {/* Top Section with Image and Heading */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
                    {/* Left Image Section */}
                    <div className="lg:w-1/2 relative">
                        <div
                            className="w-full h-[700px] bg-cover bg-center rounded"
                            style={{
                                backgroundImage: `url(${Cu_Co_backgroundImg})`,
                            }}
                        ></div>

                        {/* comment container w-full*/}
                        <div className="absolute bottom-[-20%] left-48 lg:w-[87vw] min-h-[90%] p-8  flex overflow-hidden hide-scrollbar">
                            <div
                                className="flex transition-transform duration-500 gap-6"
                                style={{
                                    transform: `translateX(-${
                                        currentIndex * 800
                                    }px)`,
                                }}
                            >
                                {comments.map((comment, index) => (
                                    <div
                                        key={index}
                                        className="w-[800px] bg-[#eff3dd] p-6 flex-shrink-0 border-style-solid border-[25px] border-[#fdfafa] rounded-none relative"
                                    >
                                        {/* Quote Icon */}
                                        <span className="text-4xl lg:text-5xl font-bold text-gray-800 block">
                                            &ldquo;
                                        </span>

                                        {/* Testimonial Text */}
                                        <p className="text-gray-800 text-2xl leading-relaxed font-poppins mb-8">
                                            {comment.quote}
                                        </p>

                                        {/* User Info */}
                                        <div className="flex items-center gap-4 absolute bottom-6 left-6">
                                            <img
                                                src={comment.image}
                                                alt={comment.name}
                                                className="w-14 h-14 lg:w-24 lg:h-24 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="font-bold text-gray-900 text-lg font-playfair">
                                                    {comment.name}
                                                </p>
                                                <p className="text-gray-600 font-poppins">
                                                    {comment.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute left-0 bottom-8 flex gap-2 ml-8">
                            <button
                                className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
                                onClick={handlePrevClick}
                            >
                                <ArrowLeft className="w-5 h-5 text-gray-700" />
                            </button>
                            <button
                                className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
                                onClick={handleNextClick}
                            >
                                <ArrowRight className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>
                    </div>
                    {/* Right Heading Section */}
                    <div className="lg:w-1/2 h-full flex items-start justify-start">
                        <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 pt-10">
                            What Our{" "}
                            <span className="text-[#788247]">Customers</span>{" "}
                            Say
                            <br /> About Us
                        </h2>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CustomerComment;



