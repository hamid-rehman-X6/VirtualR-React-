import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../DATA/projectData";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>

      <div className="flex flex-wrap mx-4">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="rounded-xl border p-10 border-neutral-700">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl ml-2 mb-4">
                    (Most Popular)
                  </span>
                )}
              </p>

              <p className="mb-8">
                <span className="text-3xl mr-1">{option.price}</span>
                <span className="tracking-tight text-neutral-500">/Month</span>
              </p>

              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className=" mt-6 flex items-center">
                    <CheckCircle2 className="text-green-400" />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-300"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
