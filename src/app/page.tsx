import React from "react";
import HeroSection from "@/components/sections/hero-section/HeroSection";
import Header from "../components/Header";
const TEXTURE_IMAGE_URL = "/images/Texture.png";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#051139] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-10">
        <img
          src={TEXTURE_IMAGE_URL}
          alt="Background Texture"
          className="w-full h-full object-cover opacity-60"
          style={{ mixBlendMode: "overlay" }}
        />
      </div>
      <div className="container mx-auto px-4 py-8 flex flex-col gap-10 pr-24 pl-24 relative z-50">
        <Header />
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col gap-10 pr-24 pl-24 relative z-20">
        <HeroSection />
      </div>
    </div>
  );
}
