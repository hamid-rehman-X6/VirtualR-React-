import React from "react";
import video1 from "../assests/video1.mp4";
import video2 from "../assests/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtaulR build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-900 text-transparent bg-clip-text">
          {" "}
          for developer's
        </span>
      </h1>
      <p className="mt-10 max-w-4xl text-neutral-500 text-center text-lg">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      <div className="flex justify-center my-10">
        <a
          href=""
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-4 rounded-md"
        >
          Start for Free
        </a>
        <a href="" className="py-3 px-4 border rounded-md">
          Documentation
        </a>
      </div>

      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg border border-orange-500 w-1/2 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg border border-orange-500 w-1/2 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
