import React from "react";
import HeroImg from "../assets/image6.jpg";
const Hero = () => {
  return (
    <div>
      <nav className="py-1">
        <div className="flex justify-between items-center ">
          <h1 className="text-xl md:text-2xl font-bold">PrimeVision</h1>
          <ul className="flex justify-center">
            <li className="mr-6">Features</li>
            <li className="mr-2">Trending</li>
            <li className="mr-2">About</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform hover:scale-110 transition-all duration-300">
            Contact
          </button>
        </div>
      </nav>
      <div className="h-[500px] relative">
        <img
          className="w-full h-full object-cover rounded-md"
          src={HeroImg}
          alt=""
        />
        <div className="absolute bottom-5 w-full">
          <div className="w-11/12 xl:w-4/5 m-auto bg-white grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:rounded-md">
            <div className="flex flex-col space-y-2">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                placeholder="US"
                className="outline-0 text-xs"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="property">Property</label>
              <input
                type="text"
                placeholder="property"
                className="outline-0 text-xs"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="price">Max Price</label>
              <input
                type="text"
                placeholder="$100,000"
                className="outline-0 text-xs"
              />
            </div>
            <div>
              <button className="bg-yellow-400 px-5 py-2 mt-5 md:mt-0 md:rounded-full ">
                search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
