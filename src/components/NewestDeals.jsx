import React from "react";
import { GiBathtub } from "react-icons/gi";
import { IoBedOutline, IoLocateOutline } from "react-icons/io5";
import { BsSuitHeart } from "react-icons/bs";

import house1 from "../assets/house1.jpg";
// import house2 from "../assets/house2.jpg";
// import house3 from "../assets/house3.jpg";
// import house4 from "../assets/house4.jpg";
// import house5 from "../assets/house5.jpg";
// import house6 from "../assets/house6.jpg";
// import house7 from "../assets/house7.jpg";
// import house8 from "../assets/house8.jpg";
// import house9 from "../assets/house9.jpg";

const NewestDeals = () => {
  return (
    <div className="py-10">
      <p className="w-16 px-4 py-1 bg-yellow-100 rounded-lg text-sm"> New</p>
      <h1 className="text-4xl font-bold">Newest Deals</h1>
      <div className="deals grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 py-10">
        <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
          <div className="relative h-[60%]">
            <img
              src={house1}
              alt=""
              className="w-full h-full object-cover rounded-t-xl"
            />
            <div className="absolute top-0 right-0 p-4">
              <BsSuitHeart size={"1.5rem"} className="text-white" />
            </div>
          </div>

          <div>
            <div>
              <div>
                <IoBedOutline />
                <p> 5bed</p>
              </div>
              <div>
                <GiBathtub />
                <p> 3 bat</p>
              </div>
              <div>
                <IoBedOutline />
                <p> 1 gar</p>
              </div>
              <h1>$110,000</h1>
              <div>
                <IoLocateOutline />
                <p>Kissme florida Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewestDeals;
