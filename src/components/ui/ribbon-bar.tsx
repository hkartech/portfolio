'use client';
import React from 'react';

const RibbonBar = () => {
  return (
    <div className="w-full overflow-hidden py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="marquee">
        <div className="track">
          {[...Array(15)].map((_, i) => (
            <span
              key={i}
              className="mx-8 text-xs sm:text-base tracking-widest uppercase"
            >
              Born to Design. Built to inspire
            </span>
          ))}
          {/* duplicate for smooth infinite scroll */}
          {[...Array(15)].map((_, i) => (
            <span
              key={`dup-${i}`}
              className="mx-8 text-xs sm:text-base tracking-widest uppercase"
            >
              Born to Design. Built to inspire
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .track {
          display: flex;
          width: max-content;
          animation: scroll 100s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default RibbonBar;