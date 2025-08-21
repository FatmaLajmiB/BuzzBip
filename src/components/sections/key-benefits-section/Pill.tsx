import React from 'react';

interface PillProps {
  text: string;
  bgColorClass: string;
  textColorClass?: string;
}

function Pill({ text, bgColorClass, textColorClass = 'text-white' }: PillProps) {
  return (
    <div
      className={`
        ${bgColorClass}
        ${textColorClass}
        w-[330px] 
        h-[88px]  
        rounded-[44px] 
        font-medium
        text-base
        shadow-lg
        inline-flex items-center justify-center
        whitespace-nowrap
        transition-colors duration-200 ease-in-out
        hover:opacity-90 cursor-pointer
        opacity-100 
        transform rotate-0 
      `}
    >
      <span
        className="
          w-[267px] 
          h-[44px]  
          font-semibold 
          text-4xl 
          leading-[44px] 
          tracking-[0.0075em]
          text-center
          inline-flex items-center justify-center 
          [font-family:Parkinsans]
          overflow-hidden
          px-10
        "
        style={{
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default Pill;