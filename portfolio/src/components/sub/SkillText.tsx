'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '../../utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center z-[20]'>
      <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-[#ff014f] opacity-[0.9] ml-[45px]'
      >
        <SparklesIcon
          className=' mr-[10px] h-5 w-5'
          style={{ color: '#ff014f' }}
        />
        <h1 className='text-[16px]' style={{ color: '#ff014f' }}>
          Empowering Innovation: Elevate Your Experience
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='font-bodyFont text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        Innovation Unleashed: Crafting Cutting-Edge Apps with Modern
        Technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='font-bodyFont text-[20px] text-gray-400 mb-10 mt-[10px] text-center'
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;
