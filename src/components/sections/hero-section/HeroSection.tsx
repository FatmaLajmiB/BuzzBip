"use client";

import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <div
      className=" w-full max-w-[1248px] mx-auto items-center
       flex flex-col flex-row items-start min-h-[554px] mt-10"
    >
      <HeroText />
      <HeroImage />
    </div>
  );
}

export default HeroSection;
