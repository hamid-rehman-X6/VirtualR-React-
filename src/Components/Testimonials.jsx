import React from "react";
import { testimonials } from "../DATA/projectData";

const Testimonials = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide my-10 lg:my-20">
        What people are saying
      </h1>

      <div className="flex flex-wrap justify-center mx-4">
        {testimonials.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="border rounded-md p-6 text-md border-neutral-800 font-thin">
              <p>{item.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  src={item.image}
                  alt={item.user}
                  className="w-12 h-12 rounded-full border border-neutral-300 mr-6"
                />

                <div>
                  <h6>{item.user}</h6>
                  <p className="italic text-sm font-normal text-neutral-600">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
