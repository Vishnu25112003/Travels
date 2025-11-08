import "./App.css";
import Navigation from "./components/Navigation";
import { Hero, About, Features, Packages, Contact, Footer } from "./components";

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Packages />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
