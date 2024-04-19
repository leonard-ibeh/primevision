import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import NewestDeals from "./components/NewestDeals";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import BestDeals from "./components/BestDeals";
function App() {
  return (
    <div className="app">
      <Hero />
      <NewestDeals />
      <AboutUs />
      <BestDeals />
      <Footer />
    </div>
  );
}

export default App;
