import useCountUp from '@/hooks/useCountUp';
import React from 'react';

const HeroFooter = () => {
  const returnOnInvestment = useCountUp(34);
  const reductionInAbondonedCarts = useCountUp(20);
  const messageOpenRate = useCountUp(80);
  return (
    <div className="bg-primary-500 flex justify-center items-center ">
      {/* Centered container with fixed size */}
      <div 
        className=" w-[1440px] h-[126px] flex items-center justify-between px-[96px] mx-auto"
      >
        {/* Power Behind Every Bip section - now stays on one line */}
      <div className="flex-shrink-0 flex flex-col items-start mr-[60px]">
        <h2 className="text-heading-2-semiBold text-white whitespace-nowrap" style={{ 
          fontFamily: 'Parkinsans', 
          fontSize: '32px', 
          lineHeight: '36px', 
        }}>
          Power Behind Every Bip
        </h2>
        <p className="font-medium text-white whitespace-nowrap" style={{ 
          fontFamily: 'Parkinsans', 
          fontSize: '18px', 
          lineHeight: '24px', 
        }}>
          Your Growth, Our Mission
        </p>
      </div>

      {/* Metric sections - all in one row */}
      <div className="flex flex-row items-center gap-12 lg:gap-16 xl:gap-15">
        {/* 34x Return on Investment */}
        <div className="flex flex-col ">
          <h3 className="font-semibold text-white text-4xl pb-1 whitespace-nowrap" style={{ 
            fontFamily: 'Parkinsans', 
            fontSize: '40px', 
            lineHeight: '44px', 
          }}>
            {returnOnInvestment.toLocaleString()}
          </h3>
          <p className="font-medium text-white mt-2 whitespace-nowrap" style={{ 
            fontFamily: 'Parkinsans', 
            fontSize: '18px', 
            lineHeight: '24px', 
          }}>
            Return on Investment
          </p>
        </div>

        {/* 20%+ Reduction */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-white text-4xl pb-1 whitespace-nowrap" style={{ 
            fontFamily: 'Parkinsans', 
            fontSize: '40px', 
            lineHeight: '44px', 
          }}>
            {reductionInAbondonedCarts.toLocaleString()}%+
          </h3>
          <p className="font-medium text-white mt-2 whitespace-nowrap" style={{ 
            fontFamily: 'Parkinsans', 
            fontSize: '18px', 
            lineHeight: '24px', 
          }}>
            Reduction in abandoned carts
          </p>
        </div>

        {/* 80% Message Open Rate */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-white text-4xl pb-1 whitespace-nowrap" style={{ 
            fontFamily: 'Parkinsans', 
            fontSize: '40px', 
            lineHeight: '44px', 
          }}>
            {messageOpenRate.toLocaleString()}%
          </h3>
          <p className="font-medium text-white mt-2 whitespace-nowrap" style={{ 
            fontFamily: 'Parkinsans', 
            fontSize: '18px', 
            lineHeight: '24px', 
          }}>
            Message Open Rate
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroFooter;