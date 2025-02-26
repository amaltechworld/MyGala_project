

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { comments } from "./CustomerData";
import { Cu_Co_backgroundImg } from "../../assets/images/index";

const CustomerComment = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);

    //Arrow button 
    const handleNextClick = () => {
        setCurrentIndex(
            (prevIndex) => Math.min(prevIndex + 1, comments.length - 1) // Stop at last card
        );
    };

    const handlePrevClick = () => {
        setCurrentIndex(
            (prevIndex) => Math.max(prevIndex - 1, 0) // Stop at first card
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
            const vw = window.innerWidth;
            const isSmallScreen = vw < 1024; // lg breakpoint
          
            const calculatedWidth = isSmallScreen ? 0.8 * vw : 0.45 * vw; 
            setCardWidth(calculatedWidth);
        };

        updateCardWidth();
        window.addEventListener("resize", updateCardWidth);

        return () => {
            window.removeEventListener("resize", updateCardWidth);
        };
    }, []);


    const gapWidth = 24; //gap-6

    return (
        <>
            {/* Desktop View */}
            <div className="hidden lg:flex min-h-screen flex-row justify-between bg-[#fdfafa] py-20">
                <div className=" flex justify-start gap-8 ">
                    {/* Left Image Section */}
                    <div className=" relative">
                        <div
                            className="w-[50vw] h-[80vh] bg-cover bg-center rounded"
                            style={{
                                backgroundImage: `url(${Cu_Co_backgroundImg})`,
                            }}
                        ></div>
                        {/* comment slider */}
                        <div className="absolute top-1/3 left-1/3 w-[82vw] h-full p-10 overflow-x-auto hide-scrollbar">
                            <div
                                className="grid grid-flow-col w-[40vw] auto-cols-[90%] min-h-[600px]  transition-transform duration-500 "
                                style={{
                                    gridTemplateColumns: `repeat(${comments.length}, ${cardWidth}px)`,
                                    transform: `translateX(-${
                                        currentIndex * cardWidth
                                    }px)`,
                                }}
                            >
                                {comments.map((comment, index) => (
                                    <div
                                        key={index}
                                        className=" max-w-[37vw] max-h-[60vh] bg-[#eff3dd] p-6 flex-shrink-0 border-[25px] border-[#fdfafa] rounded-none relative snap-center"
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
                        <div className="absolute left-0 -bottom-10 flex gap-2 ml-8">
                            <button
                                className="p-3 bg-[#f1f1f1] rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
                                onClick={handlePrevClick}
                            >
                                <ArrowLeft className="w-5 h-5 text-gray-700" />
                            </button>
                            <button
                                className="p-3 bg-[#f1f1f1] rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
                                onClick={handleNextClick}
                            >
                                <ArrowRight className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>
                    </div>
                    {/* right portion -heading */}
                    <div className=" h-full ">
                        <h2 className="text-5xl lg:text-5xl font-playfair font-bold text-gray-900 pt-10">
                            What Our{" "}
                            <span className="text-[#788247]">Customers</span>{" "}
                            Say
                            <br /> About Us
                        </h2>
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
                        text-black text-xl sm:text-4xl  font-bold font-playfair text-center px-4 py-2 mb-4 sm:mb-6 rounded-lg"
                    >
                        What Our{" "}
                        <span className="text-[#788247]">Customers</span> Say
                        About Us
                    </h2>
                    {/* Top Section with Background Image and Heading md:h-[500px]*/}
                    <div
                        className="relative w-full h-[50vh] bg-cover bg-center rounded-md"
                        style={{
                            backgroundImage: `url(${Cu_Co_backgroundImg})`,
                        }}
                    >
                        {/* Comment Slider Section */}
                        <div
                            className="w-full overflow-x-hidden absolute top-1/3 sm:top-2/3 left-0 px-4 pb-10"
                            {...handlers}
                        >
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
                                        className="bg-[#eff3dd] p-6 rounded-2xl shadow-md relative max-w-[90vw] min-h-[30vh] max-h-[44vh] snap-center"
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


