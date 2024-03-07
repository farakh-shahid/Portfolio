'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='py-12  font-titleFont flex gap-20 text-lightText'
    >
      <div>
        <div className='flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2010 - 2022</p>
          <h2 className='text-4xl font-bold'>Job Experience</h2>
        </div>
        <div className='mt-14 w-full h-auto  border-l-[6px] border-l-[#2a0c612b] border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='FullStack Engineer'
            subTitle='Devsinc'
            result='Pakistan'
            des='Successfully migrated legacy codebases to modern NodeJS versions, resulting in improved performance and maintainability.
            Utilized Next JS to create front-end functionality and interact with RESTful APIs written in NodeJS, enabling seamless data binding to specific views.
            Worked closely with the DevOps team to automate deployment processes and ensure continuous integration and delivery (CI/CD)'
          />
          <ResumeCard
            title='Backend Developer'
            subTitle='Devsinc'
            result='Pakistan'
            des='Proficient in developing web applications using NestJS in an MVC architecture, building robust and scalable back-end systems.
            Employed MongoDB as the database for the NodeJS applications, ensuring efficient and reliable data storage and retrieval.
            Implemented best practices for security, including data encryption and protection against common web vulnerabilities'
          />
          <ResumeCard
            title='Frontend Developer'
            subTitle='Bitnine Global'
            result='Cananda - (Remote)'
            des='Developing reusable UI/UX components in React JS using HTML, CSS, Bootstrap, and Material UI.
            Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.
            Implementing responsive design and ensuring cross-browser compatibility.
            Participating in code reviews and providing constructive feedback to other developers'
          />
        </div>
      </div>
      <div>
        {/* <div className='flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2001 - 2020</p>
          <h2 className='text-4xl font-bold'>Trainer Experience</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-[#2a0c612b] border-opacity-30 flex flex-col gap-10 Welcome-box'>
          <ResumeCard
            title='Gym Instructor'
            subTitle='Rainbow Gym Center (2015 - 2020)'
            result='DHAKA'
            des='The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.'
          />
          <ResumeCard
            title='Web Developer and Instructor'
            subTitle='SuperKing College (2010 - 2014)'
            result='CANADA'
            des='Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.'
          />
          <ResumeCard
            title='School Teacher'
            subTitle='Kingstar Secondary School (2001 - 2010)'
            result='NEVADA'
            des='Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.'
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;
