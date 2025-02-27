    <div className="flex lg:hidden relative bg-[#ffefea] h-auto items-center justify-center p-5">
                <div className="  text-center">
                    <h1 className="text-xl text-black font-bold leading-tight font-playfair pt-5">
                        Embark on a Journey with Our <br />
                        <span className="text-[#788247] ">
                            Exclusive Vendors
                        </span>
                    </h1>
                    <p className="text-gray-700 font-poppins text-xs py-5">
                        Explore a range of tailored solutions that elevate your
                        event & celebration to new heights.
                    </p>

                    {/* image slider */}
                    <div className=" flex overflow-hidden w-full h-3/4">
                      
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * 100
                                }%)`,
                            }}
                        >
                            {vendorData.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`relative w-[180px] h-[250px] flex-shrink-0 transition-transform duration-500 ease-in-out ${
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
                                            className={`relative overflow-hidden transition-height duration-500 ease-in-out ${
                                                index === currentIndex
                                                    ? "w-[180px] h-[250px]"
                                                    : "w-[150px] h-[200px]"
                                            }`}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Title */}
                                            <div className="absolute bottom-10 left-6 bg-white bg-opacity-70 p-4 flex items-center w- py- pr-">
                                                <span className="text-gray-700 text-lg font-semibold font-poppins">
                                                    {item.title}
                                                </span>
                                            </div>

                                            {/* Arrow placed outside */}
                                            <div className="absolute bottom-6 left-[calc(6%+60%)] -translate-y-1/2">
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
                    </div>
                </div>
            </div>