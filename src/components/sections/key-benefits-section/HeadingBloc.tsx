import React from 'react'

interface HeadingBlocProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

function HeadingBloc({ title, subtitle }: HeadingBlocProps) {
  return (
    <div className="text-center max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1
        className="
          text-white
          font-semibold
          text-2xl sm:text-3xl md:text-4xl lg:text-4xl
          leading-tight sm:leading-9 md:leading-10 lg:leading-[44px]
          tracking-[0.0075em] 
          text-center
          mb-3 sm:mb-4 lg:mb-4
          [font-family:Parkinsans] 
        "
      >
        {title}
      </h1>

      <p
        className="
          text-white
          font-medium
          text-base sm:text-lg md:text-lg lg:text-lg
          leading-5 sm:leading-6 md:leading-6 lg:leading-6
          tracking-[0.0075em] 
          text-center
          [font-family:Parkinsans]
        "
      >
        {subtitle}
      </p>
    </div>
  );
}

export default HeadingBloc