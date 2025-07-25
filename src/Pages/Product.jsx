import about from "../assets/about.png";
import packof3 from "../assets/packof3.png";
import noaddedsugar from "../assets/noaddedsugar.png";
import madeinindia from "../assets/madeinindia.png";
import fightofffatique from "../assets/fightofffatique.png";
import coconutwater from "../assets/coconutwater.png";
import { useContext, useState } from "react";
import { productcontext } from "../Wrapper";
import InfiniteScrollGallery from "../components/InfiniteScrollGallery";

const Product = () => {
  const imageUrls = [noaddedsugar, madeinindia, fightofffatique, coconutwater];

  const ExpandableText = ({ text, maxLength = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => setIsExpanded(!isExpanded);

    return (
      <div>
        <p className="text-lg sm:text-xl md:text-[clamp(1rem,3vw,5rem)] lg:text-2xl">
          {isExpanded ? text : `${text.slice(0, maxLength)}...`}
          <span
            className="text-blue-700 cursor-pointer ml-5"
            onClick={toggleText}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </span>
        </p>
      </div>
    );
  };

  const product = useContext(productcontext);

  return (
    <div className="">
      <div className="bg-linear-90 from-[#5fc52e] to-[#6eee87] min-w-screen px-5 md:px-15 lg:px-25 pt-20">
        <div className="flex flex-col sm:flex-row lg:justify-center gap-5 py-10 min-w-[100%]">
          <div className="lg:min-w-[30rem] lg:max-w-[30rem]">
            <div className="relative border-3 rounded-2xl overflow-hidden flex">
              <div className="min-w-full relative ">
                <img src={packof3} alt="" />
              </div>
            </div>
          </div>
          <div className="roboto flex flex-col gap-3 lg:gap-10 min-w-[50%] lg:max-w-[30rem] lg:min-w-[30rem]">
            <h1 className="font-bold text-2xl sm:text-4xl md:text-[clamp(1rem,5vw,5rem)] lg:text-5xl">
              Fokus Hydration Pack of 3
            </h1>
            <h1 className="text-2xl sm:text-4xl md:text-[clamp(1rem,5vw,5rem) lg:text-5xl]">
              Rs. 450
            </h1>
            <ExpandableText text="From mellow mornings to late-night reflections, the Fokus drink lineup captures three distinct moods in one stylish collection. Each sip delivers a unique rhythm—whether it’s the energizing burst of citrus and ginger in Fokus Rise, the velvety comfort of spiced cocoa in Fokus Drift, or the clean calm of mint-infused green tea in Fokus Clarity. Crafted to match the flow of your day, these drinks aren’t just beverages—they’re a vibe in a bottle."></ExpandableText>
            <button className="rounded-full border-2 bg-white w-full text-xl py-1 lg:text-3xl hover:scale-[0.9] cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:justify-center gap-5 py-10 min-w-[100%]">
          <div className="lg:min-w-[30rem] max-w-[30rem]">
            <div
              className="relative border-3 rounded-2xl overflow-hidden flex"
              style={{ backgroundColor: product[0].bg }}
            >
              <div className="relative flex items-center justify-center">
                <div className="z-2 absolute top-4 left-15 w-[30%]">
                  <img
                    className="w-full animate-wiggle"
                    src={product[0].extra1}
                    alt=""
                  />
                </div>
                <div className="z-4 absolute bottom-4 right-15 w-[30%]">
                  <img
                    className="w-full animate-wiggle"
                    src={product[0].extra2}
                    alt=""
                  />
                </div>
                <div className="z-3 relative w-full">
                  <img src={product[0].bottle} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="roboto flex flex-col gap-3 lg:gap-10 min-w-[50%] sm:max-w-[50%] lg:max-w-[30rem] lg:min-w-[30rem]">
            <h1 className="font-bold text-2xl sm:text-4xl md:text-[clamp(1rem,5vw,5rem)] lg:text-5xl">
              Fokus - {product[0].name} Flavour
            </h1>
            <h1 className="text-2xl sm:text-4xl md:text-[clamp(1rem,5vw,5rem) lg:text-5xl]">
              Rs. 150
            </h1>
            <ExpandableText text={product[0].desc}></ExpandableText>
            <button className="rounded-full border-2 bg-white w-full text-xl py-1 lg:text-3xl hover:scale-[0.9] cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:justify-center gap-5 py-10 min-w-[100%]">
          <div className="lg:min-w-[30rem] max-w-[30rem]">
            <div
              className="relative border-3 rounded-2xl overflow-hidden flex"
              style={{ backgroundColor: product[1].bg }}
            >
              <div className="relative flex items-center justify-center">
                <div className="z-2 absolute top-4 left-15 w-[30%]">
                  <img
                    className="w-full animate-wiggle"
                    src={product[1].extra1}
                    alt=""
                  />
                </div>
                <div className="z-4 absolute bottom-4 right-15 w-[30%]">
                  <img
                    className="w-full animate-wiggle"
                    src={product[1].extra2}
                    alt=""
                  />
                </div>
                <div className="z-3 relative w-full">
                  <img src={product[1].bottle} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="roboto flex flex-col gap-3 lg:gap-10 min-w-[50%] sm:max-w-[50%] lg:max-w-[30rem] lg:min-w-[30rem]">
            <h1 className="font-bold text-2xl sm:text-4xl md:text-[clamp(1rem,5vw,5rem)] lg:text-5xl">
              Fokus - {product[1].name} Flavour
            </h1>
            <h1 className="text-2xl sm:text-4xl md:text-[clamp(1rem,5vw,5rem) lg:text-5xl]">
              Rs. 150
            </h1>
            <ExpandableText text={product[1].desc}></ExpandableText>
            <button className="rounded-full border-2 bg-white w-full text-xl py-1 lg:text-3xl hover:scale-[0.9] cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:justify-center gap-5 py-10 min-w-[100%]">
          <div className="lg:min-w-[30rem] max-w-[30rem]">
            <div
              className="relative border-3 rounded-2xl overflow-hidden flex"
              style={{ backgroundColor: product[2].bg }}
            >
              <div className="relative flex items-center justify-center">
                <div className="z-2 absolute top-4 left-15 w-[30%]">
                  <img
                    className="w-full animate-wiggle"
                    src={product[2].extra1}
                    alt=""
                  />
                </div>
                <div className="z-4 absolute bottom-4 right-15 w-[30%]">
                  <img
                    className="w-full animate-wiggle"
                    src={product[2].extra2}
                    alt=""
                  />
                </div>
                <div className="z-3 relative w-full">
                  <img src={product[2].bottle} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="roboto flex flex-col gap-3 lg:gap-10 min-w-[50%] sm:max-w-[50%] lg:max-w-[30rem] lg:min-w-[30rem]">
            <h1 className="font-bold text-2xl sm:text-4xl md:text-[clamp(1rem,5vw,5rem)] lg:text-5xl">
              Fokus - {product[2].name} Flavour
            </h1>
            <h1 className="text-2xl sm:text-4xl md:text-[clamp(1rem,5vw,5rem) lg:text-5xl]">
              Rs. 150
            </h1>
            <ExpandableText text={product[2].desc}></ExpandableText>
            <button className="rounded-full border-2 bg-white w-full text-xl py-1 lg:text-3xl hover:scale-[0.9] cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="p-8 bg-[#FFF]">
        <InfiniteScrollGallery images={imageUrls} speed={10} />
      </div>
      <div className="w-full">
        <img src={about} alt="" />
      </div>
    </div>
  );
};

export default Product;
