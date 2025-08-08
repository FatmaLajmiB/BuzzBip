"use client";

import React from 'react';
import HeroText from './HeroText';

function HeroSection() {
  return (
    <div className="flex flex-col items-start w-full min-h-[554px] mt-10">
      <HeroText />      
    </div>
  );
}

export default HeroSection;