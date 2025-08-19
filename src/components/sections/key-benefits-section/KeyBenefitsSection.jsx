"use client";
import React from "react";
import HeadingBloc from "./HeadingBloc";
import PillsContainer from "./PillsContainer";
import Pill from "./Pill";

function KeyBenefitsSection() {
  return (
    <div>
      <div className=" flex justify-center p-4 mt-10">
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
              <br />
              powerful things happen
            </span>
          }
        />
      </div>
      
      <div className="relative w-[1070px] h-[400px] mx-auto mt-30 mb-30">
        {/* Pills positioned directly within this new centered container */}

        {/* Loyalty Pill: top:342px -> 0px (342 - 342); left:365px -> 180px (365 - 185) */}
        <div className="absolute" style={{ top: '0px', left: '180px' }}>
          <Pill text="Loyalty" bgColorClass="bg-accent-yellow-500" />
        </div>

        {/* Conversion Pill: top:342px -> 0px; left:755px -> 570px (755 - 185) */}
        <div className="absolute" style={{ top: '0px', left: '570px' }}>
          <Pill text="Conversion" bgColorClass="bg-accent-mint-500" />
        </div>

        {/* Continuity Pill: top:492px -> 150px (492 - 342); left:185px -> 0px (185 - 185) */}
        <div className="absolute" style={{ top: '150px', left: '0px' }}>
          <Pill text="Continuity" bgColorClass="bg-accent-purple-500" />
        </div>

        {/* Connection Pill: top:492px -> 150px; left:555px -> 370px (555 - 185) */}
        <div className="absolute" style={{ top: '150px', left: '370px' }}>
          <Pill text="Connection" bgColorClass="bg-white" textColorClass="text-gray-900" />
        </div>

        {/* Growth Pill: top:492px -> 150px; left:925px -> 740px (925 - 185) */}
        <div className="absolute" style={{ top: '150px', left: '740px' }}>
          <Pill text="Growth" bgColorClass="bg-accent-coral-500" />
        </div>

        {/* Trust Pill: top:632px -> 290px (632 - 342); left:365px -> 180px */}
        <div className="absolute" style={{ top: '290px', left: '180px' }}>
          <Pill text="Trust" bgColorClass="bg-accent-magenta-500" />
        </div>

        {/* Engagement Pill: top:632px -> 290px; left:755px -> 570px */}
        <div className="absolute" style={{ top: '290px', left: '570px' }}>
          <Pill text="Engagement" bgColorClass="bg-accent-blue-400" />
        </div>
      </div>
    
    </div>
  );
}

export default KeyBenefitsSection;
