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
      <section
        id='resume'
        className='p-[200px] py-20 border-b-[1px] border-b-black z-[20]'
      >
        <div className='flex justify-center items-center text-center'>
          <Title title='' des='Work & Experience' />
        </div>
        <div className='flex justify-center items-center text-center'></div>
        <div>
          <ul
            className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 '
            style={{
              display: 'flex',
              boxShadow: 'inset 0 0 12px #bf97ff3d',
              borderRadius: '0.5rem',
            }}
          >
            <li
              onClick={() =>
                setEducationData(true) &
                setSkillData(false) &
                setExperienceData(false) &
                setAchievementData(false)
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
                setExperienceData(false) &
                setAchievementData(false)
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
                setExperienceData(true) &
                setAchievementData(false)
              }
              className={`${
                experienceData
                  ? 'border-designColor rounded-lg'
                  : 'border-transparent'
              } resumeLi`}
            >
              Experience
            </li>
            {/* <li
              onClick={() =>
                setEducationData(false) &
                setSkillData(false) &
                setExperienceData(false) &
                setAchievementData(true)
              }
              className={`${
                achievementData
                  ? 'border-designColor rounded-lg'
                  : 'border-transparent'
              } resumeLi`}
            >
              Achievements
            </li> */}
          </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievement />}
        {experienceData && <Experience />}
      </section>
    </>
  );
};

export default Resume;
