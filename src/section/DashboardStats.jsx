
import { DashImg1, DashImg2 } from "../assets/images";
import {Monitor, Download, Store, ArrowRight } from "lucide-react"; //Monitor, Download
// import { BrowserIcon, MobileDownloadIcon } from "../assets/svg/index.jsx";

const DashboardStats = () => {
    return (
        <section className="bg-white lg:h-screen flex items-center justify-center">
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden  lg:min-h-[800px] ">
                    {/* Stats Section */}
                    <div className="bg-[#fff8ba] p-16 flex flex-col justify-between items-center space-y-8">
                        {/* Site Visits */}
                        <div className="flex items-center gap-4 text-black">
                            <Monitor className="w-8 h-8 " />
                            <div>
                                <span className="text-6xl font-bold">
                                    200 +
                                </span>
                                <p className="text-2xl font-medium">
                                    Site Visits
                                </p>
                            </div>
                        </div>

                        {/* Curated Vendors */}
                        <div className="flex items-center gap-4 text-black">
                            <Store className="w-8 h-8 " />
                            <div>
                                <span className="text-6xl font-bold">
                                    165 +
                                </span>
                                <p className="text-2xl font-medium">
                                    Curated Vendors
                                </p>
                            </div>
                        </div>

                        {/* App Downloads */}
                        <div className="flex items-center gap-4 text-black">
                            <Download className="w-8 h-8 " />
                            <div>
                                <span className="text-6xl font-bold">
                                    100 +
                                </span>
                                <p className="text-2xl font-medium">
                                    App Downloads
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Recently Signed-Up Vendor */}
                    <div className="bg-[#e5ebff] p-8 flex flex-col items-center">
                        <h2 className="text-2xl font-semibold p-6 my-6 text-black">
                            Recently Signed-Up Vendor
                        </h2>
                        <img
                            src={DashImg1}
                            alt="Vendor"
                            className="w-full h-80 object-cover rounded-lg mb-10"
                        />
                        <h3 className="text-3xl font-bold mb-3 mt-6 text-black">
                            Neeraj
                        </h3>
                        <p className="text-2xl mt-3 font-semibold text-black leading-relaxed">Photography</p>
                        <p className="text-gray-600 text-2xl font-semibold leading-relaxed mb-6">Candid Photography</p>
                        <button className="flex items-center justify-center gap-2 bg-[#11235a] text-white px-6 py-3 w-52 rounded-lg  hover:bg-blue-900 transition">
                            View Profile
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Recently Created Invite */}
                    <div className="bg-[#ffefea] p-8 flex flex-col items-center text-black">
                        <h2 className="text-2xl font-semibold p-6 my-6">
                            Recently Created Invite
                        </h2>
                        <img
                            src={DashImg2}
                            alt="Invite"
                            className="w-full lg:h-80 object-cover rounded-lg mb-10"
                        />
                        <h3 className="lg:text-4xl font-medium mt-6 leading-normal text-center">
                            “Avinash <br /> Weds <br /> Anusha”
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardStats;