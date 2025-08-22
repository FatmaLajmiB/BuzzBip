import React, { useRef } from 'react'
import StepCard from './StepCard';

function StepCardsContainer() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reusing the connect icon for the first step
  const connectIconSvg = `<svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1796_13264)">
<path d="M1 28C1 12.536 13.536 0 29 0C44.464 0 57 12.536 57 28C57 43.464 44.464 56 29 56C13.536 56 1 43.464 1 28Z" fill="#7F51F2" />
<path d="M39.667 31C41.3238 31 42.667 29.6569 42.667 28C42.667 26.3431 41.3238 25 39.667 25C38.0101 25 36.667 26.3431 36.667 28C36.667 29.6569 38.0101 31 39.667 31Z" fill="white"/>
<path d="M39.667 20.3335C41.3238 20.3335 42.667 18.9904 42.667 17.3335C42.667 15.6766 41.3238 14.3335 39.667 14.3335C38.0101 14.3335 36.667 15.6766 36.667 17.3335C36.667 18.9904 38.0101 20.3335 39.667 20.3335Z" fill="white"/>
<path d="M39.667 41.6665C41.3238 41.6665 42.667 40.3234 42.667 38.6665C42.667 37.0096 41.3238 35.6665 39.667 35.6665C38.0101 35.6665 36.667 37.0096 36.667 38.6665C36.667 40.3234 38.0101 41.6665 39.667 41.6665Z" fill="white"/>
<path d="M18.333 31C19.9899 31 21.333 29.6569 21.333 28C21.333 26.3431 19.9899 25 18.333 25C16.6762 25 15.333 26.3431 15.333 28C15.333 29.6569 16.6762 31 18.333 31Z" fill="white"/>
<path d="M38.3337 29.0002C38.8803 29.0002 39.3337 28.5468 39.3337 28.0002C39.3337 27.4535 38.8803 27.0002 38.3337 27.0002H28.667V21.3335C28.667 19.2268 29.5603 18.3335 31.667 18.3335H38.3337C38.8803 18.3335 39.3337 17.8802 39.3337 17.3335C39.3337 16.7868 38.8803 16.3335 38.3337 16.3335H31.667C28.4403 16.3335 26.667 18.1068 26.667 21.3335V27.0002H19.667C19.1203 27.0002 18.667 27.4535 18.667 28.0002C18.667 28.5468 19.1203 29.0002 19.667 29.0002H26.667V34.6668C26.667 37.8935 28.4403 39.6668 31.667 39.6668H38.3337C38.8803 39.6668 39.3337 39.2135 39.3337 38.6668C39.3337 38.1202 38.8803 37.6668 38.3337 37.6668H31.667C29.5603 37.6668 28.667 36.7735 28.667 34.6668V29.0002H38.3337Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1796_13264" x="0" y="0" width="58" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.960784 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1796_13264"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1796_13264" result="shape"/>
</filter>
</defs>
</svg>
`;

  // SVG for Settings/Cog icon
  const settingsIconSvg = `<svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1796_13191)">
<path d="M1 28C1 12.536 13.536 0 29 0C44.464 0 57 12.536 57 28C57 43.464 44.464 56 29 56C13.536 56 1 43.464 1 28Z" fill="#7F51F2" />
<path d="M38.2534 19.2266L31.3601 15.2399C30.0401 14.4799 27.9734 14.4799 26.6534 15.2399L19.6934 19.2533C16.9334 21.1199 16.7734 21.3999 16.7734 24.3733V31.6133C16.7734 34.5866 16.9334 34.8799 19.7468 36.7733L26.6401 40.7599C27.3068 41.1466 28.1601 41.3333 29.0001 41.3333C29.8401 41.3333 30.6934 41.1466 31.3468 40.7599L38.3068 36.7466C41.0668 34.8799 41.2268 34.5999 41.2268 31.6266V24.3733C41.2268 21.3999 41.0668 21.1199 38.2534 19.2266ZM29.0001 32.3333C26.6134 32.3333 24.6668 30.3866 24.6668 27.9999C24.6668 25.6133 26.6134 23.6666 29.0001 23.6666C31.3868 23.6666 33.3334 25.6133 33.3334 27.9999C33.3334 30.3866 31.3868 32.3333 29.0001 32.3333Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1796_13191" x="0" y="0" width="58" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.960784 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1796_13191"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1796_13191" result="shape"/>
</filter>
</defs>
</svg>
`;

  // SVG for Play/Arrow icon
  const playIconSvg = `<svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1796_13204)">
<path d="M1 28C1 12.536 13.536 0 29 0C44.464 0 57 12.536 57 28C57 43.464 44.464 56 29 56C13.536 56 1 43.464 1 28Z" fill="#7F51F2" />
<path d="M29 12C20.168 12 13 19.168 13 28C13 36.832 20.168 44 29 44C37.832 44 45 36.832 45 28C45 19.168 37.848 12 29 12ZM33.8 31.568L29.16 34.24C28.584 34.576 27.944 34.736 27.32 34.736C26.68 34.736 26.056 34.576 25.48 34.24C24.328 33.568 23.64 32.384 23.64 31.04V25.68C23.64 24.352 24.328 23.152 25.48 22.48C26.632 21.808 28.008 21.808 29.176 22.48L33.816 25.152C34.968 25.824 35.656 27.008 35.656 28.352C35.656 29.696 34.968 30.896 33.8 31.568Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1796_13204" x="0" y="0" width="58" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.960784 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1796_13204"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1796_13204" result="shape"/>
</filter>
</defs>
</svg>
`;

  // SVG for Rocket icon
  const rocketIconSvg = `<svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1915_115099)">
<path d="M1.66699 28C1.66699 12.536 14.203 0 29.667 0C45.131 0 57.667 12.536 57.667 28C57.667 43.464 45.131 56 29.667 56C14.203 56 1.66699 43.464 1.66699 28Z" fill="#7F51F2" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3655 28.6421C17.7604 29.0375 17.7601 29.6783 17.3646 30.0733L17.1571 30.2806C16.9798 30.4577 16.9798 30.7442 17.1571 30.9213C17.335 31.099 17.624 31.099 17.802 30.9213L20.0848 28.6411C20.4803 28.2462 21.1211 28.2466 21.5161 28.6421C21.911 29.0375 21.9106 29.6783 21.5152 30.0733L19.2323 32.3533C18.2641 33.3203 16.6949 33.3203 15.7267 32.3533C14.7578 31.3857 14.7578 29.8162 15.7267 28.8485L15.9342 28.6411C16.3297 28.2462 16.9705 28.2466 17.3655 28.6421ZM23.9155 29.9863C24.3108 30.3817 24.3108 31.0225 23.9155 31.4177L21.059 34.2742C20.6638 34.6694 20.023 34.6694 19.6277 34.2742C19.2325 33.8789 19.2325 33.2382 19.6277 32.8429L22.4843 29.9863C22.8795 29.5911 23.5203 29.5911 23.9155 29.9863ZM27.6611 33.7273C28.0563 34.1226 28.0563 34.7634 27.6611 35.1586L24.8241 37.9955C24.4288 38.3907 23.788 38.3907 23.3928 37.9955C22.9976 37.6003 22.9976 36.9595 23.3928 36.5643L26.2298 33.7273C26.6251 33.3321 27.2659 33.3321 27.6611 33.7273ZM23.3963 34.2615C23.7871 34.6611 23.7799 35.3018 23.3803 35.6926L21.0734 37.9487C20.6738 38.3395 20.0331 38.3323 19.6423 37.9327C19.2515 37.5331 19.2586 36.8925 19.6582 36.5017L21.9651 34.2455C22.3647 33.8547 23.0055 33.8619 23.3963 34.2615ZM28.9748 36.1575C29.3699 36.553 29.3695 37.1938 28.974 37.5889L26.6911 39.8689C26.5139 40.0459 26.5139 40.3325 26.6911 40.5095C26.8691 40.6873 27.1581 40.6873 27.336 40.5095L27.5436 40.3022C27.9391 39.9073 28.5799 39.9077 28.9748 40.3031C29.3699 40.6986 29.3695 41.3394 28.974 41.7343L28.7664 41.9417C27.7983 42.9086 26.2289 42.9086 25.2607 41.9417C24.2919 40.9739 24.2919 39.4045 25.2607 38.4367L27.5436 36.1567C27.9391 35.7617 28.5799 35.7621 28.9748 36.1575Z" fill="white"/>
<path d="M28.1287 19.212L25.2118 22.1202C24.6756 22.6547 24.1838 23.145 23.7954 23.5883C23.546 23.8729 23.2967 24.1845 23.0856 24.5287L23.0571 24.5004C23.0032 24.4466 22.9762 24.4197 22.9491 24.3934C22.4421 23.9015 21.8457 23.5103 21.1919 23.241C21.1569 23.2266 21.1215 23.2125 21.0506 23.1844L20.6163 23.0123C20.0279 22.7792 19.8711 22.0218 20.3188 21.5755C21.6036 20.2945 23.1463 18.7565 23.8908 18.4476C24.5474 18.1752 25.2566 18.0846 25.9407 18.1857C26.5675 18.2783 27.1604 18.6003 28.1287 19.212Z" fill="white"/>
<path d="M33.1094 34.5241C33.3444 34.7627 33.5006 34.9311 33.6416 35.1112C33.8279 35.3488 33.9944 35.6013 34.1395 35.8658C34.3028 36.1637 34.4298 36.4818 34.6834 37.1182C34.8899 37.6362 35.5759 37.7731 35.9744 37.3758L36.0708 37.2797C37.3556 35.9987 38.8983 34.4607 39.208 33.7185C39.4814 33.0639 39.5723 32.3567 39.4708 31.6747C39.3779 31.0499 39.0551 30.4589 38.4416 29.4937L35.515 32.4115C34.9667 32.9582 34.4639 33.4595 34.0092 33.8522C33.7367 34.0875 33.4386 34.3227 33.1094 34.5241Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3372 31.1564L41.0433 24.4704C42.0092 23.5075 42.4921 23.026 42.7464 22.4138C43.0008 21.8016 43.0008 21.1207 43.0008 19.759V19.1085C43.0008 17.0145 43.0008 15.9675 42.3483 15.317C41.6959 14.6665 40.6457 14.6665 38.5455 14.6665H37.8929C36.5271 14.6665 35.8441 14.6665 35.2301 14.9201C34.616 15.1737 34.1332 15.6551 33.1673 16.618L26.4611 23.3041C25.3325 24.4292 24.6328 25.1269 24.3618 25.8006C24.2762 26.0136 24.2334 26.2241 24.2334 26.445C24.2334 27.3649 24.976 28.1053 26.4611 29.586L26.6607 29.7849L28.9988 27.412C29.3323 27.0736 29.8769 27.0694 30.2153 27.4029C30.5537 27.7364 30.5579 28.281 30.2244 28.6194L27.8791 30.9997L28.0363 31.1564C29.5215 32.637 30.264 33.3773 31.1867 33.3773C31.3907 33.3773 31.5857 33.3412 31.7819 33.2689C32.4739 33.0141 33.1801 32.3098 34.3372 31.1564ZM37.4877 23.3046C36.6177 24.1719 35.2072 24.1719 34.3373 23.3046C33.4673 22.4372 33.4673 21.031 34.3373 20.1636C35.2072 19.2963 36.6177 19.2963 37.4877 20.1636C38.3577 21.031 38.3577 22.4372 37.4877 23.3046Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1915_115099" x="0.666992" y="0" width="58" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.960784 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1915_115099"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1915_115099" result="shape"/>
</filter>
</defs>
</svg>
`;

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Adjusted scroll distance for better UX
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Adjusted scroll distance for better UX
        behavior: "smooth",
      });
    }
  };
  return (
    <div>{/* Cards Container with Horizontal Scroll */}
      <div
        ref={scrollContainerRef}
        className="
          flex
          flex-col md:flex-row
          gap-x-5
          gap-y-8
          overflow-x-auto
          pb-4
          w-full
          no-scrollbar
          py-0
        "
        style={{
          /* Allow content to extend naturally beyond viewport */
          minWidth: "fit-content",
        }}
      >
        {/* Wrapper div to ensure cards don't get cut off */}
        <div className="flex flex-col md:flex-row gap-x-5 gap-y-8 md:min-w-max">
          <StepCard
            iconSvg={connectIconSvg}
            title="Connect to your channels"
            description="Connect your store and channels in minutes."
            stepNumber="01"
          />
          <StepCard
            iconSvg={settingsIconSvg}
            title="Set Up Brand Context"
            description="Teach Buzzblip AI your tone, audience, and goals."
            stepNumber="02"
          />
          <StepCard
            iconSvg={playIconSvg}
            title="Activate Autopilot"
            description="Let AI handle timing, targeting, and messaging."
            stepNumber="03"
          />
          <StepCard
            iconSvg={rocketIconSvg}
            title="Watch Sales Skyrocket"
            description="See conversions grow with zero manual effort."
            buttonText="Start Now"
          />
        </div>
      </div>

      {/* Transparent Scroll Buttons
      <button
        onClick={scrollLeft}
        className="
          absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2
          text-white p-3 rounded-full
          transition-all duration-300
          z-20
          hidden md:flex
          items-center justify-center
          hover:bg-opacity-30
        "
        style={{
          backgroundColor: "rgba(5, 17, 57, 0.1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(5, 17, 57, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(5, 17, 57, 0.1)";
        }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        onClick={scrollRight}
        className="
          absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2
          text-white p-3 rounded-full
          transition-all duration-300
          z-20
          hidden md:flex
          items-center justify-center
          hover:bg-opacity-30
        "
        style={{
          backgroundColor: "rgba(5, 17, 57, 0.1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(5, 17, 57, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(5, 17, 57, 0.1)";
        }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button> */}

      {/* Custom CSS for hiding scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style></div>
  )
}

export default StepCardsContainer