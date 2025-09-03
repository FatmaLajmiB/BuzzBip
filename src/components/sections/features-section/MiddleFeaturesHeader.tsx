import React from 'react'

interface MiddleFeaturesHeaderProps {
	title: React.ReactNode;
	description: React.ReactNode; // Already React.ReactNode, which is good
	titleColorClass?: string;
	descriptionColorClass?: string;
    iconSvg?: string; // Added optional iconSvg prop
}

function MiddleFeaturesHeader({ title, description, titleColorClass = 'text-base-black', descriptionColorClass = 'text-neutral-purple-700', iconSvg }: MiddleFeaturesHeaderProps) {
	return (
		<div className="mb-6">
            {iconSvg && ( // Conditionally render the icon if provided
                <div
                    className="w-12 h-12 mb-10 text-purple-600" // Adjust size and color as needed
                    dangerouslySetInnerHTML={{ __html: iconSvg }}
                />
            )}
			<h3
				className={`
					text-[32px]
					font-semibold
					leading-[36px]
					tracking-[0.0075em]
					[font-family:sans-serif]
					mb-5
					${titleColorClass}
				`}
				style={{ fontFamily: 'Parkinsans, sans-serif' }}
			>
				{title}
			</h3>
			{/* Changed <p> to <div> to allow nesting of block-level elements like <div> and <img> */}
			<div
				className={`
					text-[18px]
					font-normal
					leading-[24px]
					tracking-[0.0075em]
					[font-family:sans-serif]
					${descriptionColorClass}
				`}
				style={{ fontFamily: 'Parkinsans, sans-serif' }}
			>
				{description}
			</div>
		</div>
	);
}

export default MiddleFeaturesHeader

