import { createContext } from "react";
import lemon from "./assets/lemon.png";
import kiwi from "./assets/kiwi.png";
import watermelon from "./assets/watermelon.png";
import strawberries from "./assets/strawberries.png";
import mango from "./assets/mango.png";
import pineapple from "./assets/pineapple.png";
import bottle1 from "./assets/bottle1.png";
import bottle2 from "./assets/bottle2.png";
import bottle3 from "./assets/bottle3.png";

export const productcontext = createContext(null);

const Wrapper = (props) => {
  const product = [
    {
      id: 1,
      name: "Kiwi Lemon",
      price: 150,
      bottle: bottle1,
      extra1: lemon,
      extra2: kiwi,
      desc: "The Kiwi Lemon variant delivers a zesty burst of citrus blended with the refreshing sweetness of kiwi. It’s crafted to sharpen mental clarity with ingredients like Vitamin D3, Ginkgo Biloba, and 5-HTP—supporting hydration, bone health, and brain function all in one bottle. If you’re craving something crisp and energizing with a tangy punch, this one hits the spot.",
      bg: "#7ed957",
    },
    {
      id: 2,
      name: "Mango Pineapple",
      price: 150,
      bottle: bottle2,
      extra1: pineapple,
      extra2: mango,
      desc: "For lovers of tropical vibes, Mango Pineapple serves up a juicy combination of ripe mango and vibrant pineapple. Its formula includes Ginseng, L-Carnitine L-Tartrate (LCLT), and Glutamine, designed to give your body a gentle boost of recovery and energy. Whether you're powering through your day or winding down post-workout, this flavor feels like a sunny escape.",
      bg: "#f7d23f",
    },
    {
      id: 3,
      name: "Strawberry Watermelon",
      price: 150,
      bottle: bottle3,
      extra1: watermelon,
      extra2: strawberries,
      desc: "Strawberry Watermelon is all about cool refreshment and mellow sweetness. It pairs luscious strawberries with summery watermelon and infuses the mix with Coconut Water, Inositol, and Creatine. This drink is great for hydration, mood support, and a subtle lift in strength, wrapped in a chill, fruity vibe.",
      bg: "#ff3131",
    },
  ];

  return (
    <productcontext.Provider value={product}>
      {props.children}
    </productcontext.Provider>
  );
};

export default Wrapper;
