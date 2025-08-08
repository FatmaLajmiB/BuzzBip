import React from 'react';
import FeatureCard from './FeatureCard'; 
import {
  Send2,
  Hierarchy,
  Bubble,
  Data,
  DirectInbox,
  Link,
  ScanBarcode,
  Activity,
  ShoppingCart,
  Whatsapp,
  Sms,
  PasswordCheck
} from 'iconsax-react';

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
}

const PlatformDropdown = () => {
  const features: FeatureItem[] = [
    {
      icon: Send2,
      title: "AI-Powered Campaigns",
      description: "Launch personalized SMS & WhatsApp campaigns to boost conversions.",
    },
    {
      icon: DirectInbox, 
      title: "Team Inbox",
      description: "Manage 1:1 conversations across channels in one unified place.",
    },
    {
      icon: Hierarchy,
      title: "Automation Triggers",
      description: "Pre-built automated flows to recover carts, follow-up, and upsell without code.",
    },
    {
      icon: Link, 
      title: "URL Shortener",
      description: "Track clicks and optimize engagement with smart, branded short links in every message.",
    },
    {
      icon: Bubble,
      title: "Smart Segmentation",
      description: "Target precisely with AI-powered dynamic customer segments.",
    },
    {
      icon: ScanBarcode, 
      title: "QR codes",
      description: "Turn in-person touchpoints into subscribers with scannable, branded QR codes for packaging, signage, and events.",
    },
    {
      icon: Data,
      title: "Seamless Integrations",
      description: "Connect with Magento, WooCommerce, PrestaShop, and more. API-ready for custom setups.",
    },
    {
      icon: Activity,
      title: "Advanced Analytics",
      description: "Measure performance with conversion-driven campaign insights.",
    },
  ];

  const solutions: FeatureItem[] = [
    {
      icon: ShoppingCart,
      title: "Shopper",
      description: "Boost AOV and conversion with AI-powered shopping flows, cart recovery, and product recommendations.",
      bgColor: "bg-accent-coral-500",
      textColor: "text-white"
    },
    {
      icon: Whatsapp,
      title: "WhatsApp Marketing",
      description: "Engage customers with personalized, automated conversations on their favorite messaging app.",
    },
    {
      icon: Sms,
      title: "SMS Marketing",
      description: "Build an engaged list, create and send messages, and deliver great experiences to drive revenue.",
    },
    {
      icon: PasswordCheck,
      title: "SMS API (OTP & Auth)",
      description: "Secure and last one-time password delivery for login, verification, and transactional messages.",
    },
  ];

  return (
    <div className="absolute top-full w-full left-0 right-0 mx-auto mt-4 pt-3 pr-8 pb-3 pl-8 bg-[#29314b]/98 rounded-[24px] backdrop-blur-[400px] border border-white/15 z-50 w-[1248px] grid grid-cols-2 gap-x-[40px]">
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-lg font-bold">Features</h2>
          <a href="#" className="text-white text-sm font-semibold hover:underline">
            View All Features &rarr;
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4"> 
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              width="w-full" 
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-white text-lg font-bold mb-6">Solutions</h2>
        <div className="grid grid-cols-1 gap-4"> 
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              bgColor={solution.bgColor}
              textColor={solution.textColor}
              width="w-[493px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformDropdown;
