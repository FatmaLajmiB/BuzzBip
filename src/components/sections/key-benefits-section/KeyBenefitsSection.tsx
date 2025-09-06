"use client";
import React from "react";
import HeadingBloc from "./HeadingBloc";
import Pill from "./Pill";

function KeyBenefitsSection() {
  return (
    <div>
      <div className="flex justify-center p-4 mt-10">
        <HeadingBloc
          title={
            <span>
              Built to Connect.
              <br />
              Designed to Convert.
            </span>
          }
          subtitle={
            <span>
              When your brand and your customer truly connect,
              <br className="hidden sm:block" />
              powerful things happen
            </span>
          }
        />
      </div>
      
      {/* Desktop Layout - Original positioning for large screens */}
      <div className="hidden lg:block relative w-full max-w-[1070px] h-[400px] mx-auto mt-30 mb-30">
        {/* Loyalty Pill */}
        <div className="absolute" style={{ top: '0px', left: '180px' }}>
          <Pill text="Loyalty" bgColorClass="bg-accent-yellow-500" />
        </div>

        {/* Conversion Pill */}
        <div className="absolute" style={{ top: '0px', left: '570px' }}>
          <Pill text="Conversion" bgColorClass="bg-accent-mint-500" />
        </div>

        {/* Continuity Pill */}
        <div className="absolute" style={{ top: '150px', left: '0px' }}>
          <Pill text="Continuity" bgColorClass="bg-accent-purple-500" />
        </div>

        {/* Connection Pill */}
        <div className="absolute" style={{ top: '150px', left: '370px' }}>
          <Pill text="Connection" bgColorClass="bg-white" textColorClass="text-gray-900" />
        </div>

        {/* Growth Pill */}
        <div className="absolute" style={{ top: '150px', left: '740px' }}>
          <Pill text="Growth" bgColorClass="bg-accent-coral-500" />
        </div>

        {/* Trust Pill */}
        <div className="absolute" style={{ top: '290px', left: '180px' }}>
          <Pill text="Trust" bgColorClass="bg-accent-magenta-500" />
        </div>

        {/* Engagement Pill */}
        <div className="absolute" style={{ top: '290px', left: '570px' }}>
          <Pill text="Engagement" bgColorClass="bg-accent-blue-400" />
        </div>
      </div>

      {/* Tablet Layout - 3 column grid */}
      <div className="hidden md:block lg:hidden px-4 mt-20 mb-20">
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {/* Row 1 */}
          <div className="flex justify-center">
            <Pill text="Loyalty" bgColorClass="bg-accent-yellow-500" />
          </div>
          <div></div>
          <div className="flex justify-center">
            <Pill text="Conversion" bgColorClass="bg-accent-mint-500" />
          </div>
          
          {/* Row 2 */}
          <div className="flex justify-center">
            <Pill text="Continuity" bgColorClass="bg-accent-purple-500" />
          </div>
          <div className="flex justify-center">
            <Pill text="Connection" bgColorClass="bg-white" textColorClass="text-gray-900" />
          </div>
          <div className="flex justify-center">
            <Pill text="Growth" bgColorClass="bg-accent-coral-500" />
          </div>
          
          {/* Row 3 */}
          <div></div>
          <div className="flex justify-center">
            <Pill text="Trust" bgColorClass="bg-accent-magenta-500" />
          </div>
          <div className="flex justify-center">
            <Pill text="Engagement" bgColorClass="bg-accent-blue-400" />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Vertical stack */}
      <div className="block lg:hidden px-4 mt-16 mb-16">
        <div className="space-y-6 max-w-sm mx-auto">
          {/* Row 1 - 2 pills */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Pill text="Loyalty" bgColorClass="bg-accent-yellow-500" />
            <Pill text="Conversion" bgColorClass="bg-accent-mint-500" />
          </div>
          
          {/* Row 2 - 1 pill (centered) */}
          <div className="flex justify-center">
            <Pill text="Connection" bgColorClass="bg-white" textColorClass="text-gray-900" />
          </div>
          
          {/* Row 3 - 2 pills */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Pill text="Continuity" bgColorClass="bg-accent-purple-500" />
            <Pill text="Growth" bgColorClass="bg-accent-coral-500" />
          </div>
          
          {/* Row 4 - 2 pills */}
          <div className="flex justify-center gap-4 flex-wrap">
            <Pill text="Trust" bgColorClass="bg-accent-magenta-500" />
            <Pill text="Engagement" bgColorClass="bg-accent-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyBenefitsSection;