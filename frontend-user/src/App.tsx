import "./App.css";
import Navigation from "./components/Navigation";
import { Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Destinations from "./pages/Destinations";
import Gallery from "./pages/Gallery";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
