import React from "react";
import { MdHomeRepairService } from "react-icons/md";
const AboutUs = () => {
  return (
    <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-10">
      <div className="flex space-x-4 md:space-x-10">
        <div className="mt-10 space-y-4">
          <div className="w-48 flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold"> Property Insurance</h1>
            <p className="text-xs">
              Protect your investment with our comprehensive property insurance
              services. We assist you in securing the right coverage to
              safeguard your property against unexpected events. Rely on our
              expertise to find the best insurance solutions tailored to your
              needs.
            </p>
          </div>
          <div className="w-48 flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Mortgage Assistance</h1>
            <p className="text-xs">
              Secure the financing you need with our expert mortgage assistance
              services. Our team guides you through every step of the mortgage
              process, ensuring a smooth and stress-free experience from start
              to finish. Let us help you find the best financing options
              tailored to your needs.s{" "}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-48 flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Renovation and Remodeling</h1>
            <p className="text-xs">
              Transform your home with our comprehensive renovation and
              remodeling services. We coordinate and manage every aspect of your
              home improvement projects, ensuring high-quality results and a
              seamless experience. Trust us to bring your vision to life with
              expert craftsmanship and attention to detail.
            </p>
          </div>
          <div className="w-48 flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Efficiency Consulting</h1>
            <p className="text-xs">
              Enhance your property's energy efficiency with our expert
              consulting services. We provide tailored advice to help you reduce
              energy consumption, lower costs, and create a more sustainable
              home. Let us guide you towards a greener future with innovative
              energy solutions.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-6xl font-bold">
          Know <span className="text-yellow-400">About us</span>
        </h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          possimus expedita consequatur? In, dolores adipisci! Voluptas,
          excepturi. Doloribus, consectetur quas enim quo accusamus dolorem ea
          iusto non iure, natus porro?
        </p>
        <button className="px-5 py-2 bg-yellow-400 rounded-md">
          Read more
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
