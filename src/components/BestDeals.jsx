import React from "react";
import house7 from "../assets/house7.jpg";
import house8 from "../assets/house8.jpg";
import house9 from "../assets/house9.jpg";
import house10 from "../assets/house10.jpg";
import house11 from "../assets/house11.jpg";
import house12 from "../assets/house12.jpg";
import { IoLocation, IoLocationOutline } from "react-icons/io5";
const BestDeals = () => {
  return (
    <div>
      <div className="w-11/12 md:-1/2 xl:w-1/3 m-auto text-center py-10">
        <h1 className="text-4xl font-bold">Best Deals Not To Be Missed </h1>
        <p className="text-xs text-gray-400 p-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          adipisci facere eveniet voluptatum consectetur sed, dolores est non!
          Autem rerum magni saepe eos laboriosam, amet rem sed molestiae
          laudantium voluptate.
        </p>
      </div>
      <div className="deals w-full grid lg:grid-flow-col grid-rows-2 gap-8">
        <div className="deal relative col-span-2 row-span-2">
          <img
            src={house7}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t form-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">Place</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline /> Lekki, Ikata.
            </p>
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-1">
          <img
            src={house8}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t form-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">Place</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline /> Bodija, Ibadan.
            </p>
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-1">
          <img
            src={house9}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t form-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">Place</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline /> Lekki, Ajah.
            </p>
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-1">
          <img
            src={house10}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t form-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">Place</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline /> VGC, Lagos Island.
            </p>
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-1">
          <img
            src={house11}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t form-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">Place</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline /> Kissmi, Florida
            </p>
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-1">
          <img
            src={house12}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t form-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">Place</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline /> Lagos, Ikeja Villa.
            </p>
          </div>
        </div>
        <div className="deal relative col-span-1 row-span-1">
          <img
            src={house12}
            alt=""
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t form-black rounded-b-xl space-y-2">
            <h1 className="text-3xl font-bold">Place</h1>
            <p className="flex items-center space-x-2 text-sm">
              <IoLocationOutline /> Parkview, Lagos Island.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
