'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  title: string;
}

const SkillDataProvider = ({ src, width, height, index, title }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.4;
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: '20',
      }}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt='skill image'
        className='mb-1 picture'
      />
      <span className='text-[12px] text-gray-500 '>{title}</span>
    </motion.div>
  );
};

export default SkillDataProvider;
