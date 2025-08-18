"use client";

import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import PartnersLogos from "./PartnersLogos";
import HeroFooter from "./HeroFooter";

function HeroSection() {
  return (
    <div className="w-full">
      {/* Hero Content Row */}
      <div className="flex flex-col md:flex-row items-center md:items-start min-h-[554px] mt-10 max-w-[1248px] mx-auto">
        <HeroText />
        <HeroImage />
      </div>
      
      <div className="mt-10"> 
        <PartnersLogos />
      </div>

      <div className="flex justify-center md:flex-row md:items-start mt-10"> 
        <HeroFooter/>
      </div>

    </div>
  );
}

export default HeroSection;