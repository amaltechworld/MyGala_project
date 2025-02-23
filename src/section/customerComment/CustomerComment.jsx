

import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { comments } from "./CustomerData";
import { Cu_Co_backgroundImg } from "../../assets/images/index";

const CustomerComment = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    //Arrow button
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

    //mobile swipe
    const handlers = useSwipeable({
        onSwipedLeft: handleNextClick,
        onSwipedRight: handlePrevClick,
        preventDefaultTouchmoveEvent: true,
        trackMouse:true,
    });

    return (
        <>
            {/* Desktop View */}
            <section className="hidden lg:block min-h-screen bg-[#fdfafa] py-20">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
                        {/* Left Image Section */}
                        <div className="lg:w-1/2 relative">
                            <div
                                className="w-full h-[700px] bg-cover bg-center rounded"
                                style={{
                                    backgroundImage: `url(${Cu_Co_backgroundImg})`,
                                }}
                            ></div>
                            <div className="absolute bottom-[-20%] left-48 lg:w-[87vw] min-h-[90%] p-8 flex overflow-hidden hide-scrollbar">
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
                                            className="w-[800px] bg-[#eff3dd] p-6 flex-shrink-0 border-[25px] border-[#fdfafa] rounded-none relative"
                                        >
                                            <span className="text-4xl lg:text-5xl font-bold text-gray-800 block">
                                                &ldquo;
                                            </span>
                                            <p className="text-gray-800 text-2xl leading-relaxed font-poppins mb-8">
                                                {comment.quote}
                                            </p>
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
                            {/* Arrow button navigation */}
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
                        <div className="lg:w-1/2 h-full flex items-start justify-start">
                            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 pt-10">
                                What Our{" "}
                                <span className="text-[#788247]">
                                    Customers
                                </span>{" "}
                                Say
                                <br /> About Us
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile View */}
            <section className="block lg:hidden min-h-screen bg-[#fdfafa] py-20 relative">
                {/* Main Container */}
                <div className="container mx-auto px-4">
                    {/* Heading Overlay absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 */}
                    <h2
                        className="
                        text-black text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4 py-2 rounded-lg"
                    >
                        What Our{" "}
                        <span className="text-[#788247]">Customers</span> Say
                        About Us
                    </h2>
                    {/* Top Section with Background Image and Heading */}
                    <div
                        className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] bg-cover bg-center rounded-md"
                        style={{
                            backgroundImage: `url(${Cu_Co_backgroundImg})`,
                        }}
                    >
                        {/* Comment Slider Section */}
                        <div className="w-11/12 overflow-hidden absolute top-1/3 left-10" {...handlers}>
                            <div
                                className="flex transition-transform duration-500 gap-6"
                                style={{
                                    transform: `translateX(-${
                                        currentIndex * 76
                                    }%)`,
                                }}
                            >
                                {comments.map((comment, index) => (
                                    <div
                                        key={index}
                                        className=" w-[70vw] md:w-[60vw]  bg-[#eff3dd] p-6 rounded-2xl shadow-md flex-shrink-0"
                                    >
                                        {/* Quote Icon */}
                                        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 block">
                                            &ldquo;
                                        </span>

                                        {/* Testimonial Text */}
                                        <p className="text-gray-800 text-lg sm:text-2xl leading-relaxed font-poppins mb-8">
                                            {comment.quote}
                                        </p>

                                        {/* User Info */}
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={comment.image}
                                                alt={comment.name}
                                                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-full object-cover"
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
                    </div>


                </div>
            </section>
        </>
    );
};

export default CustomerComment;



                    //     {/* Comment Container */}

                    //     {/* Navigation Buttons */}
                    //     <div className="flex gap-4 mt-16">
                    //         <button
                    //             className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
                    //             onClick={handlePrevClick}
                    //         >
                    //             <ArrowLeft className="w-5 h-5 text-gray-700" />
                    //         </button>
                    //         <button
                    //             className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
                    //             onClick={handleNextClick}
                    //         >
                    //             <ArrowRight className="w-5 h-5 text-gray-700" />
                    //         </button>
                    //     </div>
                    // </div>;