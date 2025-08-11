import React from 'react';

export function Container({ 
	children, 
	className = "", 
	maxWidth = "max-w-[424px]",
	showBorder = true,
	selectNone = true,
	text = "Default Text",
	showResetButton = false,
	disableResetButton = false,
	onReset,
	borderColor = "#5750E3",
	innerBackgroundColor = "white",
	outerBackgroundColor = "white",
	...props 
}) {
	const baseClasses = [
		"w-full",
		"min-w-[300px]",
		"min-h-[500px]",
		"h-[500px]",
		maxWidth,
		"mx-auto",
		"px-2",
		"rounded-lg",
		"flex",
		"flex-col",
	];

	if (showBorder) {
		baseClasses.push("border border-gray-200");
	}

	if (selectNone) {
		baseClasses.push("select-none");
	}

	const containerClasses = `${baseClasses.join(" ")} ${className}`.trim();

	return (
		<div className={containerClasses} style={{ backgroundColor: outerBackgroundColor }} {...props}>
			<div className="p-4 w-[100%] h-[100%]">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-sm font-medium select-none" style={{ color: borderColor }}>{text}</h2>
					{showResetButton && (
						<button 
							className={`text-sm px-3 py-1 rounded border transition-colors ${
								disableResetButton 
									? 'text-gray-300 border-gray-200' 
									: 'text-gray-500 hover:text-gray-700 border-gray-300 hover:border-gray-400'
							}`}
							onClick={onReset}
							disabled={disableResetButton}
							title="Reset interactive"
						>
							Reset
						</button>
					)}
				</div>
				<div className="w-full h-[90%]">
					<div 
						className="w-full border rounded-md relative overflow-hidden" 
						style={{ 
							minHeight: '420px', 
							height: '100%', 
							width: '100%',
							backgroundColor: innerBackgroundColor,
							borderColor: `${borderColor}4D` // 4D adds 30% opacity like the original /30
						}}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
