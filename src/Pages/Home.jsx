import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productcontext } from "../Wrapper";
import InfiniteScrollGallery from "../components/InfiniteScrollGallery";
import nischay1 from "../assets/nischay1.png";
import nischay2 from "../assets/nischay2.png";
import nischay3 from "../assets/nischay3.png";
import nischayfukra from "../assets/nischayfukra.png";
import aman1 from "../assets/aman1.png";
import fukra1 from "../assets/fukra1.png";
import fukra2 from "../assets/fukra2.png";
import fukra3 from "../assets/fukra3.png";
import leaf1 from "../assets/leaf1.png";
import leaf2 from "../assets/leaf2.webp";
import leaf3 from "../assets/leaf3.webp";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const imageUrls = [
    nischay1,
    nischay2,
    nischay3,
    nischayfukra,
    aman1,
    fukra1,
    fukra2,
    fukra3,
    nischay1,
    nischay2,
    nischay3,
    nischayfukra,
    aman1,
    fukra1,
    fukra2,
    fukra3,
  ];

  const product = useContext(productcontext);

  const righttoleft = useRef();
  const lefttoright = useRef();
  const moveBottle = useRef();
  const moveExtra1 = useRef();
  const moveExtra2 = useRef();
  const moveMain = useRef();
  const lf1 = useRef();
  const lf2 = useRef();
  const lf3 = useRef();
  const lf4 = useRef();

  // Arrow Slide
  const [arr1, setarr1] = useState([0, 1, 2]);

  const [val, setval] = useState(0);

  const slides = useRef();

  const leftSlide = () => {
    if (val === 0) {
      return null;
    } else {
      gsap.to(slides.current, {
        x: `-${val * 100 - 100}vw`,
        duration: 1,
      });
      setval(val - 1);

      // Leaves Animation

      gsap.to(lf1.current, {
        scale: `${val == 2 ? 1.2 : 1}`,
        left: `${val == 2 ? "15%" : "-5%"}`,
        rotate: `${val == 2 ? 90 : 60}`,
        duration: 1,
      });

      gsap.to(lf2.current, {
        left: `${val == 2 ? "-5%" : "13%"}`,
        rotate: `${val == 2 ? 10 : -110}`,
        duration: 1,
      });

      gsap.to(lf3.current, {
        right: `${val == 2 ? "-4%" : "20%"}`,
        scale: `${val == 2 ? 1.2 : 1}`,
        rotate: `${val == 2 ? 10 : -140}`,
        duration: 1,
      });

      gsap.to(lf4.current, {
        right: `${val == 2 ? "5%" : "13%"}`,
        rotate: `${val == 2 ? 10 : 0}`,
        scale: `${val == 2 ? 0.8 : 1}`,
        duration: 1,
      });

      // rotate arr1 anti-clockwise
      let copy = [...arr1];
      let temp = copy[copy.length - 1];
      for (let i = copy.length - 1; i > 0; i--) {
        copy[i] = copy[i - 1];
      }
      copy[0] = temp;
      setarr1([...copy]);
      console.log(copy, "left");

      // Dissappear Appear
      const tl = gsap.timeline();
      tl.to(moveMain.current, {
        opacity: 0,
        duration: 0,
      });
      tl.to(moveMain.current, {
        duration: 1,
      });
      tl.to(moveMain.current, {
        opacity: 1,
        duration: 0,
      });

      const fmtl = gsap.timeline();
      fmtl.to(".fixedMain", {
        opacity: 1,
        duration: 0,
      });
      fmtl.to(".fixedMain", {
        duration: 1,
      });
      fmtl.to(".fixedMain", {
        opacity: 0,
        duration: 0,
      });

      gsap.to;
    }
  };
  const rightSlide = (e) => {
    if (val === 2) {
      return null;
    } else {
      gsap.to(slides.current, {
        x: `-${val * 100 + 100}vw`,

        duration: 1,
      });

      // Leaves Animation

      gsap.to(lf1.current, {
        scale: `${val == 0 ? 1.2 : 1}`,
        left: `${val == 0 ? "15%" : "10%"}`,
        rotate: `${val == 0 ? 90 : 60}`,
        duration: 1,
      });

      gsap.to(lf2.current, {
        left: `${val == 0 ? "-5%" : "20%"}`,
        rotate: `${val == 0 ? 10 : -30}`,
        duration: 1,
      });

      gsap.to(lf3.current, {
        right: `${val == 0 ? "-4%" : "15%"}`,
        scale: `${val == 0 ? 1.2 : 0.9}`,
        rotate: `${val == 0 ? 10 : 10}`,
        duration: 1,
      });

      gsap.to(lf4.current, {
        right: `${val == 0 ? "5%" : "0%"}`,
        rotate: `${val == 0 ? 10 : 50}`,
        scale: `${val == 0 ? 0.8 : 1}`,
        duration: 1,
      });

      setval(val + 1);

      // rotate arr1 clockwise
      let temp = arr1[0];
      for (let i = 0; i < arr1.length - 1; i++) {
        arr1[i] = arr1[i + 1];
      }
      arr1[arr1.length - 1] = temp;
      console.log(arr1, "right");

      // Dissappear Appear
      const tl = gsap.timeline();
      tl.to(moveMain.current, {
        opacity: 0,
        duration: 0,
      });
      tl.to(moveMain.current, {
        duration: 1,
      });
      tl.to(moveMain.current, {
        opacity: 1,
        duration: 0,
      });

      const fmtl = gsap.timeline();
      fmtl.to(".fixedMain", {
        opacity: 1,
        duration: 0,
      });
      fmtl.to(".fixedMain", {
        duration: 1,
      });
      fmtl.to(".fixedMain", {
        opacity: 0,
        duration: 0,
      });
    }
  };

  // animation width dependency
  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (
      screenWidth < 640 &&
      moveMain.current &&
      righttoleft.current &&
      lefttoright.current
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: moveMain.current,
          start: "0 5%",
          end: "350% 0",
          scrub: 1,
        },
      });

      tl.from(moveMain.current, {
        y: "-18.1rem",
        left: "50%",
        ease: "none",
      });

      tl.to(moveMain.current, {
        ease: "none",
        y: "44.1rem",
        left: "50%",
      });

      gsap.from(righttoleft.current, {
        x: "200%",
        duration: 1,
        scrollTrigger: {
          trigger: righttoleft.current,
          scroller: "body",
          start: "top 60%",
          end: "top 30%",
          scrub: 3,
        },
      });

      gsap.from(lefttoright.current, {
        x: "-200%",
        duration: 1,
        scrollTrigger: {
          trigger: lefttoright.current,
          scroller: "body",
          start: "top 60%",
          end: "top 30%",
          scrub: 3,
        },
      });
    } else if (
      screenWidth >= 640 &&
      screenWidth < 768 &&
      righttoleft.current &&
      lefttoright.current &&
      moveMain.current
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: moveMain.current,
          start: "0 5%",
          end: "350% 0",
          scrub: 1,
        },
      });

      tl.from(moveMain.current, {
        y: "-28rem",
        left: "50%",
        ease: "none",
      });

      tl.to(moveMain.current, {
        ease: "none",
        y: "61rem",
        left: "50%",
      });

      gsap.from(righttoleft.current, {
        x: "200%",
        duration: 1,
        scrollTrigger: {
          trigger: righttoleft.current,
          scroller: "body",
          start: "top 60%",
          end: "top 30%",
          scrub: 3,
        },
      });

      gsap.from(lefttoright.current, {
        x: "-200%",
        duration: 1,
        scrollTrigger: {
          trigger: lefttoright.current,
          scroller: "body",
          start: "top 60%",
          end: "top 30%",
          scrub: 3,
        },
      });
    } else if (
      screenWidth >= 768 &&
      screenWidth < 1024 &&
      righttoleft.current &&
      lefttoright.current &&
      moveMain.current
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: moveMain.current,
          start: "0 10%",
          end: "330% 0",
          scrub: 1,
        },
      });

      tl.from(moveMain.current, {
        y: "-35.1rem",
        left: "50%",
        ease: "none",
      });

      tl.to(moveMain.current, {
        ease: "none",
        y: "35.2rem",
        left: "50%",
      });

      gsap.from(righttoleft.current, {
        x: "200%",
        y: "120%",
        rotate: 60,
        duration: 1,
        scrollTrigger: {
          trigger: righttoleft.current,
          scroller: "body",
          start: "top 60%",
          end: "top 30%",
          scrub: 4,
        },
      });
      gsap.from(lefttoright.current, {
        x: "-200%",
        y: "120%",
        rotate: -60,
        duration: 1,
        scrollTrigger: {
          trigger: lefttoright.current,
          scroller: "body",
          start: "top 60%",
          end: "top 30%",
          scrub: 4,
        },
      });
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: moveMain.current,
          start: "0 13%",
          end: "230% 0",
          scrub: 1,
        },
      });

      tl.from(moveMain.current, {
        y: "-36.1rem",
        left: "50%",
        ease: "none",
      });

      tl.to(moveMain.current, {
        ease: "none",
        y: "44.1rem",
        left: "50%",
      });

      gsap.from(righttoleft.current, {
        x: "200%",
        y: "120%",
        rotate: 60,
        duration: 1,
        scrollTrigger: {
          trigger: righttoleft.current,
          scroller: "body",
          start: "top 60%",
          end: "top 30%",
          scrub: 4,
        },
      });
      gsap.from(lefttoright.current, {
        x: "-200%",
        y: "120%",
        rotate: -60,
        duration: 1,
        scrollTrigger: {
          trigger: lefttoright.current,
          scroller: "body",
          start: "top 60%",
          end: "top 30%",
          scrub: 4,
        },
      });
    }
  }, []);

  return (
    <div className="black">
      <div className="relative">
        <div
          ref={moveMain}
          className="absolute z-10 left-[50%] translate-x-[-50%] top-[23rem] sm:top-[37rem] md:top-[46rem] md:left-[10rem] lg:top-[52rem] lg:left-[15rem] sm:scale-[1.6] lg:scale-[2.5]"
        >
          <div ref={moveExtra1} className="z-2 absolute top-4 left-7 w-17">
            <img className="w-full animate-slowspin" src={product[val].extra1} alt="" />
          </div>
          <div ref={moveExtra2} className="z-4 absolute bottom-4 right-7 w-17">
            <img className="w-full animate-slowspin" src={product[val].extra2} alt="" />
          </div>
          <div ref={moveBottle} className="z-3 relative w-47">
            <img src={product[val].bottle} alt="" />
          </div>
        </div>

        {/* leaves */}
        <div className="hidden md:inline-block absolute z-15 w-screen">
          <div
            ref={lf1}
            className="w-30 lg:w-50 absolute top-25 left-[-5%] rotate-60"
          >
            <img src={leaf1} alt="" />
          </div>
          <div
            ref={lf2}
            className="w-30 lg:w-50 absolute top-85 lg:top-100 left-[13%] rotate-250"
          >
            <img src={leaf3} alt="" />
          </div>
          <div
            ref={lf3}
            className="w-30 lg:w-50 absolute top-25 right-[20%] rotate-220"
          >
            <img src={leaf3} alt="" />
          </div>
          <div
            ref={lf4}
            className="w-30 lg:w-50 absolute top-85 lg:top-100 right-[13%]"
          >
            <img src={leaf1} alt="" />
          </div>
        </div>

        {/* left-right arrow */}
        <div
          onClick={leftSlide}
          className="z-5 absolute cursor-pointer top-[9rem] sm:top-[14rem] md:top-[16rem] lg:top-[21rem] left-0 sm:left-[2rem]"
        >
          <LuChevronLeft color="#fff" size={40} />
        </div>
        <div
          onClick={rightSlide}
          className="z-5 absolute cursor-pointer top-[9rem] sm:top-[14rem] md:top-[16rem] lg:top-[21rem] right-0 sm:right-[2rem]"
        >
          <LuChevronRight color="#fff" size={40} />
        </div>

        {/* section-1 */}

        <div ref={slides} className="flex relative">
          <div
            className="min-w-screen flex justify-center items-center relative"
            style={{ backgroundColor: product[0].bg }}
          >
            <div className="text-[5rem]/[0.75] sm:text-[8rem] md:text-[9rem] lg:text-[12rem] flex flex-col items-center roboto font-extrabold text-white mt-30 mb-15 sm:mt-40 sm:mb-25 md:mt-45 md:mb-30 lg:mt-55 lg:mb-40 uppercase">
              {product[0].name.split(" ").map((word, index) => (
                <span key={index}>{word}</span>
              ))}
            </div>
            <div className="fixedMain opacity-0 absolute flex items-center justify-center left-[50%] translate-x-[-50%] top-[57%] translate-y-[-50%] sm:top-[52%] sm:scale-[1.6] lg:scale-[2.5]">
              <div className="z-2 absolute top-4 left-7 w-17">
                <img className="w-full" src={product[0].extra1} alt="" />
              </div>
              <div className="z-4 absolute bottom-4 right-7 w-17">
                <img className="w-full" src={product[0].extra2} alt="" />
              </div>
              <div className="z-3 relative w-47">
                <img src={product[0].bottle} alt="" />
              </div>
            </div>
          </div>

          <div
            className="min-w-screen flex justify-center items-center relative"
            style={{ backgroundColor: product[1].bg }}
          >
            <div className="text-[4rem]/[0.75] sm:text-[6.5rem] md:text-[7rem] lg:text-[11rem] flex flex-col items-center roboto font-extrabold text-white mt-30 mb-15 sm:mt-40 sm:mb-25 md:mt-45 md:mb-30 lg:mt-55 lg:mb-40 uppercase">
              {product[1].name.split(" ").map((word, index) => (
                <span key={index}>{word}</span>
              ))}
            </div>
            <div className="fixedMain opacity-0 absolute flex items-center justify-center left-[50%] translate-x-[-50%] top-[57%] translate-y-[-50%] sm:top-[52%] sm:scale-[1.6] lg:scale-[2.5]">
              <div className="z-2 absolute top-4 left-7 w-17">
                <img className="w-full" src={product[1].extra1} alt="" />
              </div>
              <div className="z-4 absolute bottom-4 right-7 w-17">
                <img className="w-full" src={product[1].extra2} alt="" />
              </div>
              <div className="z-3 relative w-47">
                <img src={product[1].bottle} alt="" />
              </div>
            </div>
          </div>

          <div
            className="min-w-screen flex justify-center items-center relative"
            style={{ backgroundColor: product[2].bg }}
          >
            <div className="text-[3rem]/[0.75] sm:text-[5rem] md:text-[6rem] lg:text-[8.5rem] flex flex-col items-center roboto font-extrabold text-white mt-30 mb-15 sm:mt-40 sm:mb-25 md:mt-45 md:mb-30 lg:mt-55 lg:mb-40 uppercase">
              {product[2].name.split(" ").map((word, index) => (
                <span key={index}>{word}</span>
              ))}
            </div>
            <div className="fixedMain opacity-0 absolute flex items-center justify-center left-[50%] translate-x-[-50%] top-[57%] translate-y-[-50%] sm:top-[52%] sm:scale-[1.6] lg:scale-[2.5]">
              <div className="z-2 absolute top-4 left-7 w-17">
                <img className="w-full" src={product[2].extra1} alt="" />
              </div>
              <div className="z-4 absolute bottom-4 right-7 w-17">
                <img className="w-full" src={product[2].extra2} alt="" />
              </div>
              <div className="z-3 relative w-47">
                <img src={product[2].bottle} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* section-2 */}

        <div className="flex flex-col md:flex-row lg:gap-14 items-center min-w-screen bg-[#3a2511]">
          <div className="flex flex-col items-center justify-end relative min-h-80 sm:min-h-110 min-w-80 lg:min-w-120 lg:max-h-150">
            <div className="w-[11rem] h-[7.5rem] sm:scale-[1.4] lg:scale-[1.8] bg-[#623b16] rounded-[50%] relative bottom-7"></div>
          </div>
          <div className="flex ">
            <div className="roboto flex flex-col flex-1 justify-center lg:justify-between lg:py-15 gap-5 sm:gap-7 px-7 min-h-100 sm:min-h-150">
              <h1 className="text-white text-5xl sm:text-7xl lg:text-8xl font-bold">
                FOKUS
              </h1>
              <p className="text-white text-sm sm:text-lg lg:text-2xl overflow-y-scroll md:h-70">
                {product[val].desc}
              </p>
              <button
                className={
                  "rounded-4xl py-2 px-5 w-50 text-white text-2xl font-semibold sm:text-4xl sm:w-70 sm:py-4 hover:scale-[0.9] cursor-pointer"
                }
                style={{ backgroundColor: product[val].bg }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* section-3 */}

        <div className="flex flex-col bg-[#3a2511] items-center gap-30 justify-between py-25 sm:gap-50 md:flex-row md:gap-5 md:px-5 md:pt-50 lg:px-15 lg:pt-65">
          <div
            className={
              "flex flex-col justify-end items-center relative gap-5 min-h-50 py-10 px-5 rounded-2xl h-[20rem] sm:h-[30rem] min-w-[15rem] w-[75%] max-w-[20rem] sm:max-w-[27rem] md:w-[30%] md:min-w-[12rem] lg:h-[35rem] order-1 md:order-2"
            }
            style={{ backgroundColor: product[arr1[0]].bg }}
          >
            <h1 className="text-white text-center text-2xl sm:text-4xl roboto font-bold uppercase md:text-[200%]">
              {product[arr1[0]].name}
            </h1>
            <button
              className={
                "bg-[#fff] rounded-4xl py-2 px-5 w-50 text-2xl font-semibold sm:text-4xl sm:w-70 sm:py-4 md:scale-[0.75] hover:scale-[0.7] cursor-pointer"
              }
              style={{ color: product[arr1[0]].bg }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className={
              "flex flex-col justify-end items-center relative gap-5 min-h-50 py-10 px-5 rounded-2xl h-[20rem] sm:h-[30rem] min-w-[15rem] w-[75%] max-w-[20rem] sm:max-w-[27rem] md:w-[30%] md:min-w-[12rem] lg:h-[35rem] order-2 md:order-3"
            }
            style={{ backgroundColor: product[arr1[1]].bg }}
          >
            <div
              ref={righttoleft}
              className="absolute z-10 left-[50%] translate-x-[-50%] -top-[2.9rem] sm:-top-[1rem] lg:-top-[0] sm:scale-[1.6] lg:scale-[2.5]"
            >
              <div className="z-2 absolute top-4 left-7 w-17">
                <img className="w-full animate-wiggle" src={product[arr1[1]].extra1} alt="" />
              </div>
              <div className="z-4 absolute bottom-4 right-7 w-17">
                <img className="w-full animate-wiggle" src={product[arr1[1]].extra2} alt="" />
              </div>
              <div className="z-3 relative w-47">
                <img src={product[arr1[1]].bottle} alt="" />
              </div>
            </div>
            <h1 className="text-white text-center text-2xl sm:text-4xl roboto font-bold uppercase md:text-[200%]">
              {product[arr1[1]].name}
            </h1>
            <button
              className={
                "bg-[#fff] rounded-4xl py-2 px-5 w-50 text-2xl font-semibold sm:text-4xl sm:w-70 sm:py-4 md:scale-[0.75] hover:scale-[0.7] cursor-pointer"
              }
              style={{ color: product[arr1[1]].bg }}
            >
              Add to Cart
            </button>
          </div>
          <div
            className={
              "flex flex-col justify-end items-center relative gap-5 min-h-50 py-10 px-5 rounded-2xl h-[20rem] sm:h-[30rem] min-w-[15rem] w-[75%] max-w-[20rem] sm:max-w-[27rem] md:w-[30%] md:min-w-[12rem] lg:h-[35rem] order-3 md:order-1"
            }
            style={{ backgroundColor: product[arr1[2]].bg }}
          >
            <div
              ref={lefttoright}
              className="absolute z-10 left-[50%] translate-x-[-50%] -top-[2.9rem] sm:-top-[1rem] lg:-top-[0] sm:scale-[1.6] lg:scale-[2.5]"
            >
              <div className="z-2 absolute top-4 left-7 w-17">
                <img
                  className="w-full animate-wiggle"
                  src={product[arr1[2]].extra1}
                  alt=""
                />
              </div>
              <div className="z-4 absolute bottom-4 right-7 w-17">
                <img
                  className="w-full animate-wiggle"
                  src={product[arr1[2]].extra2}
                  alt=""
                />
              </div>
              <div className="z-3 relative w-47">
                <img src={product[arr1[2]].bottle} alt="" />
              </div>
            </div>
            <h1 className="text-white text-center text-2xl sm:text-4xl roboto font-bold uppercase md:text-[200%]">
              {product[arr1[2]].name}
            </h1>
            <button
              className={
                "bg-[#fff] rounded-4xl py-2 px-5 w-50 text-2xl font-semibold sm:text-4xl sm:w-70 sm:py-4 md:scale-[0.75] hover:scale-[0.7] cursor-pointer"
              }
              style={{ color: product[arr1[2]].bg }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="p-8 bg-[#FFF]">
        <InfiniteScrollGallery images={imageUrls} speed={10} />
      </div>
    </div>
  );
};

export default Home;
