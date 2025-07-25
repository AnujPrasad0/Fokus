import { useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { LuLockKeyhole } from "react-icons/lu";
import { LuLockKeyholeOpen } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Login = () => {
  const register = () => {
    const tl = gsap.timeline();
    tl.to(".logreg", {
      xPercent: -100,
      stagger: 0.3,
    });
  };

  const login = () => {
    const tl = gsap.timeline();
    tl.to(".logreg", {
      xPercent: 0,
      stagger: 0.3,
    });
  };

  const goup = (target) => {
    gsap.to(target, {
      top: "5px",
      x: "-0.6rem",
      scale: 0.9,
      duration: 0.2,
    });
  };

  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 h-dvh w-screen flex items-center justify-center pt-15">
      <div className="relative overflow-hidden flex flex-col justify-between gap-5 bg-[#ffffff27] backdrop-blur-sm min-h-100 min-w-80 max-w-80 sm:max-w-100 roboto text-[#fff] rounded-xl border border-[#ffffff74] py-10">
        <div className="logreg relative flex items-center min-w-full">
          <h1 className="text-3xl font-bold text-center min-w-full">Login</h1>
          <h1 className="text-3xl font-bold text-center min-w-full">Sign Up</h1>
        </div>
        <form className="flex flex-col gap-3">
          <div className="logreg flex min-w-full relative">
            <div className="px-10 min-w-full">
              <div className="flex items-end justify-between border-b py-3">
                <div className="flex flex-col">
                  <label
                    onClick={(e) => goup(e.currentTarget)}
                    className="relative top-6"
                    htmlFor="logemail"
                  >
                    Email
                  </label>
                  <input
                    className="outline-none"
                    type="email"
                    name=""
                    id="logemail"
                  />
                </div>
                <HiOutlineMail size={23} />
                {/* <LuLockKeyhole /> */}
              </div>
            </div>
            <div className="px-10 min-w-full">
              <div className="flex items-end justify-between border-b py-3">
                <div className="flex flex-col">
                  <label
                    onClick={(e) => goup(e.currentTarget)}
                    className="relative top-6"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="outline-none"
                    type="email"
                    name=""
                    id="email"
                  />
                </div>
                <HiOutlineMail size={23} />
                {/* <LuLockKeyhole /> */}
              </div>
            </div>
          </div>

          <div className="logreg flex min-w-full relative">
            <div className="px-10 min-w-full">
              <div className="flex items-end justify-between border-b py-3">
                <div className="flex flex-col">
                  <label
                    onClick={(e) => goup(e.currentTarget)}
                    className="relative top-6"
                    htmlFor="logpassword"
                  >
                    Password
                  </label>
                  <input
                    className="outline-none"
                    type="password"
                    name=""
                    id="logpassword"
                  />
                </div>
                <LuLockKeyhole size={23} />
              </div>
            </div>
            <div className="px-10 min-w-full">
              <div className="flex items-end justify-between border-b py-3">
                <div className="flex flex-col">
                  <label
                    onClick={(e) => goup(e.currentTarget)}
                    className="relative top-6"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="outline-none"
                    type="password"
                    name=""
                    id="password"
                  />
                </div>
                <LuLockKeyholeOpen size={23} />
              </div>
            </div>
          </div>

          <div className="logreg flex items-end min-w-full relative">
            <div className="px-10 min-w-full">
              <div className="flex items-center justify-between">
                <label htmlFor="check">
                  <input type="checkbox" id="check" />
                  Remember Me
                </label>
                <span className="font-bold cursor-pointer">
                  Forgot Password?
                </span>
              </div>
            </div>
            <div className="px-10 min-w-full">
              <div className="flex items-end justify-between border-b py-3">
                <div className="flex flex-col">
                  <label
                    onClick={(e) => goup(e.currentTarget)}
                    className="relative top-6"
                    htmlFor="confirmpassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="outline-none"
                    type="password"
                    name=""
                    id="confirmpassword"
                  />
                </div>

                <LuLockKeyhole size={23} />
              </div>
            </div>
          </div>

          <div className="logreg relative flex items-center py-3">
            <div className="min-w-full flex justify-center">
              <button className="min-w-[75%] bg-[#fff] text-[#000] font-bold py-2 rounded-full">
                Login
              </button>
            </div>
            <div className="min-w-full flex justify-center">
              <button className="min-w-[75%] bg-[#fff] text-[#000] font-bold py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="logreg relative flex items-center min-w-full">
          <div className="min-w-full text-center">
            Don't have an account?{" "}
            <span onClick={register} className="font-bold cursor-pointer">
              Register
            </span>
          </div>
          <div className="min-w-full text-center">
            Already have an account?{" "}
            <span onClick={login} className="font-bold cursor-pointer">
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
