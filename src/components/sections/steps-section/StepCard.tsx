// StepCard.tsx
"use client";
import React from 'react';

// Define props for the StepCard component
interface StepCardProps {
  iconSvg: string;
  title: string;
  description: string;
  stepNumber?: string; // Optional for the "Start Now" card
  buttonText?: string; // Optional, only for the "Start Now" card
}

function StepCard({ iconSvg, title, description, stepNumber, buttonText }: StepCardProps) {
  // Determine if this is the last card based on the presence of buttonText
  const isLastCard = !!buttonText;

  return (
    <div
      className={`
        relative /* Needed for absolute positioning of step number */
        flex-none /* Prevent cards from shrinking */
        w-[400px] /* Updated width: 400px */
        h-[406px] /* Updated height: 406px */
        pt-[45px] pr-[45px] pl-[45px] /* Updated padding: 45px top, right, left */
        pb-10 /* Added consistent bottom padding, adjusted from original StepCard */
        bg-[#2F1A5F] /* Dark purple background for the card (retained) */
        rounded-[32px] /* Updated border radius: 32px */
        flex flex-col items-start justify-between /* Arrange content vertically, space evenly */
        text-white /* Default text color for the card */
        opacity-100 /* Explicit opacity: 1 (retained) */
        rotate-0 /* Explicit angle: 0 deg (retained) */
        border-none /* Added to explicitly remove any borders */
        
      `}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 mb-6 text-white" /* Icon styling - Adjusted mb- */
        dangerouslySetInnerHTML={{ __html: iconSvg }}
      />

      {/* Title */}
      <h3
        className={`
          text-[32px] /* Font size */
          font-semibold /* Font weight */
          leading-[32px] /* Line height */
          tracking-[0.0075em] /* Letter spacing */
          font-sans /* Placeholder for Parkinsans, using sans-serif */
          mb-6 /* Margin below title - Adjusted mb- */
        `}
        style={{ fontFamily: 'Parkinsans, sans-serif' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`
          text-[18px] /* Font size */
          font-normal /* Font weight */
          leading-[24px] /* Line height */
          tracking-[0.0075em] /* Letter spacing */
          font-sans /* Placeholder for Parkinsans, using sans-serif */
          text-gray-300 /* Slightly lighter text for description */
          mb-auto /* Pushes content up, making space for step number/button */
          /* Removed explicit mb-2 here to let mb-auto control spacing */
          w-[279px]
        `}
        style={{ fontFamily: 'Parkinsans, sans-serif' }}
      >
        {description}
      </p>

      {/* Conditional Rendering for Step Number or Button */}
      {isLastCard ? (
        <button
          className={`
            mt-4 /* Margin top */
            px-6 py-3 /* Padding for the button */
            bg-[#00FBAE] /* Bright green background */
            text-[#09001C] /* Dark text for contrast */
            rounded-full /* Pill shape */
            font-semibold
            text-lg
            whitespace-nowrap
            hover:opacity-90 transition-opacity
            flex items-center justify-center
          `}
        >
          {buttonText}
          {/* Right arrow icon using SVG */}
          <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      ) : (
        <div
          className={`
            absolute /* Position absolutely within the parent */
            bottom-16 right-16 /* Position at bottom-right - Adjusted bottom- and right- */
            text-[120px] /* Large font size for step number */
            font-bold /* Bold font weight */
            leading-[72px] /* Line height */
            text-[#00FBAE] /* Bright green color */
            opacity-100 /* Slight transparency */
            pointer-events-none /* Allows clicks to pass through to underlying elements if any */
          `}
        >
          {stepNumber}
        </div>
      )}
    </div>
  );
}

export default StepCard;
