"use client";

import React, { useRef, useState } from "react";
import { HambergerMenu, CloseSquare } from 'iconsax-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="
        w-full
        max-w-[1248px] mx-auto
        px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[32px]
        h-14 xs:h-16 flex items-center justify-between
        bg-white/15 shadow-md rounded-full border border-white/15 backdrop-blur-md
        relative z-50
      "
    >
      <div className="flex items-center flex-shrink-0">
        <img
          src="/images/logo-buzzbip.svg"
          alt="Buzzbip Logo"
          className="h-6 xs:h-7 sm:h-8 w-auto mr-1 xs:mr-2"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/100x40/7F51F2/FFFFFF?text=Buzzbip";
            e.currentTarget.alt = "Buzzbip Logo Placeholder";
          }}
        />
      </div>

      <nav className="hidden lg:flex flex-grow justify-center h-10 space-x-4 xl:space-x-6 2xl:space-x-8 max-w-2xl">
        <a
          href="#"
          className="h-10 px-3 xl:px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-sm hover:text-secondary-500 transition-colors duration-200 whitespace-nowrap"
        >
          Platform
        </a>
        <a
          href="#"
          className="h-10 px-3 xl:px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-sm hover:text-secondary-500 transition-colors duration-200 whitespace-nowrap"
        >
          How it works
        </a>
        <a
          href="#"
          className="h-10 px-3 xl:px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-sm hover:text-secondary-500 transition-colors duration-200 whitespace-nowrap"
        >
          Pricing
        </a>
        <a
          href="#"
          className="h-10 px-3 xl:px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-sm hover:text-secondary-500 transition-colors duration-200 whitespace-nowrap"
        >
          Resources
        </a>
      </nav>

      <div className="hidden lg:flex items-center space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-5 flex-shrink-0">
        <button className="w-[60px] lg:w-[70px] h-8 lg:h-10 px-2 lg:px-4 py-2 rounded-full flex items-center justify-center text-white font-medium text-xs lg:text-sm hover:text-secondary-500 transition-colors duration-200">
          Login
        </button>

        <button className="h-8 lg:h-10 px-3 lg:px-4 py-2 rounded-full border border-secondary-500 bg-secondary-500 text-neutral-purple-900 font-medium text-xs lg:text-sm hover:bg-secondary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-opacity-50 whitespace-nowrap">
          Book Demo
        </button>

        <div className="flex items-center pt-2 pb-2 pr-2 lg:pr-3 pl-2 lg:pl-3 rounded-full">
          <img
            src="/images/Left.svg"
            alt="Translate Icon"
            className="w-3 lg:w-4 h-3 lg:h-4"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/24x24/FFFFFF/000000?text=TR";
              e.currentTarget.alt = "Translate Icon Placeholder";
            }}
          />
          <button className="h-8 py-2 px-2 lg:px-3 -ml-1 lg:-ml-2 rounded-full flex items-center justify-center text-white font-medium text-xs hover:text-primary-500 transition-colors duration-200 whitespace-nowrap">
            EN
          </button>
        </div>
      </div>

      <div className="flex lg:hidden items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none p-1.5 sm:p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <CloseSquare size="20" color="#FFFFFF" variant="Outline" />
          ) : (
            <HambergerMenu size="20" color="#FFFFFF" variant="Outline" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="
            absolute top-full left-0 right-0 mt-2
            bg-[#29314b]/98 rounded-[20px] backdrop-blur-[400px] border border-white/15
            z-40 
            p-6
            lg:hidden
            shadow-xl
          "
        >
          <div className="flex flex-col space-y-4 mb-6">
            <a
              href="#"
              onClick={closeMobileMenu}
              className="text-white text-lg font-medium hover:text-secondary-500 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
            >
              Platform
            </a>
            <a
              href="#"
              onClick={closeMobileMenu}
              className="text-white text-lg font-medium hover:text-secondary-500 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
            >
              How it works
            </a>
            <a
              href="#"
              onClick={closeMobileMenu}
              className="text-white text-lg font-medium hover:text-secondary-500 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
            >
              Pricing
            </a>
            <a
              href="#"
              onClick={closeMobileMenu}
              className="text-white text-lg font-medium hover:text-secondary-500 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
            >
              Resources
            </a>
          </div>
          
          <div className="flex flex-col space-y-3 pt-4 border-t border-white/20">
            <button 
              onClick={closeMobileMenu}
              className="w-full h-12 px-6 py-3 rounded-full flex items-center justify-center text-white font-medium text-base hover:text-secondary-500 transition-colors duration-200 border border-white/20 hover:bg-white/10"
            >
              Login
            </button>
            <button 
              onClick={closeMobileMenu}
              className="w-full h-12 px-6 py-3 rounded-full border border-secondary-500 bg-secondary-500 text-neutral-purple-900 font-medium text-base hover:bg-secondary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-opacity-50"
            >
              Book A Demo
            </button>

            <div className="flex items-center justify-center pt-3 pb-3 pr-4 pl-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors duration-200">
              <img
                src="/images/Left.svg"
                alt="Translate Icon"
                className="w-4 h-4 mr-2"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/24x24/FFFFFF/000000?text=TR";
                  e.currentTarget.alt = "Translate Icon Placeholder";
                }}
              />
              <button className="text-white font-medium text-base hover:text-primary-500 transition-colors duration-200">
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;