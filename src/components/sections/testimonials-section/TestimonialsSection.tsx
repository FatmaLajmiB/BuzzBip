// TestimonialsSection.tsx
"use client";
import React, { useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      image: "/TestimonialsImages/Tarek.png",
      quote: <span>
              "Very good job BuzzBip team.
              <br />
              You have truly earned the trust we placed in you.
              <br />
              It is rewarding for us at Arkan as a startup ourselves, to witness the success
              <br />
              of our partnership"
            </span>,
      author: "Tarek Marzouk",
      role: "Co-Founder, Arkan.tn"
    },
    {
      image: "/TestimonialsImages/Sarah.png",
      quote: "“ The team at BuzzBip delivered exceptional results. Our conversion rates increased by 45% in just two months of working together. Highly recommended! ”",
      author: "Sarah Johnson",
      role: "Marketing Director, TechGadgets"
    },
    {
      image: "/TestimonialsImages/Michael.png",
      quote: "“ We've tried several agencies before, but BuzzBip's data-driven approach and creativity stood out. They transformed our online presence completely. ”",
      author: "Michael Chen",
      role: "CEO, StyleHub"
    }
  ];

  // SVG for the left arrow navigation button
  const leftArrowSvg = `<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="path-1-inside-1_1781_24995" fill="white">
  <path d="M0 20.8242C0 9.77852 8.95431 0.824219 20 0.824219C31.0457 0.824219 40 9.77852 40 20.8242C40 31.8699 31.0457 40.8242 20 40.8242C8.95431 40.8242 0 31.8699 0 20.8242Z"/>
  </mask>
  <path d="M20 40.8242V39.3242C9.78273 39.3242 1.5 31.0415 1.5 20.8242H0H-1.5C-1.5 32.6983 8.12588 42.3242 20 42.3242V40.8242ZM40 20.8242H38.5C38.5 31.0415 30.2173 39.3242 20 39.3242V40.8242V42.3242C31.8741 42.3242 41.5 32.6983 41.5 20.8242H40ZM20 0.824219V2.32422C30.2173 2.32422 38.5 10.607 38.5 20.8242H40H41.5C41.5 8.9501 31.8741 -0.675781 20 -0.675781V0.824219ZM20 0.824219V-0.675781C8.12588 -0.675781 -1.5 8.9501 -1.5 20.8242H0H1.5C1.5 10.607 9.78273 2.32422 20 2.32422V0.824219Z" fill="currentColor" mask="url(#path-1-inside-1_1781_24995)"/>
  <path d="M18.38 25.371C18.2533 25.371 18.1266 25.3243 18.0266 25.2243L13.98 21.1776C13.7866 20.9843 13.7866 20.6643 13.98 20.471L18.0266 16.4243C18.22 16.231 18.54 16.231 18.7333 16.4243C18.9266 16.6176 18.9266 16.9376 18.7333 17.131L15.04 20.8243L18.7333 24.5176C18.9266 24.711 18.9266 25.031 18.7333 25.2243C18.64 25.3243 18.5066 25.371 18.38 25.371Z" fill="currentColor"/>
  <path d="M25.6663 21.3242H14.4463C14.173 21.3242 13.9463 21.0976 13.9463 20.8242C13.9463 20.5509 14.173 20.3242 14.4463 20.3242H25.6663C25.9396 20.3242 26.1663 20.5509 26.1663 20.8242C26.1663 21.0976 25.9396 21.3242 25.6663 21.3242Z" fill="currentColor"/>
  </svg>`;

  // SVG for the right arrow navigation button
  const rightArrowSvg = `<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="path-1-inside-1_1781_24996" fill="white">
  <path d="M0 20.8242C0 9.77852 8.95431 0.824219 20 0.824219C31.0457 0.824219 40 9.77852 40 20.8242C40 31.8699 31.0457 40.8242 20 40.8242C8.95431 40.8242 0 31.8699 0 20.8242Z"/>
  </mask>
  <path d="M20 40.8242V39.3242C9.78273 39.3242 1.5 31.0415 1.5 20.8242H0H-1.5C-1.5 32.6983 8.12588 42.3242 20 42.3242V40.8242ZM40 20.8242H38.5C38.5 31.0415 30.2173 39.3242 20 39.3242V40.8242V42.3242C31.8741 42.3242 41.5 32.6983 41.5 20.8242H40ZM20 0.824219V2.32422C30.2173 2.32422 38.5 10.607 38.5 20.8242H40H41.5C41.5 8.9501 31.8741 -0.675781 20 -0.675781V0.824219ZM20 0.824219V-0.675781C8.12588 -0.675781 -1.5 8.9501 -1.5 20.8242H0H1.5C1.5 10.607 9.78273 2.32422 20 2.32422V0.824219Z" fill="currentColor" mask="url(#path-1-inside-1_1781_24996)"/>
  <path d="M21.6204 25.371C21.4937 25.371 21.3671 25.3243 21.2671 25.2243C21.0737 25.031 21.0737 24.711 21.2671 24.5176L24.9604 20.8243L21.2671 17.131C21.0737 16.9376 21.0737 16.6176 21.2671 16.4243C21.4604 16.231 21.7804 16.231 21.9737 16.4243L26.0204 20.471C26.2137 20.6643 26.2137 20.9843 26.0204 21.1776L21.9737 25.2243C21.8737 25.3243 21.7471 25.371 21.6204 25.371Z" fill="currentColor"/>
  <path d="M25.553 21.3242H14.333C14.0597 21.3242 13.833 21.0976 13.833 20.8242C13.833 20.5509 14.0597 20.3242 14.333 20.3242H25.553C25.8263 20.3242 26.053 20.5509 26.053 20.8242C26.053 21.0976 25.8263 21.3242 25.553 21.3242Z" fill="currentColor"/>
  </svg>`;

  // Function to scroll to the previous testimonial
  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      setCurrentIndex(newIndex);
      
      scrollContainerRef.current.scrollTo({
        left: newIndex * scrollContainerRef.current.offsetWidth,
        behavior: "smooth"
      });
    }
  };

  // Function to scroll to the next testimonial
  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const newIndex = (currentIndex + 1) % testimonials.length;
      setCurrentIndex(newIndex);
      
      scrollContainerRef.current.scrollTo({
        left: newIndex * scrollContainerRef.current.offsetWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen w-full w-[1440px] py-20 px-4 md:px-8 lg:px-24 flex flex-col justify-center items-center relative overflow-hidden">
      {/* "People say" Pill */}
      <div className="flex items-center justify-center mb-8">
        <div
          className="
            bg-white
            border border-[1px] border-primary-500
            rounded-full
            px-4 py-2
            text-[14px] font-medium leading-[16px]
            text-primary-500
            flex items-center space-x-2
            font-medium
          "
          style={{
            fontFamily: "Parkinsans",
          }}
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0332 6.60645C12.2799 6.60645 11.6065 6.97311 11.1865 7.53311C10.7665 6.97311 10.0932 6.60645 9.33987 6.60645C8.06654 6.60645 7.0332 7.64645 7.0332 8.92645C7.0332 9.41978 7.1132 9.87978 7.24654 10.2998C7.89987 12.3731 9.92654 13.6198 10.9265 13.9598C11.0665 14.0064 11.2999 14.0064 11.4399 13.9598C12.4399 13.6198 14.4665 12.3798 15.1199 10.2998C15.2599 9.87311 15.3332 9.41978 15.3332 8.92645C15.3399 7.64645 14.3065 6.60645 13.0332 6.60645Z"
              fill="#7F51F2"
            />
            <path
              d="M10.8662 2.56689C12.3864 2.56689 13.6443 3.72069 13.8125 5.21826C12.8856 5.07501 11.9193 5.30103 11.1562 5.82764C10.5541 5.4018 9.83123 5.16655 9.07324 5.1665C7.07433 5.1665 5.45312 6.80043 5.45312 8.80713C5.45317 10.0072 5.79056 11.0264 6.2627 11.8657C5.66642 11.4914 5.02874 11.0051 4.44434 10.4077C3.26645 9.20373 2.33301 7.58363 2.33301 5.56006C2.3331 3.90045 3.66533 2.56689 5.30664 2.56689C6.28192 2.56699 7.14251 3.03363 7.68555 3.75928L8.08398 4.29248L8.48535 3.76221C9.03614 3.03356 9.89825 2.56694 10.8662 2.56689ZM11.2158 5.86963L11.2148 5.86865L11.2158 5.86963Z"
              fill="#7F51F2"
              stroke="#7F51F2"
            />
          </svg>

          <span>People say</span>
        </div>
      </div>

      {/* Main Heading */}
      <h2
        className="
          text-[36px] md:text-[40px] font-semibold leading-[40px] md:leading-[56px] tracking-[-0.01em]
          text-white text-center mb-4 max-w-4xl
        "
        style={{ fontFamily: "Parkinsans, sans-serif" }}
      >
        Real Results. Real Growth
      </h2>

      {/* Subtitle/Description */}
      <p
        className="
          text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[28px] text-white text-center max-w-3xl mb-12 tracking-[0.0075em] 
        "
        style={{ fontFamily: "Parkinsans, sans-serif" }}
      >
        We partner with bold e-commerce teams who don't settle for average.
        Their success stories aren't just proof — they're our purpose.
      </p>

      {/* Testimonial Container */}
      <div
        ref={scrollContainerRef}
        className="
          relative w-full flex overflow-x-hidden snap-x snap-mandatory
          no-scrollbar
        "
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 snap-start flex justify-center">
            <TestimonialCard
              image={testimonial.image}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows and Indicators */}
      <div className="flex items-center space-x-2 mt-12 mb-4 z-30">
        <button
          onClick={scrollPrev}
          className="
            w-12 h-12 rounded-full flex items-center justify-center
            bg-transparent text-[#D3D4DD] hover:text-primary-500 transition-colors
          "
          aria-label="Previous testimonial"
          dangerouslySetInnerHTML={{ __html: leftArrowSvg }}
        />
        
        {/* Indicator dots */}
        <div className="">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: index * scrollContainerRef.current.offsetWidth,
                    behavior: "smooth"
                  });
                }
              }}
              
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={scrollNext}
          className="
            w-12 h-12 rounded-full flex items-center justify-center
            bg-transparent text-[#B2B4C4] hover:text-primary-500 transition-colors
          "
          aria-label="Next testimonial"
          dangerouslySetInnerHTML={{ __html: rightArrowSvg }}
        />
      </div>
    </div>
  );
}

export default TestimonialsSection;