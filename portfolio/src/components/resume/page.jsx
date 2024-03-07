'use client';
import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from './Experience';
import { motion } from 'framer-motion';

import { slideInFromLeft } from '@/src/utils/motion';
import Title from '../layouts/Title';
// import { Experience } from '@/src/components/main/Experience';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <>
      <div
        className='md:ml-[5rem] md:mr-[2rem] lgl:ml-[5rem] lgl:mr-[5rem] xl:ml-[10rem] xl:mr-[10rem] z-[40]'
        id='projects'
      >
        <section id='resume' className='mx-auto py-20   z-[40]'>
          <div className='flex justify-center items-center text-center'>
            <Title title='' des='Work & Experience' />
          </div>
          <div>
            <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center '>
              <li
                onClick={() =>
                  setEducationData(true) &
                  setSkillData(false) &
                  setExperienceData(false)
                }
                className={`${
                  educationData
                    ? 'border-designColor rounded-lg'
                    : 'border-transparent'
                } resumeLi`}
              >
                Education
              </li>
              <li
                onClick={() =>
                  setEducationData(false) &
                  setSkillData(true) &
                  setExperienceData(false)
                }
                className={`${
                  skillData
                    ? 'border-designColor rounded-lg'
                    : 'border-transparent'
                } resumeLi`}
              >
                Professional Skills
              </li>
              <li
                onClick={() =>
                  setEducationData(false) &
                  setSkillData(false) &
                  setExperienceData(true)
                }
                className={`${
                  experienceData
                    ? 'border-designColor rounded-lg'
                    : 'border-transparent'
                } resumeLi`}
              >
                Experience
              </li>
            </ul>
          </div>
          {educationData && <Education />}
          {skillData && <Skills />}
          {experienceData && <Experience />}
        </section>
      </div>
    </>
  );
};

export default Resume;
