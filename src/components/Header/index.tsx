"use client";

import React, { useRef, useState } from 'react';
import styles from './Header.module.css';
import PlatformDropdown from './PlatformDropdown';

const Header = () => {
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowPlatformDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPlatformDropdown(false);
    }, 150);
  };

  return (
    <header className="w-[1248px] max-w-full mx-auto h-16 pt-3 pr-8 pb-3 pl-8 flex items-center justify-between bg-white/15 shadow-md rounded-full border border-white/15 backdrop-blur-md">
      <div className="flex items-center">
        <img
          src="/images/logo-buzzbip.svg"
          alt="Buzzbip Logo"
          className="h-8 w-auto mr-2"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/100x40/7F51F2/FFFFFF?text=Buzzbip";
            e.currentTarget.alt = "Buzzbip Logo Placeholder";
          }}
        />
      </div>

      <nav className="hidden md:flex flex-grow justify-center h-10 space-x-8">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <a
            href="#"
            className="h-10 px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-sm hover:text-secondary-500 transition-colors duration-200 whitespace-nowrap"
          >
            Platform
          </a>
        </div>
        <a
          href="#"
          className="h-10 px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-sm hover:text-secondary-500 transition-colors duration-200 whitespace-nowrap"
        >
          How it works
        </a>
        <a
          href="#"
          className="h-10 px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-sm hover:text-secondary-500 transition-colors duration-200 whitespace-nowrap"
        >
          Pricing
        </a>
        <a
          href="#"
          className="h-10 px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-sm hover:text-secondary-500 transition-colors duration-200 whitespace-nowrap"
        >
          Resources
        </a>
      </nav>

      <div className="flex items-center w-[297px] h-10 space-x-5">
        <button
          className="w-[70px] h-10 px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-sm hover:text-secondary-500 transition-colors duration-200"
        >
          Login
        </button>

        <button
          className="h-10 px-4 py-2 rounded-full border border-secondary-500 bg-secondary-500 text-neutral-purple-900 font-medium text-sm hover:bg-secondary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-opacity-50 whitespace-nowrap"
        >
          Book A Demo
        </button>

        <div className="flex items-center ml-auto pt-2 pb-2 pr-3 pl-3 rounded-full">
          <img
            src="/images/Left.svg"
            alt="Translate Icon"
            className="w-4 h-4"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/24x24/FFFFFF/000000?text=TR";
              e.currentTarget.alt = "Translate Icon Placeholder";
            }}
          />
          <button
            className="h-8 py-2 px-3 -ml-2 rounded-full flex items-center justify-center text-white font-medium text-xs hover:text-primary-500 transition-colors duration-200 whitespace-nowrap"
          >
            EN
          </button>
        </div>
      </div>
      {showPlatformDropdown && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <PlatformDropdown />
        </div>
      )}
      <div className="md:hidden">
        <button className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;