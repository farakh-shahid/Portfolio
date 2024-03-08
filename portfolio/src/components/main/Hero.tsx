import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full' id='about-me'>
      <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute hidden md:block top-[-25em] md:top-[-22em]  h-full w-full left-0 z-[1] object-cover filter'
      >
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
