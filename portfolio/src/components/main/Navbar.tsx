import { navItems } from '@/src/constants/navItems';
import { Socials } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a
          href='#about-me'
          className='h-auto w-auto flex flex-row items-center '
        >
         
          <div className='ml-[33px]'>
            {/* <Image
              className='mr-[10px] cursor-pointer hover:animate-slowspin w-10 h-10 p-1 rounded-full ring-2 ring-[#b49bff] dark:ring-purple-500'
              src='/avatar1.jpg'
              alt='Bordered avatar'
              width={70}
            height={70}
            /> */}
          </div>

          <span
            className='font-bold ml-[1px] hidden md:block text-white'
            style={{
              fontSize: '1.7rem',
              fontWeight: '800',
              letterSpacing: '5px',
            }}
          >
            Farrukh
          </span>
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
            {Array.from(navItems, ([key, value]) => (
              <a href={value.href}   className='cursor-pointer text-base font-normal text-gray-100 tracking-wide border-b border-transparent transition-all duration-300 hover:text-[#ff014f] ' key={key}>
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
              width={30}
              height={30}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
