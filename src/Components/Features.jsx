import React from "react";
import { features } from "../DATA/projectData";

const Features = () => {
  return (
    <div className="relative min-h-[800px] mt-20 border-b border-neutral-800">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full py-2 px-3 text-sm font-medium h-6 uppercase">
          Feature
        </span>
        <h2 className="mt-10 lg:mt-20 text-3xl sm:text-5xl lg:text-6xl tracking-wide">
          Easy build
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20 mx-4 sm:mx-8 lg:mx-28">
        {features.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex justify-center items-center bg-neutral-800 text-orange-500 rounded-full mx-6 h-10 w-10 p-2">
                {item.icon}
              </div>

              <div>
                <h5 className="mt-1 mb-6 text-xl">{item.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
