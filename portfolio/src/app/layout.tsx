import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import StarsCanvas from '../components/main/StarBackground';
import Navbar from '../components/main/Navbar';
// import Footer from "@/components/main/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Muhammad Farrukh',
  description:
    'Passionate and skilled full-stack developer with expertise in developing and maintaining web applications using multiple APIs, third-party integrations, and databases. Proficient in both front-end and back-end development, with a focus on crafting elegant user experiences and implementing robust server-side solutions. Proficient in in utilizing cutting-edge technologies such as Rails, Node ReactJS, NextJS, Vue and NestJS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-[#030014] overflow-y-scroll overflow-x-hidden'>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
