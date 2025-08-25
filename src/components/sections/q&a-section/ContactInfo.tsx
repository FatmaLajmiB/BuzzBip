// ContactInfo.tsx
"use client";
import React from "react";

interface ContactInfoProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string; // Optional: if the button navigates somewhere
}

function ContactInfo({
  title,
  description,
  buttonText,
  buttonLink = "#",
}: ContactInfoProps) {
  return (
    <div className="flex-1 lg:mr-16 mb-12 lg:mb-0 max-w-full lg:max-w-[604px]">
      <h2
        className="
          text-[48px] font-semibold leading-[56px] tracking-[-0.01em]
          text-white mb-4
        "
      >
        {title}
      </h2>
      <p
        className="
          text-[18px] font-normal leading-[28px] text-white mb-8
        "
      >
        {description}
      </p>
      <button
        onClick={() => (window.location.href = buttonLink)} // Basic navigation
        className="
          pl-2 py-4 bg-primary-500 text-white rounded-full
          font-normal  hover:bg-purple-700 transition-colors
          flex items-center space-x-2 text-[18px] Leading-[24px] tracking-[0.0075rem] w-[171px] h-[56px] justify-center
        "
      >
        <span>{buttonText}</span>
        {/* Right arrow icon */}
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4301 19.6443C14.2401 19.6443 14.0501 19.5743 13.9001 19.4243C13.6101 19.1343 13.6101 18.6543 13.9001 18.3643L19.4401 12.8243L13.9001 7.28434C13.6101 6.99434 13.6101 6.51434 13.9001 6.22434C14.1901 5.93434 14.6701 5.93434 14.9601 6.22434L21.0301 12.2943C21.3201 12.5843 21.3201 13.0643 21.0301 13.3543L14.9601 19.4243C14.8101 19.5743 14.6201 19.6443 14.4301 19.6443Z"
            fill="white"
          />
          <path
            d="M20.33 13.5742H3.5C3.09 13.5742 2.75 13.2342 2.75 12.8242C2.75 12.4142 3.09 12.0742 3.5 12.0742H20.33C20.74 12.0742 21.08 12.4142 21.08 12.8242C21.08 13.2342 20.74 13.5742 20.33 13.5742Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}

export default ContactInfo;
