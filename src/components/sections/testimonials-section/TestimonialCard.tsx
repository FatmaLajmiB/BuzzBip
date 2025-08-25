// components/TestimonialCard.tsx
import React from "react";

interface TestimonialCardProps {
  image: string;
  quote: React.ReactNode;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  quote,
  author,
  role,
}) => {
  // Green blob SVG background
  const greenBlobSvgFused = `
    <svg width="466" height="252" viewBox="0 0 466 252" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M340.182 0C409.668 0 466 56.3735 466 125.912C466 195.451 409.668 251.824 340.182 251.824H290.09H248.769H180.632C111.314 251.824 54.8136 195.619 54.8136 125.912C54.8136 71.5639 41.1524 40.1703 27.1538 22.2793C13.6612 4.38835 0 0 0 0H340.182Z" fill="#00FBAE"/>
      <mask id="mask0_1781_24988" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="466" height="252">
        <path d="M340.182 0C409.668 0 466 56.3735 466 125.912C466 195.451 409.668 251.824 340.182 251.824H290.09H248.769H180.632C111.314 251.824 54.8136 195.619 54.8136 125.912C54.8136 71.5639 41.1524 40.1703 27.1538 22.2793C13.6612 4.38835 0 0 0 0H340.182Z" fill="#00FBAE"/>
      </mask>
      <g mask="url(#mask0_1781_24988)">
        <path d="M95.5439 283.197L171.09 1.25488H457.048L381.501 283.197H95.5439Z" fill="#00E49E"/>
      </g>
    </svg>
  `;

  return (
    <div className="relative w-full max-w-[1440px] bg-transparent flex flex-col items-center">
      {/* Container for Fused SVG and Image */}
      <div className="relative w-[400px] h-[300px] md:w-[500px] md:h-[350px] flex items-center justify-center mb-2">
        {/* Fused SVG Background */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: greenBlobSvgFused }}
        />

        {/* Person's PNG Image - Centered properly */}
        <div className="relative w-[280px] h-[280px] md:w-[411px] md:h-[251.9px] left-[27px] flex items-center justify-center overflow-hidden rounded-[122px]">
          <img
            src={image}
            alt={author}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Quote */}
      <div
        className="
          relative text-[20px] md:text-[32px] lg:text-[32px] font-semibold leading-[28px] md:leading-[32px] lg:leading-[40px] text-white text-center 
          mb-8 w-full w-[1248px] z-20 tracking-[0.0075em]
        "
        style={{ fontFamily: "Parkinsans" }}
      >
        {quote}
      </div>

      {/* Author and Title */}
      <div className="text-center z-20 px-4">
        <p className="text-[14px] md:text-[14px] font-normal text-white mb-1">
          {author}
        </p>
        <p className="text-[14px] md:text-[14px] font-normal text-white">
          {role}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;