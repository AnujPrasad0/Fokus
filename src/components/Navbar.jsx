import { HiBars3 } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import bottle1 from "../assets/bottle1.png";
import bottle2 from "../assets/bottle2.png";
import bottle3 from "../assets/bottle3.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";
import { productcontext } from "../Wrapper";

const Navbar = () => {
  const product = useContext(productcontext);

  var tl = gsap.timeline();
  useGSAP(() => {
    tl.to("#bar", {
      left: 0,
      duration: 0.3,
    });

    tl.from(
      "#bar div",
      {
        x: -150,
        stagger: 0.1,
        opacity: 0,
      },
      "same"
    );

    tl.from(
      "#bar .crossbar",
      {
        opacity: 0,
        rotate: -180,
        duration: 0.5,
        delay: 0.2,
      },
      "same"
    );

    tl.pause();
  });

  const sideBar = (e) => {
    tl.play();
  };

  let cartanim;

  useGSAP(() => {
    cartanim = gsap.to("#cart", {
      x: "-50rem",
      duration: 0.5,
    });
    cartanim.pause();
  });

  const cart = (e) => {
    cartanim.play();
  };

  const crossBar = () => {
    tl.reverse();
    cartanim.reverse();
  };

  return (
    <>
      <div className="z-10 flex items-center justify-between absolute w-full px-4 py-3 lg:px-7 lg:py-5 top-0 left-0">
        <div onClick={sideBar} className="md:hidden cursor-pointer">
          <HiBars3 color="#fff" size={40} />
        </div>
        <div className="hidden md:flex items-center justify-between gap-7 text-white text-xl md:order-2 robot">
          <NavLink
            className={(e) => (e.isActive ? "border-b-3 border-white" : "link")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "border-b-3 border-white" : "link")}
            to="/about"
          >
            Know Fokus
          </NavLink>
          <NavLink
            className={(e) => (e.isActive ? "border-b-3 border-white" : "link")}
            to="/product"
          >
            Product
          </NavLink>
        </div>
        <div className="w-32 lg:w-35 md:order-1">
          <NavLink to="/">
            <img className="invert" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="md:hidden cursor-pointer">
          <IoCartOutline onClick={cart} color="#fff" size={40} />
        </div>
        <div className="hidden md:flex md:order-3 items-center justify-between gap-7">
          <NavLink className="hover:scale-[1.2]" to="/login">
            <FaRegUser color="#fff" size={30} />
          </NavLink>
          <IoCartOutline
            className="cursor-pointer hover:scale-[1.2]"
            onClick={cart}
            color="#fff"
            size={40}
          />
        </div>
      </div>

      {/* SideBar */}

      <div
        id="bar"
        className="z-11 md:hidden flex flex-col gap-7 bg-[#ffffff89] backdrop-blur-xl text-2xl roboto absolute w-3xs px-7 pt-30 pb-17 rounded-tr-xl rounded-br-xl top-0 -left-70"
      >
        <span
          onClick={crossBar}
          className="crossbar absolute top-7 left-6 cursor-pointer"
        >
          <RxCross1 size={30} />
        </span>
        <div className="">
          <NavLink
            className={(e) =>
              e.isActive ? "border-b-3 border-black" : "link-black"
            }
            onClick={crossBar}
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div className="">
          <NavLink
            className={(e) =>
              e.isActive ? "border-b-3 border-black" : "link-black"
            }
            onClick={crossBar}
            to="/about"
          >
            Know Fokus
          </NavLink>
        </div>
        <div className="">
          <NavLink
            className={(e) =>
              e.isActive ? "border-b-3 border-black" : "link-black"
            }
            onClick={crossBar}
            to="/product"
          >
            Product
          </NavLink>
        </div>
        <div className="">
          <NavLink
            className={(e) =>
              e.isActive ? "border-b-3 border-black" : "link-black"
            }
            onClick={crossBar}
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>

      {/* Cart Items */}

      <div
        id="cart"
        className="absolute z-11 flex-col gap-3 bg-white h-150 md:h-170 md:w-150 w-[93%] top-0 left-[-50rem] m-3 rounded-2xl py-4 border-stone-400 border"
      >
        <div className="flex items-center justify-between mx-4">
          <span className="roboto text-xl">My Cart (2)</span>
          <RxCross1 className="cursor-pointer" onClick={crossBar} size={30} />
        </div>
        <div className="bg-stone-400 h-px w-full"></div>
        <div className="border-stone-400 flex flex-col justify-between border rounded-2xl mx-4 my-2 flex-1 p-3">
          <div className="flex flex-col overflow-y-scroll">
            <div className="flex pt-2 gap-2">
              <div className="flex justify-center items-center bg-stone-100 rounded-xl border border-stone-400 w-22 h-27">
                <img src={bottle1} alt="" />
              </div>
              <div className="flex flex-col flex-1 justify-between py-3 px-1">
                <div className="flex justify-between items-center gap-4 text-xl roboto">
                  <span>Kiwi Lemon</span>
                  <span>₹150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Bottle: 1</span>
                  <div className="flex px-3 py-1 gap-3 bg-stone-100 border border-stone-400 rounded-lg text-2xl roboto">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex pt-2 gap-2">
              <div className="flex justify-center items-center bg-stone-100 rounded-xl border border-stone-400 w-22 h-27">
                <img src={bottle2} alt="" />
              </div>
              <div className="flex flex-col flex-1 justify-between py-3 px-1">
                <div className="flex justify-between items-center gap-4 text-xl roboto">
                  <span>Mango Pineapple</span>
                  <span>₹150</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Bottle: 1</span>
                  <div className="flex px-3 py-1 gap-3 bg-stone-100 border border-stone-400 rounded-lg text-2xl roboto">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between bg-stone-100 rounded border border-stone-400 roboto text-xl px-2 py-1">
              <span>Total:</span>
              <span>₹300</span>
            </div>
            <button className="text-center w-full bg-stone-100 rounded border border-stone-400 roboto text-xl py-1">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
