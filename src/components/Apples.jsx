import React from 'react';

const Apples = ({ 
  count = 5, 
  onClick, 
  onHover,
  className = "",
  size = "text-2xl",
  disabled = false,
  isAnimating = false,
  side = "left", // left or right, for accessibility
  fadeOut = false // Controls fade-out animation
}) => {
  // Debug logging
  console.log(`Apples ${side}: fadeOut=${fadeOut}, count=${count}`);
  
  // Create array of apples based on count
  const apples = Array.from({ length: count }, (_, index) => index);

  const handleClick = () => {
    if (!disabled && !isAnimating && onClick) {
      onClick(count, side);
    }
  };

  const baseClasses = [
    "flex",
    "justify-center",
    "items-center",
    "w-20", // Even smaller width for very small screens
    "sm:w-24", // Small width for mobile
    "md:w-30" // Larger width for screens 390px and up
  ];

  const innerClasses = [
    "inline-flex",
    "flex-wrap",
    "justify-center",
    "items-center",
    "gap-1",
    "p-1",
    "rounded-lg",
    "select-none",
    "z-[1000]"
  ];

  // Add fade-out animation class with higher priority
  if (fadeOut) {
    innerClasses.push("opacity-0", "scale-75", "transition-all", "duration-1000", "ease-in-out", "pointer-events-none");
  } else {
    // Only add transition classes when not fading out
    innerClasses.push("transition-all", "duration-200");
  }

  // Add interactive classes if clickable and not fading out
  if (onClick && !disabled && !isAnimating && !fadeOut) {
    innerClasses.push(
      "cursor-pointer",
      "hover:bg-red-50",
      "hover:scale-105",
      "active:scale-95",
      "border-2",
      "border-transparent",
      "hover:border-red-200"
    );
  }

  // Add disabled styling (but not when fading out)
  if ((disabled || isAnimating) && !fadeOut) {
    innerClasses.push("opacity-50");
  }

  const containerClasses = `${baseClasses.join(" ")} ${className}`.trim();
  const innerContainerClasses = innerClasses.join(" ");

  return (
    <div className={containerClasses}>
      <div 
        className={innerContainerClasses}
        onClick={handleClick}
        onMouseEnter={() => onHover && !isAnimating && onHover()}
        role={onClick ? "button" : undefined}
        tabIndex={onClick && !disabled && !isAnimating ? 0 : undefined}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && onClick && !disabled && !isAnimating) {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-label={`${count} apple${count !== 1 ? 's' : ''} on the ${side} side`}
        title={`${count} apple${count !== 1 ? 's' : ''}`}
      >
        {apples.map((_, index) => (
          <div 
            key={index}
            className={`${size} flex items-center justify-center transition-transform duration-100 hover:scale-110`}
            role="img" 
            aria-label="apple"
          >
            🍎
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apples;
