import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mainroutes from "./Routes/Mainroutes";

const App = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <Mainroutes />
      <Footer />
    </div>
  );
};

export default App;
