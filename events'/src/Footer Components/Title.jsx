// import React from 'react';
import { Trophy } from 'lucide-react';

const Title = () => {
  return (
    <div className="bg-black py-12 md:py-16 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Trophy className="w-12 h-12 text-[#E8DCC4] animate-bounce" />
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#E8DCC4] tracking-[0.2em] relative">
            <span className="relative inline-block hover:scale-105 transition-transform duration-300">
              <span className="absolute -inset-1 blur-sm bg-[#D4C5A9]/20 rounded-lg animate-pulse"></span>
              <span className="relative">INTER IIIT</span>
            </span>
            <br />
            <span className="relative inline-block mt-2 hover:scale-105 transition-transform duration-300">
              <span className="absolute -inset-1 blur-sm bg-[#D4C5A9]/20 rounded-lg animate-pulse"></span>
              <span className="relative">SPORTS MEET</span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Title;