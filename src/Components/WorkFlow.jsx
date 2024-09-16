import React from "react";
import code from "../assests/code.jpg";
import { checklistItems } from "../DATA/projectData";
import { CheckCircle2 } from "lucide-react";

const WorkFlow = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-6">
        Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to bg-orange-800 text-transparent bg-clip-text">
          {" "}
          coding workflows.
        </span>
      </h1>

      <div className="flex flex-wrap justify-center  ">
        <div className="w-full lg:w-1/2 p-2">
          <img src={code} alt="Code-image" />
        </div>

        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="flex justify-center items-center text-green-500 bg-neutral-800 rounded-full h-10 w-10 p-2 mx-6">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-neutral-500 text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
