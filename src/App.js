import "./App.css";
import "./styles/Hero.css";
import "./styles/End.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import End from "./components/End";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <End />
    </div>
  );
}
