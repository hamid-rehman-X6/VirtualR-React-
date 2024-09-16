import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import WorkFlow from "./Components/WorkFlow";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Footers from "./Components/Footers";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <Features />
      <WorkFlow />
      <Pricing />
      <Testimonials />
      <Footers />
    </>
  );
};

export default App;
