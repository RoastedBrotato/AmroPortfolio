import React from 'react';

export const HeroSection = () => {
  return (
    <div className="mb-20 relative">
      <div className="absolute top-0 right-0 w-64 h-64 -z-10">
        {/* Your decorative SVG elements */}
      </div>
      <h1 className="text-6xl font-serif mb-6 leading-tight">
        Hello Creative Souls! I'm
        <span className="block">
          <span className="text-accent">Amro</span> Smadi
        </span>
      </h1>
      <p className="text-xl max-w-2xl font-light">
      I'm here to turn your wildest ideas into reality — one pixel, word, and squiggle at a time.
      </p>
    </div>
  );
};