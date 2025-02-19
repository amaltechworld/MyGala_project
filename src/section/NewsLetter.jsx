
// const Newsletter = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//     return (
//         <section className="py-20 px-4 bg-[#f9f6f6]">
//             <div className="max-w-4xl mx-auto text-center">
//                 {/* Heading */}
//                 <h2 className="md:text-4xl lg:text-5xl text-[#1f1f1f] font-bold mb-6">
//                     Subscribe to Our Newsletter for Event
//                     <br />
//                     Planning Insights
//                 </h2>

//                 {/* Description */}
//                 <p className="text-[#6d6d6d] text-2xl font-medium mb-12">
//                     Be the first to discover trends, inspirations, and special
//                     offers as we bring the world of event planning directly to
//                     your inbox
//                 </p>

//                 {/* Subscription form */}
//                 <form
//                     onSubmit={handleSubmit}
//                     className="flex flex-row gap-4 max-w-3xl mx-auto"
//                 >
//                     <div className="flex-1 relative">
//                         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             >
//                                 <rect
//                                     x="2"
//                                     y="4"
//                                     width="20"
//                                     height="16"
//                                     rx="2"
//                                 />
//                                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                             </svg>
//                         </div>
//                         <input
//                             type="email"
//                             placeholder="Enter your email address"
//                             className="lg:text-xl w-full px-12 py-4 bg-white rounded-lg border focus:outline-none focus:border-blue-500"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="absolute right-0 top-0  bg-[#11235a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2d589e] transition-colors"
//                     >
//                         Subscribe
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default Newsletter; 

import { useState } from "react";
import { Send } from "lucide-react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
      <section className="py-20 px-4 bg-[#f9f6f6]">
        <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h2 className="md:text-4xl lg:text-5xl text-[#1f1f1f] font-bold text-center mb-6">
                Subscribe to Our Newsletter for Event 
                <br />
                Planning Insights
            </h2>

            {/* Description */}
            <p className="text-[#6d6d6d] text-2xl font-medium mb-12 text-center">
                Be the first to discover trends, inspirations, and special
                offers as we bring the world of event planning directly to your
                inbox
            </p>

            {/* Subscription form */}
            <form onSubmit={handleSubmit} className="relative">
                <div className="relative flex items-center">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="lg:text-2xl w-full px-12 py-7 bg-white rounded-lg border focus:outline-none focus:border-blue-500 pr-32"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute right-2 inline-flex items-center text-white px-4 py-3 bg-[#11235a] rounded-md hover:bg-[#2d589e] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <span className="mr-2">Subscribe</span>
                        <Send size={16} />
                    </button>
                </div>
            </form>
        </div>
        </section>
    );
};

export default Newsletter;