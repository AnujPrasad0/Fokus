import Home from "../Pages/Home";
import About from "../Pages/About";
import Product from "../Pages/Product";
import Login from "../Pages/Login";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound";
import Orders from "../Pages/Orders";
import Contact from "../Pages/Contact";
import Conditions from "../Pages/Conditions";
import Service from "../Pages/Service";
import Shipping from "../Pages/Shipping";
import Return from "../Pages/Return";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/conditions" element={<Conditions />} />
      <Route path="/service" element={<Service />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/return" element={<Return />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Mainroutes;
