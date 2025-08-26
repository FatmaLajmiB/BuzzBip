import React from 'react';

const colors = {
  base: {
    white: '#FFFFFF',
  },
  accent: {
    orange: {
      500: '#FF7A00',
    },
    coral: {
      500: '#FF6F61',
    },
  },
  neutral: {
    purple: {
      900: '#2A0A4A',
    }
  }
};

const getHexColor = (tailwindColorClass: string): string => {
  switch (tailwindColorClass) {
    case 'text-white':
      return (colors.base && colors.base.white) ? colors.base.white : '#FFFFFF';
    case 'text-accent-orange-500': 
      return (colors.accent && colors.accent.orange && colors.accent.orange[500]) ? colors.accent.orange[500] : '#FF7A00';
    default:
      return '#FFFFFF';
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
        ${width} py-1.5 sm:py-2 px-2 sm:px-3 lg:px-4 rounded-md flex flex-col items-start space-y-0.5 sm:space-y-1
        transition-all duration-200 ease-in-out
        hover:scale-[1.02] hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-accent-orange-500 focus:ring-opacity-50
        text-left cursor-pointer
        min-h-[60px] sm:min-h-[70px] lg:min-h-[80px]
      `}
      onClick={onClick}
    >
      <div className="flex items-center space-x-1.5 sm:space-x-2 w-full">
        {IconComponent && (
          <IconComponent 
            size={window.innerWidth < 640 ? "16" : window.innerWidth < 1024 ? "18" : "20"} 
            color={iconColor} 
            className="flex-shrink-0"
          />
        )}
        <h3 className="font-semibold text-xs sm:text-sm lg:text-base whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h3>
      </div>
      <p className="text-xs sm:text-sm leading-tight text-white line-clamp-2 sm:line-clamp-3">
        {description}
      </p>
    </button>
  );
};

export default FeatureCard;