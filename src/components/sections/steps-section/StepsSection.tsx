"use client";
import React, { useRef } from "react";
import StepCardsContainer from "./StepCardsContainer";

function StepsSection() {
  return (
    <div
      className="
        min-h-[700px]
        w-full
        bg-transparent
        pt-16
        flex flex-col
        rounded-[32px]
        relative
        group
      "
    >
      {/* Section Header */}
      <div className="mb-8 max-w-2xl text-left">
        <h2
          className="
            text-[40px]
            font-semibold
            leading-[56px]
            tracking-[-0.01em]
            text-white
            mb-8
            font-sans
            w-[412px] h-[88px]
          "
          style={{ fontFamily: "Parkinsans, sans-serif" }}
        >
          Get up and running in 3 simple steps
        </h2>
        <p
          className="
            text-[18px]
            font-normal
            leading-[28px]
            text-gray-300
            font-sans
            
          "
          style={{ fontFamily: "Parkinsans, sans-serif" }}
        >
          We make it easy to make it easy. No degree in computer science
          required.
        </p>
      </div>

      <StepCardsContainer />

    </div>
  );
}

export default StepsSection;
