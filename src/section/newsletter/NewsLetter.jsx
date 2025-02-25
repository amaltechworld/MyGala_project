


import { useState } from "react";
import { Mail } from "lucide-react";
import NewsIcons from "./NewsIcons";
import { footerData } from "../footer/footerData";


const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section className="py-20 px-4 bg-[#f9f6f6]">
            <div className="max-w-4xl mx-auto ">
                {/* Heading */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#1f1f1f] font-playfair font-bold text-center mb-6 lg:leading-tight hidden md:block">
                    Subscribe to Our Newsletter for Event
                    <br />
                    Planning Insights
                </h2>

                <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#1f1f1f] font-playfair font-bold text-center mb-6 block md:hidden">
                    Subscribe to Our Newsletter
                    <br />
                    for Event Planning Insights
                </h2>

                {/* Description */}
                <p className="text-[#6d6d6d] text-lg md:text-xl lg:text-2xl font-poppins font-medium mb-12 text-center lg:leading-relaxed">
                    Be the first to discover trends, inspirations, and special
                    offers as we bring the world of event planning directly to
                    your inbox
                </p>

                {/* Subscription form */}
                <form onSubmit={handleSubmit} className="relative">
                    <div className="relative flex items-center">
                        <Mail
                            className="absolute left-4 text-gray-400"
                            size={24}
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="md:text-xl lg:text-2xl w-full px-12 py-7 bg-white rounded-lg shadow-md border focus:outline-none focus:border-blue-500 pr-32"
                            required
                        />
                        <button
                            type="submit"
                            className="absolute right-2 inline-flex items-center text-white px-4 py-3 bg-[#11235a] rounded-md hover:bg-[#2d589e] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <span className="mr-2">Subscribe</span>
                            
                        </button>
                    </div>
                </form>
                {/* social Icons and sections */}
                <div className="flex flex-row justify-between p-8 md:p-12">
                    {footerData && footerData.length > 0 ? (
                        footerData.map((section) => (
                            <NewsIcons
                                key={section.title}
                                links={section.links}
                                title={section.title}
                            />
                        ))
                    ) : (
                        <p className="text-white">No data found</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Newsletter;