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
        w-[200px] sm:w-[250px] md:w-[300px] lg:w-[330px]
        h-[60px] sm:h-[70px] md:h-[80px] lg:h-[88px]
        rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-[44px]
        font-medium
        text-base
        shadow-lg
        inline-flex items-center justify-center
        whitespace-nowrap
        transition-all duration-200 ease-in-out
        hover:opacity-90 cursor-pointer
        opacity-100 
        transform rotate-0 
      `}
    >
      <span
        className="
          font-semibold 
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
          leading-tight
          tracking-[0.0075em]
          text-center
          inline-flex items-center justify-center 
          [font-family:Parkinsans]
          overflow-hidden
          px-4 sm:px-6 md:px-8 lg:px-10
        "
      >
        {text}
      </span>
    </div>
  );
}

export default Pill;