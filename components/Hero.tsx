import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import MagicButton from '@/components/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import Image from 'next/image';
import pfp from '@/public/pfp.jpeg';

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-rose-950 bg-grid-black/[0.2] dark:bg-grid-white/[0.05] scroll-smooth">
      {/* Spotlights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-[80vh] w-[80vw]" fill="white" />
        <Spotlight className="top-40 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-80 left-60 h-[60vh] w-[20vw]" fill="blue" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Profile Picture */}
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <Image src={pfp} width={200} height={200} alt="Profile Picture" />
        </div>

        {/* Text Effect */}
        <TextGenerateEffect
          className="mt-6 text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white"
          words="Hi, I'm Ayush, a web3 Developer"
        />

        {/* Magic Button */}
        <a href="#about" className="mt-8">
          <MagicButton
            title="Show My Work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
}
