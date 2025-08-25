// FAQSection.tsx
"use client";
import React, { useState } from 'react';
import ContactInfo from './ContactInfo'; // Import the new ContactInfo component
import FAQItem from './FAQItem';         // Import the new FAQItem component

// Define the structure for an FAQ item
interface FAQData {
  question: string;
  answer: string;
}

function FAQSection() {
  // State to manage which FAQ item is currently open.
  // Stores the index of the open item, or null if none are open.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Array of FAQ data
  const faqData: FAQData[] = [
    {
      question: "What exactly does BuzzBip do?",
      answer: "BuzzBip helps e-commerce brands boost sales and retention through AI-powered, personalized SMS and WhatsApp conversations, triggered at the right moment, without manual work.",
    },
    {
      question: "Do I need technical skills to use BuzzBip?",
      answer: "No, BuzzBip is designed to be user-friendly with an intuitive interface. You don't need any technical skills to set up and manage your campaigns.",
    },
    {
      question: "Can BuzzBip integrate with my e-commerce platform?",
      answer: "Yes, BuzzBip offers seamless integration with popular e-commerce platforms like Shopify, WooCommerce, and more. Our team can assist you with the setup process.",
    },
    {
      question: "What kind of messages can I send?",
      answer: "You can send personalized drip campaigns, abandoned cart recovery messages, product offers, post-purchase follow-ups, and more, all tailored to customer behavior.",
    },
    {
      question: "How do I measure performance?",
      answer: "BuzzBip provides comprehensive analytics and reporting tools to track the performance of your campaigns, including conversion rates, revenue generated, and customer engagement.",
    },
    {
      question: "What is WhatsApp Business Platform / API (WABA)?",
      answer: "WhatsApp Business Platform (WABA) is a secure, scalable solution for medium and large businesses to communicate with customers on WhatsApp, enabling features like automated messaging, quick replies, and CRM integration.",
    },
  ];

  // Function to toggle the open/closed state of an FAQ item
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="
        min-h-[700px] /* Minimum height for the section */
        w-full w-[1440px]/* Take full width */
        px-4 md:px-8 lg:px-24 /* Responsive padding */
        flex flex-col lg:flex-row items-start /* Arrange content in a row on large screens */
        justify-center /* Center content horizontally */
        overflow-hidden /* Hide overflow if content extends */
      "
    >
      {/* Left side: Heading and Contact Us button (now handled by ContactInfo component) */}
      <ContactInfo
        title="Frequently Asked Questions"
        description="Get answers to commonly asked questions."
        buttonText="Contact Us"
        // buttonLink="/contact" // Example: uncomment and set actual link
      />

      {/* Right side: FAQ Accordion */}
      <div className="flex-1 w-full max-w-full lg:max-w-[604px]">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
