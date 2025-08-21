// FeatureCard.tsx - Fixed with proper TypeScript types
"use client";
import React from 'react';

// Define the shape of each SVG object expected in the 'svgs' array
interface SvgObject {
  svgString: string;
  positionClass: string;
}

// Define the props for the FeatureCard component
interface FeatureCardProps {
  iconSvg?: string; // Icon SVG is optional
  title: string;
  description: string;
  bgColorClass?: string; // Optional background color class
  textcolor?: string; // Optional text color class for title
  svgs?: SvgObject[]; // Optional array of SvgObject for background SVGs
  descriptionColorClass?: string; // Optional text color class for description
}

function FeatureCard({
  iconSvg,
  title,
  description,
  bgColorClass = 'bg-gray-100',
  textcolor = "text-base-black",
  svgs = [],
  descriptionColorClass = 'text-neutral-purple-700'
}: FeatureCardProps) {
  return (
    <div
      className={`
        ${bgColorClass}
        w-[384px] /* Explicit width */
        h-[406px] /* Explicit height */
        p-10 /* Padding 40px */
        rounded-[32px] /* Border radius */
        text-left flex flex-col relative overflow-hidden
        opacity-100 /* Explicit opacity */
        rotate-0 /* Explicit angle */
      `}
    >
      {/* Background SVGs for the first card */}
      {svgs.map((svgObject, index) => (
        <div
          key={index}
          className={`absolute z-0 ${svgObject.positionClass}`} // Position SVGs behind content
          dangerouslySetInnerHTML={{ __html: svgObject.svgString }}
        />
      ))}

      {/* Content wrapper to ensure content is above SVGs */}
      <div className="relative z-10">
        {/* Render iconSvg directly if provided */}
        {iconSvg && (
          <div
            className="w-10 h-10 mb-10 text-purple-600 " // Apply icon styling here
            dangerouslySetInnerHTML={{ __html: iconSvg }}
          />
        )}
        {/* Title text properties */}
        <h3
          className={`
            text-xl font-semibold mb-5 /* Base Tailwind, overridden below */
            w-[304px]
            text-[32px] /* Font size 32px (corrected to match previous request, as 40px was for Pills) */
            font-semibold /* Font weight 600 */
            leading-[36px] /* Line height 36px */
            tracking-[0.0075em] /* Letter spacing 0.75% */
            [font-family:sans-serif] /* Placeholder for Parkinsans */
            ${textcolor}
            `}
          
          style={{ fontFamily: 'Parkinsans, sans-serif' }}
        >
          {title}
        </h3>
        {/* Under text properties */}
        <p
          className={`
            text-sm 
            text-[18px] 
            font-normal 
            leading-[24px] 
            tracking-[0.0075em] 
            [font-family:sans-serif]
            ${descriptionColorClass}
          `}
          style={{ fontFamily: 'Parkinsans, sans-serif' }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
