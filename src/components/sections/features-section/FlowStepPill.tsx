import React from 'react';

// Define the props for the FlowStepPill component
interface FlowStepPillProps {
  iconSvg: string;
  smallerText: string;
  biggerText: string;
  bgColorClass?: string; // Optional background color class for the pill
  textColorClass?: string; // Optional text color class for the texts
}

function FlowStepPill({ iconSvg, smallerText, biggerText, bgColorClass = 'bg-gray-200', textColorClass = 'text-gray-900' }: FlowStepPillProps) {
  return (
    <div
      className={`
        relative /* Important for positioning children */
        ${bgColorClass}
        w-[153.6px] /* Width: 153.59999084472656 */
        h-[45.813087463378906px] /* Height: 45.813087463378906 */
        rounded-full /* To make it pill-shaped */
        opacity-100 /* Opacity: 1 */
        rotate-0 /* Angle: 0 deg */
        flex items-center /* Use flex to align content */
        overflow-hidden /* Hide overflow if content is too large */
      `}
      style={{ top: '2.41px', left: '4.8px' }} /* Position relative to its parent if needed, as per 'top' and 'left' properties */
    >
      {/* Left Icon */}
      <div
        className={`
          absolute
          w-[31.2px] /* Width: 31.200000762939453 */
          h-[31.345792770385742px] /* Height: 31.345792770385742 */
          opacity-100 /* Opacity: 1 */
          rotate-0 /* Angle: 0 deg */
          ${textColorClass} /* Apply text color to icon if it inherits fill/stroke */
        `}
        style={{ top: '9.65px', left: '12px' }} /* Position within the pill */
        dangerouslySetInnerHTML={{ __html: iconSvg }}
      />

      {/* Smaller Text */}
      <p
        className={`
          absolute
          w-[25.366802215576172px] /* Width: 25.366802215576172 */
          h-[7.624261856079102px] /* Height: 7.624261856079102 */
          text-xs /* Adjusted font size for "smaller text" */
          font-normal /* Example font weight */
          opacity-100 /* Opacity: 1 */
          rotate-0 /* Angle: 0 deg */
          ${textColorClass}
        `}
        style={{ top: '14.82px', left: '50.68px' }} /* Position within the pill */
      >
        {smallerText}
      </p>

      {/* Bigger Text */}
      <p
        className={`
          absolute
          w-[92.09159851074219px] /* Width: 92.09159851074219 */
          h-[8.105298042297363px] /* Height: 8.105298042297363 */
          text-sm font-semibold /* Adjusted font size and weight for "bigger text" */
          opacity-100 /* Opacity: 1 */
          rotate-0 /* Angle: 0 deg */
          ${textColorClass}
        `}
        style={{ top: '25.73px', left: '50.78px' }} /* Position within the pill */
      >
        {biggerText}
      </p>
    </div>
  );
}

export default FlowStepPill;
