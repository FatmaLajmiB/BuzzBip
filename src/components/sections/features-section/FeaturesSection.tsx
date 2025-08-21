"use client";

import React from 'react'
import TopFeaturesGrid from './TopFeaturesGrid'
import MiddleFeaturesGrid from './MiddleFeaturesGrid';
import BottomFeaturesGrid from './BottomFeaturesGrid';

function FeaturesSection() {
  return (
    // Removed min-h-screen to allow it to grow with content.
    // Adjusted padding to be more responsive: py-16 for vertical, px-4 md:px-8 for horizontal.
    // Added items-center to horizontally center content within the flex column.
    <div className="bg-white flex flex-col items-center py-16 px-4 md:px-8 relative overflow-hidden rounded-[32px]">
        <TopFeaturesGrid />
        <MiddleFeaturesGrid/>
        <BottomFeaturesGrid/>
    </div>
  )
}

export default FeaturesSection
