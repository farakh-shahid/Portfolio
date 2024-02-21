import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div
      className='flex flex-col items-center justify-center py-20'
      id='projects'
    >
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-10 lg:px-20 personal-project'>
        <ProjectCard
          src='/cnxnetwork.png'
          title='CNX Network'
          description="CNX Network revolutionizes global blockchain technology, providing encrypted, interconnected applications with a uniform interface for daily life's most essential tasks. Operated on its unique blockchain and currency, CNX enhances efficiency and user experience."
          tags='#React JS #Material UI  #CSS  '
        />
        <ProjectCard
          src='/backpack.png'
          title='Backpack'
          description='Backpack Healthcare offers inclusive, accessible mental healthcare for children, young adults, and families, prioritizing the best mental health support for all, irrespective of backgrounds. We provide therapy and resources to lighten the emotional load individuals carry in their invisible backpacks.'
          tags='#Next JS #Node JS #Redux #AWS'
        />
        <ProjectCard
          src='/kosmic.png'
          title='Kosmic'
          description='Kosmic revolutionizes video creation by blending advanced AI with traditional methods. Kosmics mission is to make video production accessible to all, providing an intuitive platform guiding users in crafting compelling stories through AI tools or by connecting with skilled professionals in our marketplace.'
          tags='#React JS #Material UI  #CSS  '
        />
      </div>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-10 lg:px-20 personal-project'>
        <ProjectCard
          src='/cnxnetwork.png'
          title='CNX Network'
          description="CNX Network revolutionizes global blockchain technology, providing encrypted, interconnected applications with a uniform interface for daily life's most essential tasks. Operated on its unique blockchain and currency, CNX enhances efficiency and user experience."
          tags='#React JS #Material UI  #CSS  '
        />
        <ProjectCard
          src='/backpack.png'
          title='Backpack'
          description='Backpack Healthcare offers inclusive, accessible mental healthcare for children, young adults, and families, prioritizing the best mental health support for all, irrespective of backgrounds. We provide therapy and resources to lighten the emotional load individuals carry in their invisible backpacks.'
          tags='#Next JS #Node JS #Redux #AWS'
        />
        <ProjectCard
          src='/kosmic.png'
          title='Kosmic'
          description='Kosmic revolutionizes video creation by blending advanced AI with traditional methods. Kosmics mission is to make video production accessible to all, providing an intuitive platform guiding users in crafting compelling stories through AI tools or by connecting with skilled professionals in our marketplace.'
          tags='#React JS #Material UI  #CSS  '
        />
      </div>
    </div>
  );
};

export default Projects;
