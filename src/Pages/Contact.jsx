// ContactUs.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const lettersRef = useRef([]);
  const formFieldsRef = useRef([]);
  const infoItemsRef = useRef([]);
  const waveRef = useRef();

  // reset on each render
  lettersRef.current = [];
  formFieldsRef.current = [];
  infoItemsRef.current = [];

  const addToLetters = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };
  const addToForm = (el) => {
    if (el && !formFieldsRef.current.includes(el)) {
      formFieldsRef.current.push(el);
    }
  };
  const addToInfo = (el) => {
    if (el && !infoItemsRef.current.includes(el)) {
      infoItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    // 1) Heading: pop letters
    gsap.from(lettersRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "back.out(1.7)",
      duration: 0.8,
    });

    // 2) Form fields: fade in on scroll
    gsap.from(formFieldsRef.current, {
      scrollTrigger: {
        trigger: formFieldsRef.current[0],
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      ease: "power2.out",
      duration: 0.7,
    });

    // 3) Info items: slide in on scroll
    gsap.from(infoItemsRef.current, {
      scrollTrigger: {
        trigger: infoItemsRef.current[0],
        start: "top 85%",
      },
      opacity: 0,
      x: -40,
      stagger: 0.2,
      ease: "power2.out",
      duration: 0.7,
    });

    // 4) Infinite wave
    gsap.to(waveRef.current, {
      x: "-50%",
      ease: "none",
      duration: 12,
      repeat: -1,
    });
  }, []);

  const title = "Get in Touch";

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center justify-center overflow-hidden pt-30">
      {/* Blurred Radial Blob */}
      <div
        className="absolute top-[-20%] right-[-20%] w-[60vw] h-[60vw] filter blur-[200px] z-[-1]"
        style={{
          background: "radial-gradient(circle at 30% 30%, #ffedd5, #fcd34d)",
          transform: "rotate(30deg)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-20 py-20 flex flex-col lg:flex-row gap-16 z-10">
        {/* Left: Animated Heading & Form */}
        <div className="flex-1">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-8 text-white flex flex-wrap">
            {title.split("").map((char, i) => (
              <span key={i} ref={addToLetters} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <form className="space-y-6">
            {[
              { id: "name", label: "Your Name", type: "text" },
              { id: "email", label: "Email Address", type: "email" },
              { id: "message", label: "Your Message", type: "textarea" },
            ].map(({ id, label, type }) => (
              <div key={id} ref={addToForm} className="relative">
                <label
                  htmlFor={id}
                  className="block mb-2 text-white font-medium"
                >
                  {label}
                </label>
                {type === "textarea" ? (
                  <textarea
                    id={id}
                    rows={4}
                    className="w-full p-4 border rounded-xl placeholder:text-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    placeholder={label}
                  />
                ) : (
                  <input
                    id={id}
                    type={type}
                    className="w-full p-4 border rounded-xl placeholder:text-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    placeholder={label}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="mt-2 px-8 py-3 bg-yellow-400 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex-1 space-y-8 text-white text-lg">
          <div ref={addToInfo} className="flex items-center gap-4">
            <FiMapPin className="text-2xl text-yellow-500" />
            <span>
              4004, 4th floor, DLF PHASE 4, DLF QE, Gurgaon, Dlf Qe, Haryana,
              India, 122002
            </span>
          </div>
          <div ref={addToInfo} className="flex items-center gap-4">
            <FiPhone className="text-2xl text-yellow-500" />
            <span>+91 93198 64109</span>
          </div>
          <div ref={addToInfo} className="flex items-center gap-4">
            <FiMail className="text-2xl text-yellow-500" />
            <span>care@fokus.shop</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
