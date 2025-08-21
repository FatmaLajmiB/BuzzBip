import Pill from "./Pill";
import React from 'react'

function PillsContainer() {
  return (
    <div className="">
      {/* Loyalty Pill */}
      <div className="absolute top-0 sm:top-4 lg:top-8 left-1/2 -translate-x-1/2">
        <Pill text="Loyalty" bgColorClass="bg-yellow-400" />
      </div>

      {/* Conversion Pill */}
      <div className="absolute top-[20%] sm:top-[25%] lg:top-[30%] right-[10%] sm:right-[15%] lg:right-[20%]">
        <Pill text="Conversion" bgColorClass="bg-emerald-400" />
      </div>

      {/* Continuity Pill */}
      <div className="absolute top-[20%] sm:top-[25%] lg:top-[30%] left-[10%] sm:left-[15%] lg:left-[20%]">
        <Pill text="Continuity" bgColorClass="bg-purple-600" />
      </div>

      {/* Connection Pill */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20">
        <Pill text="Connection" bgColorClass="bg-white" textColorClass="text-gray-900" />
      </div>

      {/* Growth Pill */}
      <div className="absolute bottom-[20%] sm:bottom-[25%] lg:bottom-[30%] right-[10%] sm:right-[15%] lg:right-[20%]">
        <Pill text="Growth" bgColorClass="bg-orange-500" />
      </div>

      {/* Trust Pill */}
      <div className="absolute bottom-0 sm:bottom-4 lg:bottom-8 left-1/4 -translate-x-1/2">
        <Pill text="Trust" bgColorClass="bg-pink-600" />
      </div>

      {/* Engagement Pill */}
      <div className="absolute bottom-0 sm:bottom-4 lg:bottom-8 right-1/4 translate-x-1/2">
        <Pill text="Engagement" bgColorClass="bg-blue-600" />
      </div>
    </div>
  );
}

export default PillsContainer