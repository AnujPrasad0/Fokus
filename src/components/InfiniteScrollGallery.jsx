// InfiniteScrollGallery.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const InfiniteScrollGallery = ({ images, speed = 20 }) => {
  const trackRef = useRef();
  const tlRef = useRef();

  useEffect(() => {
    const track = trackRef.current;
    // Duplicate the items so the scroll can loop seamlessly
    track.innerHTML += track.innerHTML;

    // Create a looping tween that moves the track by –50% of its width
    tlRef.current = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: speed,
      repeat: -1,
    });

    // Pause on hover, resume on mouse leave
    const pause = () => tlRef.current.pause();
    const resume = () => tlRef.current.resume();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    // Cleanup
    return () => {
      tlRef.current.kill();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, [speed]);

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="flex-none w-32 sm:w-48 md:w-64 lg:w-72 h-auto object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollGallery;
