'use client'
import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.scss';
import { experiences } from '@/src/constants/experience';

export const Experience = () => {
  interface Experience {
    date: string;
    iconBg: string;
    styles: React.CSSProperties;
    link: string;
    icon: string;
    company_name: string;
    title: string;
    points: (string | number | boolean | React.ReactElement | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLike<React.ReactNode> | null | undefined)[];
  }
  const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: '#EDF2F8',
          color: '#6b7688',
          boxShadow:
            'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
        }}
        contentArrowStyle={{ borderRight: '10px solid  #edb10b' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <a
            style={experience.styles}
            href={experience.link}
            className={experience.company_name === 'ISSM' ? 'icon-issm' : undefined}
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
          <h3 className=' text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px]'
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
                className='text-white-100 text-[14px] pl-1 tracking-wider'
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
      className='flex flex-col items-center justify-center py-20'
      id='projects'
    >
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        <motion.div>
          <h2
            className='head-text '
            style={{ marginTop: '1rem', marginBottom: '1.5rem' }}
          >
            Work <span>Experience</span>
          </h2>
        </motion.div>
      </h1>
      <div className="mt-20 flex flex-col ">
            <VerticalTimeline lineColor={"#EDF2F8"} animate={true}>
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
