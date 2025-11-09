import Hero from "./Home/Hero";
import About from "./Home/About";
import Features from "./Home/Features";
import Packages from "./Home/Packages";
import Contact from "./Home/Contact";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Packages />
      <Contact />
    </div>
  );
};

export default Home;
