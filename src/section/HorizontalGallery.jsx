
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
];

const HorizontalScrollGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    gsap.to(el, {
      x: "-100%", 
      duration: 10, 
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold mb-6">
        Share your happy moments with <span className="text-blue-600">#Mygalaevents</span>
      </h2>

      <div className="flex w-full overflow-hidden">
        <div ref={galleryRef} className="flex gap-4 min-w-max">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`gallery-${index}`}
              className="object-cover rounded-lg shadow-md border border-gray-200"
              style={{
                width: `${150 + Math.random() * 150}px`, 
                height: `${200 + Math.random() * 200}px`
              }}
            />
          ))}
          {images.map((src, index) => ( // Duplicate images for smooth infinite scrolling
            <img
              key={`dup-${index}`}
              src={src}
              alt={`gallery-${index}`}
              className="object-cover rounded-lg shadow-md border border-gray-200"
              style={{
                width: `${150 + Math.random() * 150}px`, 
                height: `${200 + Math.random() * 200}px`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollGallery;
