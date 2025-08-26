// FAQItem.tsx
"use client";
import React from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean; // Prop to indicate if this item is currently open
  onClick: () => void; // Function to call when the item is clicked
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  // SVG for the Plus icon
  const plusIconSvg = `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_1805_11050" fill="white">
<path d="M0 16.8242C0 7.98766 7.16344 0.824219 16 0.824219C24.8366 0.824219 32 7.98766 32 16.8242C32 25.6608 24.8366 32.8242 16 32.8242C7.16344 32.8242 0 25.6608 0 16.8242Z"/>
</mask>
<path d="M16 32.8242V31.3242C7.99187 31.3242 1.5 24.8323 1.5 16.8242H0H-1.5C-1.5 26.4892 6.33502 34.3242 16 34.3242V32.8242ZM32 16.8242H30.5C30.5 24.8323 24.0081 31.3242 16 31.3242V32.8242V34.3242C25.665 34.3242 33.5 26.4892 33.5 16.8242H32ZM16 0.824219V2.32422C24.0081 2.32422 30.5 8.81609 30.5 16.8242H32H33.5C33.5 7.15924 25.665 -0.675781 16 -0.675781V0.824219ZM16 0.824219V-0.675781C6.33502 -0.675781 -1.5 7.15924 -1.5 16.8242H0H1.5C1.5 8.81609 7.99187 2.32422 16 2.32422V0.824219Z" fill="#D3D4DD" mask="url(#path-1-inside-1_1805_11050)"/>
<path d="M19.5556 17.4353H12.4444C12.2015 17.4353 12 17.2338 12 16.9908C12 16.7479 12.2015 16.5464 12.4444 16.5464H19.5556C19.7985 16.5464 20 16.7479 20 16.9908C20 17.2338 19.7985 17.4353 19.5556 17.4353Z" fill="white"/>
</svg>
`;

  // SVG for the Minus icon
  const minusIconSvg = `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_1805_11055" fill="white">
<path d="M0 16.8242C0 7.98766 7.16344 0.824219 16 0.824219C24.8366 0.824219 32 7.98766 32 16.8242C32 25.6608 24.8366 32.8242 16 32.8242C7.16344 32.8242 0 25.6608 0 16.8242Z"/>
</mask>
<path d="M16 32.8242V31.3242C7.99187 31.3242 1.5 24.8323 1.5 16.8242H0H-1.5C-1.5 26.4892 6.33502 34.3242 16 34.3242V32.8242ZM32 16.8242H30.5C30.5 24.8323 24.0081 31.3242 16 31.3242V32.8242V34.3242C25.665 34.3242 33.5 26.4892 33.5 16.8242H32ZM16 0.824219V2.32422C24.0081 2.32422 30.5 8.81609 30.5 16.8242H32H33.5C33.5 7.15924 25.665 -0.675781 16 -0.675781V0.824219ZM16 0.824219V-0.675781C6.33502 -0.675781 -1.5 7.15924 -1.5 16.8242H0H1.5C1.5 8.81609 7.99187 2.32422 16 2.32422V0.824219Z" fill="#D3D4DD" mask="url(#path-1-inside-1_1805_11055)"/>
<path d="M19.5556 17.3242H12.4444C12.2015 17.3242 12 17.0976 12 16.8242C12 16.5509 12.2015 16.3242 12.4444 16.3242H19.5556C19.7985 16.3242 20 16.5509 20 16.8242C20 17.0976 19.7985 17.3242 19.5556 17.3242Z" fill="white"/>
<path d="M16 20.8242C15.7267 20.8242 15.5 20.6227 15.5 20.3798V13.2687C15.5 13.0257 15.7267 12.8242 16 12.8242C16.2733 12.8242 16.5 13.0257 16.5 13.2687V20.3798C16.5 20.6227 16.2733 20.8242 16 20.8242Z" fill="white"/>
</svg>
`;

  return (
    <div
      className={`
        ${isOpen ? "bg-accent-purple-900" : "bg-transparent"} 
        rounded-[22px] p-6 mb-4 cursor-pointer w-[604px]
        transition-all duration-300 ease-in-out border border-accent-purple-50 px-8
        ${isOpen ? "shadow-lg" : ""}
      `}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3
          className="
            text-[18px] font-medium leading-[24px] text-white
            max-w-[467px]
          "
        >
          {question}
        </h3>
        <div
          className="text-white w-6 h-6 flex items-center justify-center"
          dangerouslySetInnerHTML={{
            __html: isOpen ? plusIconSvg :  minusIconSvg,
          }}
        />
      </div>
      {isOpen && (
        <p
          className="
            text-[16px] font-normal leading-[24px] text-white mt-4 w-[516px]
          "
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default FAQItem;
