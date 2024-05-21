import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="w-full py-16">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="text-xl md:text-3xl font-bold">
            Download The Real Estate App
          </h1>
          <div className="flex space-x-5">
            <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
              <FaGooglePlay size={"1.5rem"} />
              <div>
                <p className="text-xs">Get On</p>
                <h1 className="text-sm">Google play</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
              <IoLogoAppleAppstore size={"1.5rem"} />
              <div>
                <p className="text-xs">Get On</p>
                <h1 className="text-sm">Apple Store</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full py-10 bg-neutral-800 text-white">
        <div className="w-11/12 md:w-1/3 m-auto flex flex-col items-center text-center space-y-5">
          <h1 className="text-2xl font-bold">Real Estate</h1>
          <ul className="flex items-center space-x-5 text-sm">
            <li>features</li>
            <li>Tranding</li>
            <li>About</li>
          </ul>
          <div className="flex items-center space-x-5">
            <FiTwitter size={"1.5rem"} />
            <AiOutlineInstagram size={"1.5rem"} />
            <AiOutlineYoutube size={"1.5rem"} />
            <FiFacebook size={"2rem"} />
            <AiOutlineGithub size={"1.5rem"} />
          </div>
          <p className="p-5 text-sm text-gray-400">
            PrimeVision offers top-notch real estate services, including sales,
            rentals, and property management. Our expert team is dedicated to
            providing personalized solutions for all your real estate needs.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
