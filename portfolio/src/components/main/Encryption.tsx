'use client';
import React from 'react';

import { motion } from 'framer-motion';
import { slideInFromTop } from '../../utils/motion';
import Image from 'next/image';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Encryption = () => {
  return (
    <div className='flex flex-row relative items-center justify-center min-h-screen w-full h-full'>
      <div className='absolute w-auto h-auto top-0 z-[5] ml-[45px]'>
        <motion.div
          variants={slideInFromTop}
          className='text-[30px] font-medium text-center text-gray-200'
        >
          Performance
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            {' '}
            &{' '}
          </span>
          Security
        </motion.div>
      </div>

      <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto'>
        <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
          <Image
            src='/LockTop.png'
            alt='Lock top'
            width={50}
            height={50}
            className='w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11'
          />
          <Image
            src='/LockMain.png'
            alt='Lock Main'
            width={70}
            height={70}
            className=' z-10'
          />
        </div>

        <div className='Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]'>
          <h1 className='Welcome-text text-[12px]'>Encryption</h1>
        </div>
      </div>
      <div className='absolute z-[20] bottom-[10px] px-[5px] ml-[45px]'>
        <div className='Welcome-box py-[10px] px-[10px] border border-[#ff014f] opacity-[0.9] cursive text-[13px] font-medium text-center text-gray-300'>
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
              d='M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z'
            />
          </svg>
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className='w-full flex items-start justify-center absolute'>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload='false'
          className='w-full h-auto'
          src='/encryption.webm/'
        />
      </div>
    </div>
  );
};

export default Encryption;
