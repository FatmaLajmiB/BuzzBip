import React from 'react'

interface HeadingBlocProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

function HeadingBloc({ title, subtitle }: HeadingBlocProps) {
  return (
    <div className="text-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1
        className="
          text-white
          font-semibold
          text-4xl
          leading-[44px] 
          tracking-[0.0075em] 
          text-center
          mb-4 
          [font-family:Parkinsans] 
        "
        style={{
        }}
      >
        {title}
      </h1>

      <p
        className="
          text-white
          font-medium
          text-lg
          leading-6 
          tracking-[0.0075em] 
          text-center
          [font-family:Parkinsans]
        "
        style={{
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default HeadingBloc