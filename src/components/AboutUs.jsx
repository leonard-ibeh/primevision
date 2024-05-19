import React from "react";
import { MdHomeRepairService } from "react-icons/md";
const AboutUs = () => {
  return (
    <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-10">
      <div className="flex space-x-4 md:space-x-10">
        <div className="mt-10 space-y-4">
          <div className="w-48 flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Good services</h1>
            <p className="text-xs">
              We offer the very best services in delivering very good homes to
              our customers{" "}
            </p>
          </div>
          <div className="w-48 flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Good services</h1>
            <p className="text-xs">
              We offer the very best services in delivering very good homes to
              our customers{" "}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-48 flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Good services</h1>
            <p className="text-xs">
              We offer the very best services in delivering very good homes to
              our customers{" "}
            </p>
          </div>
          <div className="w-48 flex-col items-center bg-white text-center p-5 drop-shadow-2xl rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Good services</h1>
            <p className="text-xs">
              We offer the very best services in delivering very good homes to
              our customers{" "}
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
