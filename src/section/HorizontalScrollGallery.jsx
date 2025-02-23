
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { H_GalleryImg1, H_GalleryImg2, H_GalleryImg3, H_GalleryImg4, H_GalleryImg5, H_GalleryImg6, H_GalleryImg7, H_GalleryImg8, H_GalleryImg9, H_GalleryImg10, H_GalleryImg11, H_GalleryImg12, H_GalleryImg13, H_GalleryImg14, H_GalleryImg15 } from "../assets/images/index";

// const images = [
//  H_GalleryImg1,
//  H_GalleryImg2,
//  H_GalleryImg3,
//  H_GalleryImg4,
//  H_GalleryImg5,
//  H_GalleryImg6,
//  H_GalleryImg7,
//  H_GalleryImg8,
//  H_GalleryImg9,
//  H_GalleryImg10,
//  H_GalleryImg11,
//  H_GalleryImg12,
//  H_GalleryImg13,
//  H_GalleryImg14,
//  H_GalleryImg15
// ];

// const HorizontalScrollGallery = () => {
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     const el = galleryRef.current;
//     if (!el) return;

//     gsap.to(el, {
//         xPercent: -100,
//         duration: 60,
//         repeat: -1,
//         ease: "none",
//         modifiers: {
//             xPercent: gsap.utils.unitize((value) => parseFloat(value) % 100), // Continuous scroll
//         },
//     });
//   }, []);

//   return (
//       <div className="relative  bg-gray-100 py-10 h-screen flex flex-col justify-center">
//           <h2 className="text-center text-2xl font-bold mb-6">
//               Share your happy moments with{" "}
//               <span className="text-blue-600">#Mygalaevents</span>
//           </h2>

//           <div className="flex w-full overflow-hidden ">
//               <div ref={galleryRef} className="flex gap-4 min-w-max relative">
//                   {images.map((src, index) => (
//                       <img
//                           key={index}
//                           src={src}
//                           alt={`gallery-${index}`}
//                           className="object-cover rounded-lg shadow-md border border-gray-200 absolute"
//                           style={{
//                               width: `${150 + Math.random() * 150}px`,
//                               height: `${200 + Math.random() * 200}px`,
                              
//                               top: `${Math.random() * 80}vh`,
//                               left: `${index * 200}px`,
//                           }}
//                       />
//                   ))}
//                   {images.map(
//                       (
//                           src,
//                           index // Duplicate images for smooth infinite scrolling
//                       ) => (
//                           <img
//                               key={`dup-${index}`}
//                               src={src}
//                               alt={`gallery-${index}`}
//                               className="object-cover rounded-lg shadow-md border border-gray-200"
//                               style={{
//                                   width: `${150 + Math.random() * 150}px`,
//                                   height: `${200 + Math.random() * 200}px`,
//                                   top: `${Math.random() * 80}vh`,
//                                   left: `${(images.length + index) * 200}px`,
//                               }}
//                           />
//                       )
//                   )}
//               </div>
//           </div>
//       </div>
//   );
// };

// export default HorizontalScrollGallery;


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
    H_GalleryImg1,
    H_GalleryImg2,
    H_GalleryImg3,
    H_GalleryImg4,
    H_GalleryImg5,
    H_GalleryImg6,
    H_GalleryImg7,
    H_GalleryImg8,
    H_GalleryImg9,
    H_GalleryImg10,
    H_GalleryImg11,
    H_GalleryImg12,
    H_GalleryImg13,
    H_GalleryImg14,
    H_GalleryImg15,
} from "../assets/images/index";

const images = [
    H_GalleryImg1,
    H_GalleryImg2,
    H_GalleryImg3,
    H_GalleryImg4,
    H_GalleryImg5,
    H_GalleryImg6,
    H_GalleryImg7,
    H_GalleryImg8,
    H_GalleryImg9,
    H_GalleryImg10,
    H_GalleryImg11,
    H_GalleryImg12,
    H_GalleryImg13,
    H_GalleryImg14,
    H_GalleryImg15,
];

const HorizontalScrollGallery = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const el = galleryRef.current;
        if (!el) return;

        gsap.to(el, {
            x: "-50%", // Move left for infinite effect
            duration: 20, // Adjust speed
            repeat: -1,
            ease: "linear",
        });
    }, []);

    return (
        <div className="relative overflow-hidden bg-[#ebebeb] py-10 h-screen flex flex-col justify-center">
            <h2 className="text-center text-lg md:text-2xl font-bold mb-6">
                Share your happy moments with <br />
                <span className="text-black text-3xl md:text-5xl">
                    #Mygalaevents
                </span>
            </h2>

            <div className="relative w-full h-[600px] overflow-hidden">
                <div
                    ref={galleryRef}
                    className="flex gap-5 w-[300%] absolute "
                    style={{ alignItems: "center", willChange: "transform" }}
                >
                    {[...images, ...images].map((src, index) => {
                        const randomHeight = 200 + Math.random() * 150; // Random height
                        const randomTop =
                            Math.random() * (625 - randomHeight - 50); // Random Y position
                            const gap = 20;

                        return (
                            <div
                                key={index}
                                className="absolute"
                                style={{
                                    top: `${randomTop}px`,
                                    left: `${index * (300 + gap)}px`,
                                    width: "300px",
                                    height: `${randomHeight}px`,
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`gallery-${index}`}
                                    className="object-cover rounded-md shadow-md border  border-white"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HorizontalScrollGallery;

