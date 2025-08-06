import React from 'react';
import { colors } from '@/styles/themes/colors';

// Helper function to convert Tailwind color class to hex color
const getHexColor = (tailwindColorClass: string): string => {
  switch (tailwindColorClass) {
    case 'text-white':
      return colors.base.white;
    case 'text-accent-orange-500': 
      return colors.accent.orange[500];
    default:
      return colors.base.white;
  }
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
  width?: string;
}

const FeatureCard = ({
  icon: IconComponent,
  title,
  description,
  bgColor = 'bg-transparent',
  textColor = 'text-white',
  onClick,
  width = 'w-full'
}: FeatureCardProps) => {
  const iconColor = getHexColor(textColor);

  return (
    <button
      className={`
        ${bgColor} ${textColor}
        ${width} py-2 px-4 rounded-md flex flex-col items-start space-y-1
        transition-all duration-200 ease-in-out
        hover:scale-[1.02] hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-accent-orange-500 focus:ring-opacity-50
        text-left cursor-pointer
      `}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        {IconComponent && (
          <IconComponent size="20" color={iconColor} />
        )}
        <h3 className="font-semibold text-base whitespace-nowrap">
          {title}
        </h3>
      </div>
      <p className="text-sm leading-tight text-white">
        {description}
      </p>
    </button>
  );
};

export default FeatureCard;