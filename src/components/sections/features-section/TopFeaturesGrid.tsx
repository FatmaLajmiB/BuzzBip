import React from "react";
import FeatureCard from "./FeatureCard";

function TopFeaturesGrid() {
  const svg1 = `<svg width="384" height="406" viewBox="0 0 384 406" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.75">
    <g filter="url(#filter0_f_1726_13228)">
    <ellipse cx="140.902" cy="142.403" rx="140.902" ry="142.403" transform="matrix(0.055519 1.0125 -0.982781 0.0724645 199.019 -22.8867)" fill="url(#paint0_linear_1726_13228)"/>
    </g>
    <g filter="url(#filter1_f_1726_13228)">
    <rect width="151.074" height="198.664" transform="matrix(-0.532631 0.844944 -0.846006 -0.533664 114.806 73.6021)" fill="url(#paint1_linear_1726_13228)"/>
    </g>
    </g>
    <defs>
    <filter id="filter0_f_1726_13228" x="-273.283" y="-212.946" width="680.347" height="686.084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1726_13228"/>
    </filter>
    <filter id="filter1_f_1726_13228" x="-333.732" y="-232.418" width="648.538" height="633.669" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1726_13228"/>
    </filter>
    <linearGradient id="paint0_linear_1726_13228" x1="140.902" y1="0" x2="140.902" y2="284.806" gradientUnits="userSpaceOnUse">
    <stop stop-color="#7F51F2" stop-opacity="0"/>
    <stop offset="1" stop-color="#7F51F2"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1726_13228" x1="75.5372" y1="0" x2="75.5372" y2="198.664" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00FBAE" stop-opacity="0"/>
    <stop offset="1" stop-color="#00FBAE" stop-opacity="0.5"/>
    </linearGradient>
    </defs>
    </svg>`;

  const svg2 = `<svg width="258" height="172" viewBox="0 0 258 172" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.3">
    <path opacity="0.5" d="M152.251 200C127.778 200 107.878 179.938 107.878 155.126C107.878 130.376 127.716 110.251 152.251 110.251H193.658H208.243H232.283C256.756 110.251 276.656 130.314 276.656 155.126C276.656 174.501 281.477 185.688 286.359 192.063C291.179 198.438 296 200 296 200H152.251Z" stroke="#7F51F2" stroke-width="2" stroke-miterlimit="10"/>
    <path opacity="0.5" d="M139.953 97.5903C164.413 97.5903 184.303 77.5635 184.303 52.7951C184.303 28.0892 164.475 8 139.953 8H122.288H107.711H83.6828C59.2227 8 39.3334 28.0268 39.3334 52.7951C39.3334 72.1357 34.5155 83.3033 29.6359 89.6669C24.818 96.0306 20.0001 97.5903 20.0001 97.5903H139.953Z" stroke="#00FBAE" stroke-width="2" stroke-miterlimit="10"/>
    </g>
    </svg>`;

  // Define SVG strings for the Brain and Shopping Cart icons
  const brainSvg = `<svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1734_15777)">
<path d="M1 28C1 12.536 13.536 0 29 0C44.464 0 57 12.536 57 28C57 43.464 44.464 56 29 56C13.536 56 1 43.464 1 28Z" fill="#FF7F3C" />
<path d="M22.9374 15.6167C23.4371 14.3498 25.2302 14.3498 25.7299 15.6167L27.2783 19.5429C27.4309 19.9297 27.7371 20.2359 28.1239 20.3885L32.0501 21.937C33.3171 22.4366 33.3171 24.2297 32.0501 24.7294L28.1239 26.2778C27.7371 26.4304 27.4309 26.7366 27.2783 27.1234L25.7299 31.0496C25.2302 32.3166 23.4371 32.3166 22.9374 31.0496L21.389 27.1234C21.2364 26.7366 20.9302 26.4304 20.5434 26.2778L16.6172 24.7294C15.3502 24.2297 15.3503 22.4366 16.6172 21.937L20.5434 20.3885C20.9302 20.2359 21.2364 19.9297 21.389 19.5429L22.9374 15.6167Z" fill="white"/>
<path d="M35.5656 29.8556C35.8403 29.1595 36.8256 29.1595 37.1003 29.8556L38.3011 32.9005C38.385 33.1132 38.5532 33.2815 38.7659 33.3653L41.8108 34.5661C42.507 34.8408 42.507 35.8261 41.8108 36.1008L38.7659 37.3016C38.5532 37.3855 38.385 37.5537 38.3011 37.7664L37.1003 40.8113C36.8256 41.5075 35.8403 41.5075 35.5656 40.8113L34.3648 37.7664C34.281 37.5537 34.1127 37.3855 33.9 37.3016L30.8551 36.1008C30.159 35.8261 30.159 34.8408 30.8551 34.5661L33.9 33.3653C34.1127 33.2815 34.281 33.1132 34.3648 32.9005L35.5656 29.8556Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1734_15777" x="0" y="0" width="58" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.960784 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1734_15777"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1734_15777" result="shape"/>
</filter>
</defs>
</svg>
`;

  const shoppingCartSvg = `<svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1729_13856)">
<path d="M1 28C1 12.536 13.536 0 29 0C44.464 0 57 12.536 57 28C57 43.464 44.464 56 29 56C13.536 56 1 43.464 1 28Z" fill="#7F51F2" />
<path d="M34.6663 42.0002C35.955 42.0002 36.9997 40.9555 36.9997 39.6668C36.9997 38.3782 35.955 37.3335 34.6663 37.3335C33.3777 37.3335 32.333 38.3782 32.333 39.6668C32.333 40.9555 33.3777 42.0002 34.6663 42.0002Z" fill="white"/>
<path d="M24.0003 42.0002C25.289 42.0002 26.3337 40.9555 26.3337 39.6668C26.3337 38.3782 25.289 37.3335 24.0003 37.3335C22.7117 37.3335 21.667 38.3782 21.667 39.6668C21.667 40.9555 22.7117 42.0002 24.0003 42.0002Z" fill="white"/>
<path d="M19.4537 17.2532L19.187 20.5198C19.1337 21.1465 19.627 21.6665 20.2537 21.6665H40.667C41.227 21.6665 41.6937 21.2398 41.7337 20.6798C41.907 18.3198 40.107 16.3998 37.747 16.3998H21.3603C21.227 15.8132 20.9603 15.2532 20.547 14.7865C19.8803 14.0798 18.947 13.6665 17.987 13.6665H15.667C15.1203 13.6665 14.667 14.1198 14.667 14.6665C14.667 15.2132 15.1203 15.6665 15.667 15.6665H17.987C18.4003 15.6665 18.787 15.8398 19.067 16.1332C19.347 16.4398 19.4803 16.8398 19.4537 17.2532Z" fill="white"/>
<path d="M40.3464 23.6665H19.8931C19.3331 23.6665 18.8797 24.0932 18.8264 24.6398L18.3464 30.4398C18.1597 32.7198 19.9464 34.6665 22.2264 34.6665H37.0531C39.0531 34.6665 40.8131 33.0265 40.9597 31.0265L41.3997 24.7998C41.4531 24.1865 40.9731 23.6665 40.3464 23.6665Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1729_13856" x="0" y="0" width="58" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.909804 0 0 0 0 0.960784 0 0 0 0 1 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1729_13856"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1729_13856" result="shape"/>
</filter>
</defs>
</svg>
`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 mb-5 px-4 md:px-0">
      {/* First Feature Card (Different) */}
      <FeatureCard
        title="Unlike any tool you’ve experienced previously."
        description="The only growth platform designed to turn conversations into conversions, automatically."
        bgColorClass="bg-[#051139]"
        svgs={[
          { svgString: svg1, positionClass: "inset-0" },
          { svgString: svg2, positionClass: "bottom-0 right-0" },
        ]}
        descriptionColorClass="text-white"
        textcolor="text-neutral-purple-50 mb-15 text-[40px] leading-[44px]"
      />

      {/* Second Feature Card */}
      <FeatureCard
        iconSvg={brainSvg}
        title="AI That Knows Your Customers"
        description="It doesn’t just automate, it predicts. Buzzblip deploys behavioral real-time data & sends the right message at the right time to the right customer."
        bgColorClass="bg-neutral-purple-50 "
      />

      {/* Third Feature Card */}
      <FeatureCard
        iconSvg={shoppingCartSvg}
        title="Made for E-commerce, Not Adapted to It"
        description="Every feature is tailored for online stores: cart recovery, product offers, post-purchase follow-ups, and more. This isn't generic, this is made for you."
        bgColorClass="bg-neutral-purple-50 "
      />
    </div>
  );
}

export default TopFeaturesGrid;
