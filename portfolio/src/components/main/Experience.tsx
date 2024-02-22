'use client';
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.scss';
import { experiences } from '@/src/constants/experience';
import { slideInFromLeft, slideInFromTop } from '@/src/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

export const Experience = () => {
  const ExperienceCard = ({ experience }: { experience: any }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: '#030014',
          color: 'white',
          boxShadow:
            'rgba(42 14 97 / 0.6) 0px 0px 2px 2px, rgba(42 14 97 / 0.6) 0px 0px 2px 2px',
        }}
        contentArrowStyle={{ borderRight: '10px solid  #2a0c6199' }}
        dateClassName={'Welcome-text'}
        date={experience.date}
        visible={true}
        iconStyle={{ background: '#2a0c6199', color: '#000' }}
        icon={
          <a
            style={experience.styles}
            href={experience.link}
            target='_blank'
            className={
              experience.company_name === 'ISSM' ? 'icon-issm' : undefined
            }
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              style={{
                width: '95%',
                height: '95%',
              }}
            />
          </a>
        }
      >
        <div>
          <h3 className='text-[24px]  font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-bodyFont'
            style={{ margin: 0, fontWeight: '500' }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map(
            (
              point:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined,
              index: any
            ) => (
              <li
                key={`experience-point-${index}`}
                className='text-gray-300 text-[14px] pl-1 tracking-wider font-bodyFont'
              >
                {point}
              </li>
            )
          )}
        </ul>
      </VerticalTimelineElement>
    );
  };
  return (
    <div
      className='flex flex-col items-center justify-center py-20 z-[20] ml-[45px]'
      id='projects'
    >
      <h1 className=''>
        <motion.div
          variants={slideInFromTop}
          className='text-[40px] font-medium text-center text-gray-200 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'
        >
          Work
          <span className='text-purple'> & </span>
          Experience
        </motion.div>
      </h1>
      <div className='mt-10 flex flex-col cursor-pointer'>
        <VerticalTimeline lineColor={'#2a0c6199'} animate={true}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
