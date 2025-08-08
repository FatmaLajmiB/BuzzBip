import React from 'react'
import {
  Whatsapp,
} from 'iconsax-react';

function HeroText() {
  return (
    <div className="flex flex-col items-start text-white w-[619px] h-[288px] pr-8 ">
      <h1 className="text-display-2-semiBold text-secondary-500 mb-2">
        Texts
      </h1>
      <h1 className="text-display-2-semiBold mb-2">
        Like a Human.
      </h1>
      <h1 className="text-display-2-semiBold text-primary-500 mb-2">
        Sells
      </h1>
      <h1 className="text-display-2-semiBold mb-8">
        Like a Machine.
      </h1>
      {/* Subtitles/Partnership Info */}
      <div className="flex items-center space-x-4 mb-8 text-sm text-label-2-medium">
        {/* WhatsApp Business API Icon with brand colors and styling */}
        <span className="flex items-center space-x-2 bg-white rounded-[24px] border border-success-500 py-1 px-3">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.02832 1.7356C9.69323 1.73654 11.2531 2.38263 12.4277 3.55591C13.6023 4.72925 14.2477 6.28631 14.2471 7.94458C14.2453 11.3635 11.4558 14.1476 8.02832 14.1477H8.02539L7.63574 14.136C6.73018 14.079 5.84803 13.8251 5.05371 13.3928L4.87988 13.2981L4.68848 13.3479L1.96387 14.0608L2.68848 11.4231L2.74414 11.2209L2.63867 11.0403C2.09505 10.1002 1.80932 9.03338 1.80957 7.9397C1.81096 4.62708 4.42842 1.90982 7.70898 1.74341L8.02832 1.7356ZM8.0293 1.86841C4.67456 1.86895 1.94487 4.59011 1.94336 7.93872C1.94171 9.08226 2.26451 10.203 2.87402 11.1711H2.875L2.88965 11.1946L2.38379 13.0393L2.1543 13.8743L2.99316 13.6555L4.9043 13.1545L4.92871 13.1692C5.86335 13.7228 6.93423 14.0153 8.02539 14.0159H8.02832C11.3813 14.0158 14.1107 11.2935 14.1123 7.94458C14.1129 6.42423 13.5567 4.98617 12.541 3.86743L12.332 3.64868C11.7684 3.0827 11.0978 2.634 10.3594 2.32837C9.62077 2.02269 8.82882 1.86655 8.0293 1.86841Z" fill="#B3B3B3" stroke="#2E9042"/>
            <path d="M1.18359 14.6954L2.13684 11.2216C1.54794 10.2026 1.2386 9.04658 1.24003 7.87017C1.24158 4.17386 4.25537 1.16675 7.95886 1.16675C9.75605 1.16766 11.4429 1.86571 12.7116 3.13284C13.9802 4.39998 14.6782 6.08427 14.6776 7.87555C14.676 11.5716 11.6617 14.5793 7.95877 14.5793H7.95585C6.83148 14.5788 5.72665 14.2973 4.74528 13.7632L1.18359 14.6954Z" fill="white"/>
            <path d="M7.96191 2.79932H7.96289C8.63048 2.79778 9.29159 2.92887 9.9082 3.18408C10.5249 3.43932 11.0852 3.81409 11.5557 4.28662L11.5576 4.28857C12.0304 4.75835 12.4051 5.31699 12.6602 5.93213C12.9153 6.54752 13.046 7.20761 13.0439 7.87354V7.87549C13.0427 10.6707 10.7616 12.9468 7.95898 12.9468H7.95801C7.04471 12.9463 6.14972 12.7015 5.37012 12.2397H5.36914L5.16504 12.1196L4.98633 12.0132L4.78418 12.0659L3.50781 12.3989L3.84375 11.1792L3.90234 10.9663L3.78418 10.7798L3.65137 10.5698C3.1425 9.7616 2.87363 8.82598 2.875 7.87158V7.87061C2.87619 5.07579 5.15671 2.79932 7.96191 2.79932Z" stroke="#2E9042"/>
            <path d="M7.96153 2.29933C4.88117 2.29933 2.3761 4.79869 2.37501 7.87079C2.37349 8.91982 2.66946 9.94786 3.22872 10.8361L3.36158 11.0469L2.79734 13.1028L4.91094 12.5497L5.11503 12.6704C5.97221 13.1781 6.95504 13.4466 7.95733 13.4472H7.95943C11.0374 13.4472 13.5425 10.9475 13.5437 7.87525C13.546 7.14299 13.4028 6.41754 13.1223 5.7409C12.8418 5.06426 12.4296 4.44987 11.9096 3.93331C11.3924 3.41392 10.7772 3.00207 10.0995 2.7216C9.42185 2.44112 8.69516 2.2976 7.96153 2.29933Z" fill="url(#paint0_linear_2411_86189)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27974 5.0678C6.15391 4.78881 6.0215 4.78316 5.90197 4.77833L5.58017 4.77441C5.46822 4.77441 5.28632 4.81634 5.13254 4.98404C4.97876 5.15174 4.54492 5.55704 4.54492 6.38141C4.54492 7.20579 5.14651 8.00236 5.23034 8.11428C5.31417 8.2262 6.39169 9.97183 8.09811 10.6434C9.51616 11.2016 9.80472 11.0906 10.1126 11.0627C10.4206 11.0348 11.1059 10.6574 11.2457 10.2661C11.3855 9.87485 11.3856 9.53964 11.3437 9.46955C11.3017 9.39946 11.1898 9.35781 11.0218 9.27396C10.8538 9.19011 10.0285 8.7848 9.87466 8.72884C9.7208 8.67288 9.60893 8.64509 9.49689 8.81279C9.38485 8.98048 9.06351 9.35772 8.96552 9.46955C8.86754 9.58138 8.76974 9.59541 8.60172 9.51165C8.4337 9.4279 7.89311 9.2509 7.25171 8.68008C6.75267 8.23595 6.4158 7.68747 6.31773 7.51986C6.21966 7.35225 6.30732 7.26147 6.39151 7.17799C6.46685 7.10289 6.55935 6.98231 6.64345 6.88451C6.72755 6.78672 6.75522 6.71681 6.81111 6.60517C6.86699 6.49352 6.83914 6.39545 6.79714 6.31169C6.75513 6.22793 6.42895 5.39919 6.27974 5.0678Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_2411_86189" x1="7.84565" y1="2.96831" x2="7.90205" y2="12.4948" gradientUnits="userSpaceOnUse">
            <stop stop-color="#57D163"/>
            <stop offset="1" stop-color="#23B33A"/>
            </linearGradient>
            </defs>
        </svg>

          <span className='text-success-700 whitespace-nowrap'>Powered by Official WhatsApp Business API</span>
        </span>
        <span className="flex items-center space-x-2 bg-white rounded-[24px] border border-neutral-purple-200 py-1 px-3">
          {/* Official Meta Business Partners Infinity Logo - Updated SVG */}
          <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
            <title>Meta</title>
            <path d="M6.897 4h-.024l-.031 2.615h.022c1.715 0 3.046 1.357 5.94 6.246l.175.297.012.02 1.62-2.438-.012-.019a48.763 48.763 0 00-1.098-1.716 28.01 28.01 0 00-1.175-1.629C10.413 4.932 8.812 4 6.896 4z" fill="url(#lobe-icons-meta-fill-0)"></path>
            <path d="M6.873 4C4.95 4.01 3.247 5.258 2.02 7.17a4.352 4.352 0 00-.01.017l2.254 1.231.011-.017c.718-1.083 1.61-1.774 2.568-1.785h.021L6.896 4h-.023z" fill="url(#lobe-icons-meta-fill-1)"></path>
            <path d="M2.019 7.17l-.011.017C1.2 8.447.598 9.995.274 11.664l-.005.022 2.534.6.004-.022c.27-1.467.786-2.828 1.456-3.845l.011-.017L2.02 7.17z" fill="url(#lobe-icons-meta-fill-2)"></path>
            <path d="M2.807 12.264l-2.533-.6-.005.022c-.177.918-.267 1.851-.269 2.786v.023l2.598.233v-.023a12.591 12.591 0 01.21-2.44z" fill="url(#lobe-icons-meta-fill-3)"></path>
            <path d="M2.677 15.537a5.462 5.462 0 01-.079-.813v-.022L0 14.468v.024a8.89 8.89 0 00.146 1.652l2.535-.585a4.106 4.106 0 01-.004-.022z" fill="url(#lobe-icons-meta-fill-4)"></path>
            <path d="M3.27 16.89c-.284-.31-.484-.756-.589-1.328l-.004-.021-2.535.585.004.021c.192 1.01.568 1.85 1.106 2.487l.014.017 2.018-1.745a2.106 2.106 0 01-.015-.016z" fill="url(#lobe-icons-meta-fill-5)"></path>
            <path d="M10.78 9.654c-1.528 2.35-2.454 3.825-2.454 3.825-2.035 3.2-2.739 3.917-3.871 3.917a1.545 1.545 0 01-1.186-.508l-2.017 1.744.014.017C2.01 19.518 3.058 20 4.356 20c1.963 0 3.374-.928 5.884-5.33l1.766-3.13a41.283 41.283 0 00-1.227-1.886z" fill="#0082FB"></path>
            <path d="M13.502 5.946l-.016.016c-.4.43-.786.908-1.16 1.416.378.483.768 1.024 1.175 1.63.48-.743.928-1.345 1.367-1.807l.016-.016-1.382-1.24z" fill="url(#lobe-icons-meta-fill-6)"></path>
            <path d="M20.918 5.713C19.853 4.633 18.583 4 17.225 4c-1.432 0-2.637.787-3.723 1.944l-.016.016 1.382 1.24.016-.017c.715-.747 1.408-1.12 2.176-1.12.826 0 1.6.39 2.27 1.075l.015.016 1.589-1.425-.016-.016z" fill="#0082FB"></path>
            <path d="M23.998 14.125c-.06-3.467-1.27-6.566-3.064-8.396l-.016-.016-1.588 1.424.015.016c1.35 1.392 2.277 3.98 2.361 6.971v.023h2.292v-.022z" fill="url(#lobe-icons-meta-fill-7)"></path>
            <path d="M23.998 14.15v-.023h-2.292v.022c.004.14.006.282.006.424 0 .815-.121 1.474-.368 1.95l-.011.022 1.708 1.782.013-.02c.62-.96.946-2.293.946-3.91 0-.083 0-.165-.002-.247z" fill="url(#lobe-icons-meta-fill-8)"></path>
            <path d="M21.344 16.52l-.011.02c-.214.402-.519.67-.917.787l.778 2.462a3.493 3.493 0 00.438-.182 3.558 3.558 0 001.366-1.218l.044-.065.012-.02-1.71-1.784z" fill="url(#lobe-icons-meta-fill-9)"></path>
            <path d="M19.92 17.393c-.262 0-.492-.039-.718-.14l-.798 2.522c.449.153.927.222 1.46.222.492 0 .943-.073 1.352-.215l-.78-2.462c-.167.05-.341.075-.517.073z" fill="url(#lobe-icons-meta-fill-10)"></path>
            <path d="M18.323 16.534l-.014-.017-1.836 1.914.016.017c.637.682 1.246 1.105 1.937 1.337l.797-2.52c-.291-.125-.573-.353-.9-.731z" fill="url(#lobe-icons-meta-fill-11)"></path>
            <path d="M18.309 16.515c-.55-.642-1.232-1.712-2.303-3.44l-1.396-2.336-.011-.02-1.62 2.438.012.02.989 1.668c.959 1.61 1.74 2.774 2.493 3.585l.016.016 1.834-1.914a2.353 2.353 0 01-.014-.017z" fill="url(#lobe-icons-meta-fill-12)"></path>
            <defs>
              <linearGradient id="lobe-icons-meta-fill-0" x1="75.897%" x2="26.312%" y1="89.199%" y2="12.194%"><stop offset=".06%" stop-color="#0867DF"></stop><stop offset="45.39%" stop-color="#0668E1"></stop><stop offset="85.91%" stop-color="#0064E0"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-1" x1="21.67%" x2="97.068%" y1="75.874%" y2="23.985%"><stop offset="13.23%" stop-color="#0064DF"></stop><stop offset="99.88%" stop-color="#0064E0"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-2" x1="38.263%" x2="60.895%" y1="89.127%" y2="16.131%"><stop offset="1.47%" stop-color="#0072EC"></stop><stop offset="68.81%" stop-color="#0064DF"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-3" x1="47.032%" x2="52.15%" y1="90.19%" y2="15.745%"><stop offset="7.31%" stop-color="#007CF6"></stop><stop offset="99.43%" stop-color="#0072EC"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-4" x1="52.155%" x2="47.591%" y1="58.301%" y2="37.004%"><stop offset="7.31%" stop-color="#007FF9"></stop><stop offset="100%" stop-color="#007CF6"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-5" x1="37.689%" x2="61.961%" y1="12.502%" y2="63.624%"><stop offset="7.31%" stop-color="#007FF9"></stop><stop offset="100%" stop-color="#0082FB"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-6" x1="34.808%" x2="62.313%" y1="68.859%" y2="23.174%"><stop offset="27.99%" stop-color="#007FF8"></stop><stop offset="91.41%" stop-color="#0082FB"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-7" x1="43.762%" x2="57.602%" y1="6.235%" y2="98.514%"><stop offset="0%" stop-color="#0082FB"></stop><stop offset="99.95%" stop-color="#0081FA"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-8" x1="60.055%" x2="39.88%" y1="4.661%" y2="69.077%"><stop offset="6.19%" stop-color="#0081FA"></stop><stop offset="100%" stop-color="#0080F9"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-9" x1="30.282%" x2="61.081%" y1="59.32%" y2="33.244%"><stop offset="0%" stop-color="#027AF3"></stop><stop offset="100%" stop-color="#0080F9"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-10" x1="20.433%" x2="82.112%" y1="50.001%" y2="50.001%"><stop offset="0%" stop-color="#0377EF"></stop><stop offset="99.94%" stop-color="#0279F1"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-11" x1="40.303%" x2="72.394%" y1="35.298%" y2="57.811%"><stop offset=".19%" stop-color="#0471E9"></stop><stop offset="100%" stop-color="#0377EF"></stop></linearGradient>
              <linearGradient id="lobe-icons-meta-fill-12" x1="32.254%" x2="68.003%" y1="19.719%" y2="84.908%"><stop offset="27.65%" stop-color="#0867DF"></stop><stop offset="100%" stop-color="#0471E9"></stop></linearGradient>
            </defs>
          </svg>
          <span className='whitespace-nowrap text-neutral-purple-900'>Meta Business Partners</span>
        </span>
      </div>
    {/* Descriptive Paragraph */}
      <p className="text-base leading-relaxed mb-8 text-label-3-medium w-[619px] h-[72px]">
        Buzzbip turns every customer conversation into a conversion opportunity by leveraging AI to understand intent and personalize experiences, boosting sales across WhatsApp and SMS.
      </p>

      {/* Call-to-Action Button */}
      <button
        className="w-[239px] h-[56px] px-[20px] py-3 rounded-full bg-secondary-500 text-neutral-purple-900 text-label-3-medium
                   hover:bg-secondary-600 transition-colors duration-200
                   flex items-center space-x-2 whitespace-nowrap border border-secondary-500"
      >
        <span>Start Winning Now</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4301 18.8201C14.2401 18.8201 14.0501 18.7501 13.9001 18.6001C13.6101 18.3101 13.6101 17.8301 13.9001 17.5401L19.4401 12.0001L13.9001 6.46012C13.6101 6.17012 13.6101 5.69012 13.9001 5.40012C14.1901 5.11012 14.6701 5.11012 14.9601 5.40012L21.0301 11.4701C21.3201 11.7601 21.3201 12.2401 21.0301 12.5301L14.9601 18.6001C14.8101 18.7501 14.6201 18.8201 14.4301 18.8201Z" fill="#43444C"/>
<path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill="#43444C"/>
</svg>

      </button>
    </div>
    
  )
}

export default HeroText