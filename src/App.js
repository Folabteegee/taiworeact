import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import End from "./components/End";

export default function App() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Navbar />
      <HeroSection />
      <div
        style={{
          postion: "relative",
        }}
      >
        <End />
      </div>
    </div>
  );
}
