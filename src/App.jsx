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
    <div className="App ">
      <div className="w-11/12 md:w-4/5 m-auto">
        <Hero />
        <NewestDeals />
        <AboutUs />
        <BestDeals />
      </div>

      <Footer />
    </div>
  );
}

export default App;
