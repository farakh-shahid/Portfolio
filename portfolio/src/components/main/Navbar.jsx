'use client';
import { navItems } from '@/src/constants/navItems';
import { Socials } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import useScrollColor from '../../hooks/UseScroll';

const Navbar = () => {
  const shadowColor = useScrollColor();
  // const [scrolling, setScrolling] = useState(false);
  // const [activeSection, setActiveSection] = useState(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll('section');
  //     let currentSection = '';
  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.clientHeight;
  //       if (window.scrollY >= sectionTop - sectionHeight * 0.25) {
  //         currentSection = section.getAttribute('id');
  //         console.log('section', currentSection);
  //       }
  //     });

  //     const isTop = window.scrollY < 340;
  //     if (isTop !== scrolling) {
  //       setScrolling(isTop);
  //     }
  //   };

  //   document.addEventListener('scroll', handleScroll);

  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrolling]);

  // const shadowColor = scrolling ? '#2A0E61' : '#ff014f';
  return (
    <div
      className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[${shadowColor}]/20 bg-[#03001417] backdrop-blur-md z-50 px-3 md:px-10`}
    >
      <div className='w-full h-full flex flex-row items-center justify-between m-auto'>
        <Link href='/' legacyBehavior passHref>
          <a className='h-auto w-auto flex flex-row items-center'>
            <div className='md:ml-[33px]'></div>

            <span
              className='font-bold ml-[1px] text-white'
              style={{
                fontSize: '1.7rem',
                fontWeight: '800',
                letterSpacing: '5px',
              }}
            >
              Farrukh
            </span>
          </a>
        </Link>
        <div className='w-[500px] h-full md:flex flex-row items-center justify-between md:mr-20 hidden'>
          <div className='flex items-center justify-between w-full h-auto border border-[#ff014f] border-opacity-70 bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            {Array.from(navItems, ([key, value]) => (
              <a
                href={value.href}
                className='cursor-pointer text-base font-normal text-gray-100 tracking-wide border-b border-transparent transition-all duration-300 hover:text-[#ff014f] '
                key={key}
              >
                {value.label}
              </a>
            ))}
          </div>
        </div>

        <div className='flex flex-row gap-5 cursor-pointer'>
          {Socials.map((social) => (
            <Link href={social.url} target='_blank' key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={40}
                height={40}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
