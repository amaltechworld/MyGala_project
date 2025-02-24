

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { comments } from "./CustomerData";
import { Cu_Co_backgroundImg } from "../../assets/images/index";

const CustomerComment = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);

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
    // mobile swipe
    const handlers = useSwipeable({
        onSwipedLeft: handleNextClick,
        onSwipedRight: handlePrevClick,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    // smooth scrolling as per the screen

    useEffect(() => {
        const updateCardWidth = () => {
            const vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            );
            const isSmallScreen = vw < 768;
            const calculatedWidth = isSmallScreen ? 0.8 * vw : 600;
            setCardWidth(calculatedWidth);
        };

        updateCardWidth();
        window.addEventListener("resize", updateCardWidth);

        return () => {
            window.removeEventListener("resize", updateCardWidth);
        };
    }, []);

    const gapWidth = 24;

    return (
        <>
            {/* Desktop View */}
            <div className="hidden lg:block min-h-screen bg-[#fdfafa] py-20">
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
                                            currentIndex * 820
                                        }px)`,
                                    }}
                                >
                                    {comments.map((comment, index) => (
                                        <div
                                            key={index}
                                            className="w-[800px] bg-[#eff3dd] p-6 flex-shrink-0 border-[25px] border-[#fdfafa] rounded-none relative"
                                        >
                                            {/* Quote Icon */}
                                            <span className="text-4xl lg:text-5xl font-bold text-gray-800 block">
                                                &ldquo;
                                            </span>
                                            {/* paragaraph text */}
                                            <p className="text-gray-800 text-2xl leading-relaxed font-poppins mb-8">
                                                {comment.quote}
                                            </p>
                                            {/* user info */}
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
            </div>

            {/* Mobile View */}
            <div className="block lg:hidden min-h-[75vh] flex-col justify-center  bg-[#fdfafa] pt-10 relative overflow-hidden">
                {/* Main Container */}
                <div className="container mx-auto ">
                    {/* Heading */}
                    <h2
                        className="
                        text-black text-xl sm:text-4xl  font-bold text-center px-4 py-2 mb-4 sm:mb-6 rounded-lg"
                    >
                        What Our{" "}
                        <span className="text-[#788247]">Customers</span> Say
                        About Us
                    </h2>
                    {/* Top Section with Background Image and Heading */}
                    <div
                        className="relative w-full h-[400px] md:h-[500px]  bg-cover bg-center rounded-md"
                        style={{
                            backgroundImage: `url(${Cu_Co_backgroundImg})`,
                        }}
                    >
                        {/* Comment Slider Section */}
                        <div
                            className="w-full overflow-hidden absolute top-1/3 sm:top-2/3 left-0 px-4 pb-10"
                            {...handlers}
                        >
                            {/* auto-cols-[80vw] */}
                            <div
                                className="grid grid-flow-col auto-cols-[min(80vw,600px)] gap-6 transition-transform duration-500 scroll-smooth snap-x snap-madatory"
                                style={{
                                    transform: `translateX(-${
                                        currentIndex * (cardWidth + gapWidth)
                                    }px)`, // Keeps movement flexible
                                }}
                            >
                                {comments.map((comment, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#eff3dd] p-6 rounded-2xl shadow-md relative max-w-[90vw] snap-center"
                                    >
                                        {/* Quote Icon */}
                                        <span className="text-3xl sm:text-4xl font-bold text-gray-800 block">
                                            &ldquo;
                                        </span>

                                        {/* paragraph Text */}
                                        <p className="text-gray-800 text-lg sm:text-xl leading-relaxed font-poppins mb-8">
                                            {comment.quote}
                                        </p>

                                        {/* User Info */}
                                        <div className="flex items-center gap-4 absolute bottom-6 left-6">
                                            <img
                                                src={comment.image}
                                                alt={comment.name}
                                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
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
                                        {/* info end */}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* comment end */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerComment;


