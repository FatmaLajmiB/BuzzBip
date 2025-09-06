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
        className=" w-[400px] h-[126px] md:w-[1440px] md:h-[126px] flex items-center justify-between md:px-[96px] px-[20px] mx-auto"
      >
        {/* Power Behind Every Bip section - now stays on one line */}
      <div className="flex-shrink-0 flex flex-col items-start mr-[10px] md:mr-[60px]">
        <h2 className="text-white font-semibold
                        text-xs md:text-[32px]
                        leading-[16px] md:leading-[36px] 
                        whitespace-normal" 
              style={{ fontFamily: 'Parkinsans' }}>
          Power Behind<br className="hidden sm:block md:hidden" /> Every Bip
        </h2>
        <p className="font-medium text-white 
                       text-xs md:text-[18px]
                       leading-[14px] md:leading-[24px]
                       whitespace-normal" 
             style={{ fontFamily: 'Parkinsans' }}>
          Your Growth,<br className="hidden sm:block md:hidden" /> Our Mission
        </p>
      </div>

      {/* Metric sections - all in one row */}
      <div className="flex flex-row items-center 
                       gap-4 md:gap-12 xl:gap-16">
          
          {/* 34x Return on Investment */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-white 
                          text-xl md:text-[40px]
                          leading-[24px] md:leading-[44px]
                          pb-1 whitespace-nowrap" 
                style={{ fontFamily: 'Parkinsans' }}>
              {returnOnInvestment.toLocaleString()}x
            </h3>
            <p className="font-medium text-white 
                         text-[10px] md:text-[18px]
                         leading-[12px] md:leading-[24px]
                         mt-1 md:mt-2 whitespace-normal text-left" 
               style={{ fontFamily: 'Parkinsans' }}>
              Return on<br className="hidden sm:block md:hidden" /> Investment
          </p>
        </div>

        {/* 20%+ Reduction */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-white 
                          text-xl md:text-[40px]
                          leading-[24px] md:leading-[44px]
                          pb-1 whitespace-nowrap" 
                style={{ fontFamily: 'Parkinsans' }}>
              {reductionInAbondonedCarts.toLocaleString()}%+
            </h3>
            <p className="font-medium text-white 
                         text-[10px] md:text-[18px]
                         leading-[12px] md:leading-[24px]
                         mt-1 md:mt-2 text-left" 
               style={{ fontFamily: 'Parkinsans' }}>
              <span className="whitespace-normal">Reduction in</span>{' '}
              <span className="whitespace-normal">abandoned carts</span>
            </p>
          </div>

        {/* 80% Message Open Rate */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-white 
                          text-xl md:text-[40px]
                          leading-[24px] md:leading-[44px]
                          pb-1 whitespace-nowrap" 
                style={{ fontFamily: 'Parkinsans' }}>
              {messageOpenRate.toLocaleString()}%
            </h3>
            <p className="font-medium text-white 
                         text-[10px] md:text-[18px]
                         leading-[12px] md:leading-[24px]
                         mt-1 md:mt-2 whitespace-normal text-left" 
               style={{ fontFamily: 'Parkinsans' }}>
              Message<br className="hidden sm:block md:hidden" /> Open Rate
            </p>
          </div>
      </div>
    </div>
    </div>
  );
};

export default HeroFooter;