import { Monitor, Store, Download, ArrowRight } from "lucide-react";

const DashboardStats = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 gap-6">
                {/* stats section */}
                <div className="bg-yellow-50 p-8 rounded-2xl space-y-6">
                    <div className="space-y-6">
                        {/* site visits */}
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-black rounded-lg">
                                <Monitor className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-4xl font-bold">200+</span>
                            <p className="text-lg">Site Visits</p>
                        </div>
                    </div>

                    {/* Curated Vendors */}
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-black rounded-lg">
                            <Store className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <span className="text-4xl font-bold">165 +</span>
                            <p className="text-lg">Curated Vendors</p>
                        </div>
                    </div>

                    {/* App Downloads */}
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-black rounded-lg">
                            <Download className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <span className="text-4xl font-bold">100 +</span>
                            <p className="text-lg">App Downloads</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recently singed Vendors */}
            <div className="bg-blue-50 p-8 rounded-2xl flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6">
                    Recently Signed-Up Vendor
                </h2>
                <div className="w-full max-w-sm">
                    <img
                        src=""
                        alt=""
                        className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-2xl font-bold text-center mb-2">
                        Neeraj
                    </h3>
                    <p className="text-xl text-center mb-2">Photography</p>
                    <p className="text-gray-600 text-center mb-6">
                        Candid Photography
                    </p>
                    <button className="flex items-center justify-center gap-2 bg-navy-800 text-white px-6 py-3 rounded-lg w-full hover:bg-navy-900 transition-colors">
                        View Profile
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Recently Created Invite */}
            <div className="bg-red-50 p-8 rounded-2xl flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6">
                    Recently Created Invite
                </h2>
                <div className="w-full max-w-sm">
                    <img
                        src=""
                        alt=""
                        className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-3xl font-bold text-center">
                        ${` "Avinash\nWeds\nAnusha " `}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;
