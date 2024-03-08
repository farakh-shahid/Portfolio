'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className=' flex flex-col lgl:flex-row gap-10 lgl:gap-20'
    >
      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2014 - 2022</p>
          <h2 className='text-3xl md:text-4xl font-bold text-[#C4CFDE]'>
            Education
          </h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full  border-l-[6px] border-l-[#2a0c612b] border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Bachelor In Computer Science'
            subTitle='Air University Islamabad (2018 - 2022)'
            result='76%'
            des='Completed coursework in areas such as object-oriented programming, data structures, computer networks,
            software engineering databases, operating systems, and computer architecture.
            Gained hands-on experience in designing and implementing software development methodologies through
            practical projects and assignments.
            Demonstrated proficiency in programming languages such as C++, C#, JavaScript, & Ruby.
            Led development of Facebook Clone project on MERN stack using TypeScript. Utilized context API for state
            management and SocketIO for real-time updates, Implemented user Authentication & Authorization.
            Demonstrated strong written and verbal communication skills through presentations, reports, and interaction
            with peers and faculty'
          />
          {/* <ResumeCard
            title='Intermeditate'
            subTitle='Fauji Foundation College '
            result='79%'
            des='Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.'
          />
          <ResumeCard
            title='Secondary School Education'
            subTitle='Kingstar Secondary School (1998 - 2000)'
            result='5.00/5'
            des='Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.'
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
