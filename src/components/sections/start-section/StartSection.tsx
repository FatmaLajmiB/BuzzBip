import React from "react";

function StartSection() {
  const callToActionBackgroundSvg = `
     <svg width="1344" height="466" viewBox="0 0 1344 466" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1.82422" width="1342" height="463" rx="31" fill="white" fill-opacity="0.1"/>
    <rect x="1" y="1.82422" width="1342" height="463" rx="31" fill="url(#paint0_radial_1805_10845)"/>
    <rect x="1" y="1.82422" width="1342" height="463" rx="31" stroke="url(#paint1_linear_1805_10845)" stroke-width="2"/>
    <path d="M627 465.824C627 463.615 628.791 461.824 631 461.824H723C725.209 461.824 727 463.615 727 465.824H627Z" fill="white"/>

        <defs>
<radialGradient id="paint0_radial_1805_10845" cx="0" cy="0" r="1.3" gradientUnits="userSpaceOnUse" gradientTransform="translate(672 233.324) rotate(8) scale(810 300)">
    <stop offset="0.500291" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#7F51F2"/>
</radialGradient>
    <linearGradient id="paint1_linear_1805_10845" x1="672" y1="0.824219" x2="672" y2="465.824" gradientUnits="userSpaceOnUse">
    <stop stop-color="#7F51F2"/>
    <stop offset="1" stop-color="#0A7CFF" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>

  `;

  return (
    <div className="w-full w-[1440px] flex justify-center items-center py-16 px-4">
      <div
        className="
          relative w-full max-w-[1344px] h-[466px]
          rounded-[32px]
          flex flex-col items-center justify-center
          overflow-hidden
        "
      >
        {/* SVG for the background and border, absolutely positioned behind content */}
        <div
          className="absolute inset-0 z-0 w-full h-full"
          dangerouslySetInnerHTML={{ __html: callToActionBackgroundSvg }}
        />

        {/* Title */}
        <h2
          className="
            font-semibold text-white text-center relative z-10
            text-[48px] md:text-[60px] lg:text-[72px] 
            leading-[56px] md:leading-[68px] lg:leading-[80px] 
            tracking-[0.0075em]
            max-w-[90%] md:max-w-[80%] mb-6
          "
          style={{ fontFamily: "Parkinsans, sans-serif" }}
        >
          <span>
            Start growing
            <br />
            your business with us
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            font-normal text-white text-center relative z-10
            text-[16px] md:text-[18px] leading-[24px] tracking-[0.0075em]
            max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mb-10
          "
        >
          Connect with our team to get a personalized demo - or install now to
          start your 30-day free trial!
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          {/* Button 1: Talk to an expert */}
          <button
            className="
              w-full sm:w-[194px] h-[56px]
              px-5 py-4
              rounded-full
              bg-primary-500 text-white
              font-normal text-[18px]
              flex items-center justify-center
              hover:opacity-90 transition-opacity
              border-none
            "
          >
            Talk to an expert
          </button>

          {/* Button 2: Start Free Trial */}
          <button
            className="
              w-full sm:w-[202px] h-[56px]
              px-5 py-4 leading[24px]
              rounded-full
              bg-accent-coral-500 text-white
              font-normal text-[18px]
              flex items-center justify-center
              hover:bg-accent-coral-600 hover:text-white transition-colors
            "
          >
            Start Free Trial
            {/* Right arrow icon */}
            <svg
              className="ml-2"
              width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4301 18.9686C14.2401 18.9686 14.0501 18.8986 13.9001 18.7486C13.6101 18.4586 13.6101 17.9786 13.9001 17.6886L19.4401 12.1486L13.9001 6.60855C13.6101 6.31855 13.6101 5.83855 13.9001 5.54855C14.1901 5.25855 14.6701 5.25855 14.9601 5.54855L21.0301 11.6186C21.3201 11.9086 21.3201 12.3886 21.0301 12.6786L14.9601 18.7486C14.8101 18.8986 14.6201 18.9686 14.4301 18.9686Z"
                fill="white"
              />
              <path
                d="M20.33 12.8984H3.5C3.09 12.8984 2.75 12.5584 2.75 12.1484C2.75 11.7384 3.09 11.3984 3.5 11.3984H20.33C20.74 11.3984 21.08 11.7384 21.08 12.1484C21.08 12.5584 20.74 12.8984 20.33 12.8984Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartSection;
