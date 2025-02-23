
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { comments } from "./CustomerData";


// const CustomerComment = () => {
//   return (
//       <section className="min-h-screen flex flex-col items-center justify-center bg-[#fdfafa]">
//           <div className="relative ">
//               {/* Heading */}
//               <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900">
//                   What Our <span className="text-[#788247]">Customers</span> Say
//                   About Us
//               </h2>

//               {/* Testimonials Container */}
//               <div className="flex justify-center mt-8 gap-6 px-4 ">
//                   {comments.map((comment, index) => (
//                       <div
//                           key={index}
//                           className="bg-[#eff3dd] p-6 rounded-lg shadow-md max-w-lg "
//                       >
//                           {/* Quote Icon */}
//                           <span className="text-3xl font-bold text-gray-800">
//                               “
//                           </span>

//                           {/* Testimonial Text */}
//                           <p className="text-gray-700 text-lg">
//                               {comment.quote}
//                           </p>

//                           {/* User Info */}
//                           <div className="mt-4 flex items-center gap-3">
//                               <img
//                                   src={comment.image}
//                                   alt={comment.name}
//                                   className="w-12 h-12 rounded-full object-cover"
//                               />
//                               <div>
//                                   <p className="font-bold text-gray-900">
//                                       {comment.name}
//                                   </p>
//                                   <p className="text-sm text-gray-600">
//                                       {comment.role}
//                                   </p>
//                               </div>
//                           </div>
//                       </div>
//                   ))}
//               </div>

//               {/* Navigation Buttons */}
//               <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex gap-4">
//                   <button className="p-2 bg-white shadow-lg rounded-full text-gray-700 hover:bg-gray-200">
//                       <ArrowLeft />
//                   </button>
//                   <button className="p-2 bg-white shadow-lg rounded-full text-gray-700 hover:bg-gray-200">
//                       <ArrowRight />
//                   </button>
//               </div>
//           </div>
//       </section>
//   );
// };


// export default CustomerComment;


import { ArrowLeft, ArrowRight } from "lucide-react";
import { comments } from "./CustomerData";

const CustomerComment = () => {
    return (
        <section className="min-h-screen bg-[#fdfafa] py-20">
            {/* Main Container */}
            <div className="container mx-auto px-4">
                {/* Top Section with Image and Heading */}
                <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
                    {/* Left Image Section */}
                    <div className="lg:w-1/2 relative">
                        <img
                            src="/path-to-your-image.jpg" // Replace with your actual image path
                            alt="Event celebration"
                            className="w-full h-[400px] object-cover rounded-lg"
                        />
                        {/* Navigation Buttons */}
                        <div className="absolute left-0 bottom-8 flex gap-2 ml-8">
                            <button className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
                                <ArrowLeft className="w-5 h-5 text-gray-700" />
                            </button>
                            <button className="p-3 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
                                <ArrowRight className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>
                    </div>

                    {/* Right Heading Section */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                            What Our{" "}
                            <span className="text-[#788247]">Customers</span>{" "}
                            Say
                            <br /> About Us
                        </h2>
                    </div>
                </div>

                {/* Testimonials Container */}
                <div className="flex flex-col lg:flex-row gap-6 overflow-x-auto">
                    {comments.map((comment, index) => (
                        <div
                            key={index}
                            className="bg-[#eff3dd] p-8 rounded-2xl shadow-md lg:w-1/2 flex-shrink-0"
                        >
                            {/* Quote Icon */}
                            <span className="text-4xl font-bold text-gray-800 block mb-4">
                                &quot;
                            </span>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 text-lg mb-8">
                                {comment.quote}
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={comment.image}
                                    alt={comment.name}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">
                                        {comment.name}
                                    </p>
                                    <p className="text-gray-600">
                                        {comment.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerComment;