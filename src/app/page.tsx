import React from "react";
import HeroSection from "@/components/sections/hero-section/HeroSection";
import KeyBenefitsSection from "@/components/sections/key-benefits-section/KeyBenefitsSection";
import FeaturesSection from "@/components/sections/features-section/FeaturesSection";
import Header from "../components/Header";
import StepsSection from "@/components/sections/steps-section/StepsSection";
import TestimonialsSection from "@/components/sections/testimonials-section/TestimonialsSection";
import FAQSection from "@/components/sections/q&a-section/FAQSection";
import StartSection from "@/components/sections/start-section/StartSection";
import BuzzBipSection from "@/components/sections/buzzbip-section/BuzzBipSection";
import Footer from "@/components/Footer/Footer";
const TEXTURE_IMAGE_URL = "/images/Texture.png";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#051139] overflow-hidden">
      {/* Texture background wrapper */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden z-10">
          <img
            src={TEXTURE_IMAGE_URL}
            alt="Background Texture"
            className="w-full h-full object-cover opacity-60"
            style={{ mixBlendMode: "overlay" }}
          />
        </div>

        {/* Sections with texture */}
        <div className="container mx-auto px-4 py-8 flex flex-col gap-10 pr-24 pl-24 relative z-50">
          <Header />
        </div>
        <div className="container mx-auto px-4 py-8 flex flex-col gap-10 pr-24 pl-24 relative z-20">
          <HeroSection />
        </div>
        <div className="container mx-auto px-4 py-8 flex flex-col gap-10 pr-24 pl-24 relative z-20">
          <KeyBenefitsSection />
        </div>
        <div className="container mx-auto px-4 py-8 flex flex-col gap-10 pr-24 pl-24 relative z-20">
          <FeaturesSection />
        </div>
      </div>

      {/* Sections without texture */}
      <div className="container mx-auto px-4 py-8 flex flex-col gap-10 pr-24 pl-24 relative z-20">
        <StepsSection />
      </div>
      <div className="py-8 flex flex-col gap-10 relative z-20">
        <TestimonialsSection />
      </div>
      <div className=" flex flex-col gap-10 relative z-20"> 
        <FAQSection />
      </div>
      <div className=" flex flex-col gap-10 relative z-20"> 
        <StartSection />
      </div>
      <div className="flex justify-center relative z-20 "> 
        <BuzzBipSection />
      </div>
      <div className="flex justify-center relative z-20 "> 
        <Footer />
      </div>
    </div>
  );
}
