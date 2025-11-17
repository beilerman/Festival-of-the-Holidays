
import React, { useMemo } from 'react';

const Header: React.FC = () => {
  const stars = useMemo(() => {
    const starCount = 30;
    return Array.from({ length: starCount }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        animationName: 'twinkle',
        animationDuration: `${Math.random() * 5 + 2}s`,
        animationDelay: `${Math.random() * 5}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
      };
      return <div key={i} className="absolute bg-white rounded-full shadow-[0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#FFD700]" style={style} />;
    });
  }, []);

  return (
    <header className="relative text-center p-4 md:p-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">{stars}</div>
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B91C1C] to-[#FFD700] mb-2">
        EPCOT Festival of the Holidays
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-[#FFD700] mb-4">
        A Diabetic's Nutritional Guide
      </h2>
      <p className="max-w-3xl mx-auto text-[#D1C4A8]">
        Navigating festival food with diabetes can be tricky. This guide provides estimated nutritional information, with a focus on carbohydrate counts, to help you make informed decisions and enjoy the holiday season.
      </p>
       <p className="max-w-3xl mx-auto text-xs text-[#A89C8C] mt-2">
        Disclaimer: All nutritional values are estimates and can vary. This guide is not a substitute for professional medical advice. Always consult with your healthcare provider for personal dietary guidance.
      </p>
    </header>
  );
};

export default Header;