// UnderConstructionSection.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

const Orders = () => {
  const iconRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Fade in the text from above
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Rock the construction emoji back and forth
    gsap.to(iconRef.current, {
      rotation: 15,
      yoyo: true,
      repeat: -1,
      duration: 0.6,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-linear-90 from-[#432371] to-[#faae7b] px-6 py-12">
      <div
        ref={iconRef}
        className="text-8xl sm:text-9xl mb-6"
        aria-hidden="true"
      >
        🚧
      </div>

      <h1
        ref={textRef}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 text-center"
      >
        This Section Is Under Construction
      </h1>

      <p className="mt-4 text-gray-600 text-center max-w-lg leading-relaxed">
        We’re laying down the foundation and installing the final fixtures. Hang
        tight—you’ll see something awesome here very soon!
      </p>

      <NavLink
        to="/"
        className="mt-8 px-6 py-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        ← Back to Home
      </NavLink>
    </section>
  );
};

export default Orders;
