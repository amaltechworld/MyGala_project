
import { DashImg1, DashImg2 } from "../assets/images";
import {Monitor, Download, Store, ArrowRight } from "lucide-react"; 
// import { BrowserIcon, MobileDownloadIcon } from "../assets/svg/index.jsx";

const DashboardStats = () => {
    return (
        <section className="bg-white lg:h-screen flex items-center justify-center ">
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden  lg:min-h-[800px] ">
                    {/* Stats Section */}
                    <div className="flex flex-row lg:flex-col bg-transparent lg:bg-[#fff8ba] p-0 lg:p-16 justify-between items-stretch space-y-0 lg:space-y-8 order-3 lg:order-1 ">
                        {/* Site Visits */}
                        <div className="flex-1 bg-[#fff8ba] lg:bg-transparent flex flex-col lg:flex-row items-center justify-center gap-4 text-black p-4 lg:p-0">
                            <Monitor className="w-6 h-6 " />
                            <div>
                                <span className="text-xl md:text-4xl lg:text-6xl font-bold">
                                    200 +
                                </span>
                                <p className="text-sm md:text-lg lg:text-2xl font-medium">
                                    Site Visits
                                </p>
                            </div>
                        </div>

                        {/* Curated Vendors */}
                        <div className="flex-1 bg-[#e5ebff] lg:bg-transparent flex flex-col lg:flex-row items-center justify-center gap-4 text-black p-4 lg:p-0">
                            <Store className="w-6 h-6 " />
                            <div>
                                <span className="text-xl md:text-4xl lg:text-6xl font-bold">
                                    165 +
                                </span>
                                <p className="text-sm md:text-lg lg:text-2xl font-medium">
                                    Curated Vendors
                                </p>
                            </div>
                        </div>

                        {/* App Downloads */}
                        <div className="flex-1 bg-[#ffefea] lg:bg-transparent flex flex-col lg:flex-row items-center justify-center gap-4 text-black p-4 lg:p-0">
                            <Download className="w-6 h-6 " />
                            <div>
                                <span className="text-xl md:text-5xl lg:text-6xl font-bold">
                                    100 +
                                </span>
                                <p className="text-sm md:text-lg lg:text-2xl font-medium">
                                    App Downloads
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Recently Signed-Up Vendor */}
                    <div className="bg-[#e5ebff] p-8 flex flex-col items-center order-1 lg:order-2">
                        <h2 className="text-2xl font-semibold p-4 lg:p-6 my-4 lg:my-6 text-black">
                            Recently Signed-Up Vendor
                        </h2>
                        <img
                            src={DashImg1}
                            alt="Vendor"
                            className="w-full h-56 md:h-80 object-cover rounded-lg mb-6 lg:mb-10"
                        />
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 lg:mb-3 mt-4 lg:mt-6 text-black">
                            Neeraj
                        </h3>
                        <p className="text-lg md:text-xl lg:text-2xl lg:mt-3 font-semibold text-black leading-relaxed">
                            Photography
                        </p>
                        <p className="text-gray-600 text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed mb-4 lg:mb-6">
                            Candid Photography
                        </p>
                        <button className="flex items-center justify-center gap-2 bg-[#11235a] text-white px-6 py-3 w-48 lg:w-52 rounded-lg  hover:bg-blue-900 transition">
                            View Profile
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Recently Created Invite */}
                    <div className="bg-[#ffefea] p-8 flex flex-col items-center text-black order-2 lg:order-3">
                        <h2 className="text-2xl font-semibold p-4 lg:p-6 my-4 lg:my-6">
                            Recently Created Invite
                        </h2>
                        <img
                            src={DashImg2}
                            alt="Invite"
                            className="w-full h-56 md:h-80 object-cover rounded-lg mb-6 lg:mb-10"
                        />
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium mt-4 lg:mt-6 leading-normal text-center">
                            “Avinash <br /> Weds <br /> Anusha”
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardStats;

