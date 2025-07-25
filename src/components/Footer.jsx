import logo from "../assets/logo.png";
import { PiInstagramLogoLight } from "react-icons/pi";
import { AiFillYoutube } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="min-h-50 flex flex-col sm:flex-row justify-between w-screen px-5 gap-5 py-5 sm:gap-10 md:px-10 lg:px-20">
      <div className="flex flex-col justify-center gap-3 order-2 sm:order-1">
        <div className="w-40">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <p className="roboto">© 2025, Fokus Beverages Private Limited.</p>
        <div className="flex gap-5 px-2 items-center">
          <NavLink to="/">
            <RiTwitterXFill size={25} />
          </NavLink>
          <NavLink to="https://www.instagram.com/letsfokus">
            <PiInstagramLogoLight size={25} />
          </NavLink>
          <NavLink to="https://www.youtube.com/@letsfokuschannel">
            <AiFillYoutube size={30} />
          </NavLink>
        </div>
      </div>
      <div className="flex items-center roboto gap-10 order-1 sm:order-2">
        <div className="flex flex-col gap-3">
          <NavLink
            className={(e) =>
              e.isActive ? "border-b-3 border-black" : "link-black"
            }
            to="/orders"
          >
            Orders
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "border-b-3 border-black" : "link-black"
            }
            to="/return"
          >
            Return Policy
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "border-b-3 border-black" : "link-black"
            }
            to="/shipping"
          >
            Shipping Policy
          </NavLink>
        </div>
        <div className="flex flex-col gap-3">
          <NavLink
            className={(e) =>
              e.isActive ? "border-b-3 border-black" : "link-black"
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "border-b-3 border-black" : "link-black"
            }
            to="/service"
          >
            Customer Service
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "border-b-3 border-black" : "link-black"
            }
            to="/conditions"
          >
            Terms & Conditions
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
