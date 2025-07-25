// About.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram } from "react-icons/fa";
import ankit from "../assets/ankit.png";
import mayank from "../assets/mayank.png";
import aman from "../assets/aman.png";
import nischay from "../assets/nischay.png";
import abhishek from "../assets/abhishek.png";
import knowfokus from "../assets/knowfokus.png";
import bottle1cut from "../assets/bottle1cut.png";
import bottle2cut from "../assets/bottle2cut.png";
import bottle3cut from "../assets/bottle3cut.png";
import bigbottle1 from "../assets/bigbottle1.png";
import bigbottle2 from "../assets/bigbottle2.png";
import bigbottle3 from "../assets/bigbottle3.png";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Ankit Madan",
    role: "Founder & CEO",
    img: ankit,
    insta: "https://www.instagram.com/ankitmadaan/",
  },
  {
    name: "Mayank Mishra",
    role: "Founder & COO",
    img: mayank,
    insta: "https://www.instagram.com/mrmayankm/",
  },
  {
    name: "Aman Madaan",
    role: "Co Founder & CFO",
    img: aman,
    insta: "https://www.instagram.com/storyteller.am/#",
  },
  {
    name: "Nischay Malhan",
    role: "Co Founder",
    img: nischay,
    insta: "https://www.instagram.com/triggeredinsaan/#",
  },
  {
    name: "Abhishek Malhan",
    role: "Co Founder",
    img: abhishek,
    insta: "https://www.instagram.com/fukra_insaan/#",
  },
];

const About = () => {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  // refs for each flip-card-inner container
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Hero fade-in
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
    });

    // Values & Team section reveal
    [valuesRef, teamRef].forEach((sectionRef, i) => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: i * 0.2,
        ease: "power2.out",
      });
    });

    // Flip-on-hover tweens
    cardRefs.current.forEach((card) => {
      const tl = gsap.timeline({ paused: true }).to(card, {
        rotationY: 180,
        duration: 0.6,
        ease: "power2.out",
      });

      card.addEventListener("mouseenter", () => tl.play());
      card.addEventListener("mouseleave", () => tl.reverse());
    });

    // Cleanup
    return () => {
      cardRefs.current.forEach((card) => {
        gsap.killTweensOf(card);
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, []);

  return (
    <main className="text-gray-800">

      {/* Hero Section */}
      <section className="relative flex flex-col gap-10 items-center justify-center bg-linear-90 from-[#5fc52e] to-[#6eee87] px-6 pb-10 pt-24 lg:pb-20 lg:pt-35 text-center">
        <div className="w-60 md:w-160">
          <img src={knowfokus} alt="Know Fokus" />
        </div>
        <p className="max-w-5xl text-lg sm:text-xl lg:text-3xl leading-relaxed">
          <span className="font-bold">We’re more than just a brand —</span>{" "}
          we’re a vibrant community driven by passion, purpose, and a shared
          vision for a better lifestyle. Brought to you by your favorite content
          creators, Abhishek Malhan and Nischay Malhan, along with digital age
          entrepreneurs, Mayank Mishra and Ankit Madaan, Aman Madaan we fokus on
          creating drinks that not only refresh but also empower.
        </p>
        <p className="max-w-5xl text-lg sm:text-xl lg:text-3xl leading-relaxed">
          <span className="font-bold">Our mission is simple:</span> to deliver
          clean, functional hydration that fits seamlessly into your daily
          routine. Whether you’re chasing fitness goals, building your dream, or
          just living life on your own terms, we’re here to fuel every step of
          your journey. #GetFokus
        </p>
      </section>

      {/* Our Values */}
      <section className="bg-white text-black">
        <div className="flex justify-end bg-[#ff6262] gap-5 md:gap-10 md:px-5">
          <div className="max-w-[80%] md:max-w-[70%] flex flex-col justify-center gap-5  order-1 md:order-1 py-4 px-3 lg:px-25 roboto">
            <h1 className="bg-white px-3 py-2 rounded-xl border-2 font-bold text-[clamp(1rem,5vw,5rem)] md:text-5xl uppercase">
              The secret sauce of fokus
            </h1>
            <div className="flex flex-col">
              <h2 className="uppercase font-bold text-[#dc001d] text-[clamp(1rem,4vw,5rem)] md:text-4xl">
                Vitamin D3
              </h2>
              <p className="text-[clamp(0.6rem,4vw,5rem)] md:text-3xl">
                Tackling India’s vitamin D shortage, one bottle at a time.
                Because let’s face it, we all need a little more sunshine in our
                lives.
              </p>
              <h2 className="uppercase font-bold text-[#dc001d] text-[clamp(1rem,4vw,5rem)] md:text-4xl">
                No Sugar
              </h2>
              <p className="text-[clamp(0.6rem,4vw,5rem)] md:text-3xl">
                Healthy can taste amazing! get all the taste without the added
                sugar, so you can sip guilt-free.
              </p>
              <h2 className="uppercase font-bold text-[#dc001d] text-[clamp(1rem,4vw,5rem)] md:text-4xl">
                Coconut water (22%)
              </h2>
              <p className="text-[clamp(0.6rem,4vw,5rem)] md:text-3xl">
                Because who wouldn’t want a mini beach vacation with every sip?
              </p>
            </div>
          </div>
          <div className="relative min-w-[20%] md:min-w-[30%] order-2 h-full my-auto md:hidden">
            <img src={bottle3cut} alt="" />
          </div>
          <div className="hidden md:flex order-2">
            <img src={bigbottle1} alt="" />
          </div>
        </div>
        <div className="flex justify-end bg-[#f7d23f] gap-5 md:gap-10 md:px-5">
          <div className="max-w-[80%] md:max-w-[70%] flex flex-col justify-center gap-5  order-2 md:order-1 py-4 px-3 lg:px-25 roboto">
            <h1 className="bg-white px-3 py-2 rounded-xl border-2 font-bold text-[clamp(1rem,5vw,5rem)] md:text-5xl">
              COOL LOOK,COOLER CONSCIENCE
            </h1>
            <p className="text-[clamp(0.6rem,4vw,5rem)] md:text-3xl">
              "Our branding isn’t just easy on the eyes—it’s designed to make
              you feel great too. With vibrant colors, bold designs, and all the
              info you need, every bottle of Fokus stands out and tells a story.
              And about that plastic bottle? No worries—it's 100% recyclable.
              So, you can sip guilt-free, knowing we’re doing our part to keep
              the planet as fresh as you feel!
            </p>
          </div>
          <div className="relative min-w-[20%] md:min-w-[30%] order-1 h-full my-auto md:hidden">
            <img src={bottle2cut} alt="" />
          </div>
          <div className="hidden md:flex order-2">
            <img src={bigbottle2} alt="" />
          </div>
        </div>
        <div className="flex justify-end bg-[#7ed957] gap-5 md:gap-10 md:px-5">
          <div className="max-w-[80%] md:max-w-[70%] flex flex-col justify-center gap-5  order-1 md:order-1 py-4 px-3 lg:px-25 roboto">
            <h1 className="bg-white px-3 py-2 rounded-xl border-2 font-bold text-[clamp(1rem,5vw,5rem)] md:text-5xl uppercase">
              The #get fokus revolution
            </h1>
            <p className="text-[clamp(0.6rem,4vw,5rem)] md:text-3xl">
              "With Abhishek and Nischay Malhan leading the charge, we’re not
              just creating a brand—we’re creating a movement. #GetFokus isn’t
              just a hashtag; it’s a tribe. So, join in, talk, share, form Fokus
              groups, and get ready to take over the world—one focused moment at
              a time."
            </p>
          </div>
          <div className="relative min-w-[20%] md:min-w-[30%] order-2 h-full my-auto md:hidden">
            <img src={bottle1cut} alt="" />
          </div>
          <div className="hidden md:flex order-2">
            <img src={bigbottle3} alt="" />
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 px-6 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Meet the Team
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* flip container with perspective */}
              <div style={{ perspective: 800 }} className="mb-4">
                <div
                  ref={addToRefs}
                  className="relative w-32 h-32"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* front face */}
                  <div
                    className="absolute w-full h-full rounded-full overflow-hidden shadow-lg"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* back face */}
                  <div
                    className="absolute w-full h-full rounded-full flex items-center justify-center bg-white shadow-lg"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <a
                      href={member.insta}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram of ${member.name}`}
                      className="text-pink-500 text-3xl"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-medium">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
