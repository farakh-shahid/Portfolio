'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '../../utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-[13px]'>Fullstack Developer</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
            Hi, There{' '}
            <span className='wave' role='img' aria-labelledby='wave'>
              👋🏻
            </span>
            <br />
            <span className='' style={{color: 'rgb(255, 1, 79)'}}>
              {' '}
              I&apos;m
            </span>
            <span className='' style={{color: 'rgb(255, 1, 79)'}}>
              {' '}
              Muhammad Farrukh{' '}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          Passionate and skilled full-stack developer with extensive experience
          in developing and maintaining high-performance web applications.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href='/Farrukh_Resume.pdf'
          className='py-2 button-primary cursor-pointer text-white  rounded-lg max-w-[200px] flex items-center justify-center gap-2'
          download
        >
          <span>Download Resume</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
            />
          </svg>
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex justify-center items-center'
      >
        <Image
          src='/mainIconsdark.svg'
          alt='work icons'
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
