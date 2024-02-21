import Image from "next/image";
import React from "react";
interface Props {
  src: string;
  title: string;
  description: string;
  tags: string
}

const ProjectCard = ({ src, title, description, tags }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer">

      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        // className="w-full object-contain"
      />
     
      <div className="relative p-4">
        <h1 className="text-xl text-center Welcome-text rounded-full py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">{title}</h1>
        <p className="mt-2 text-gray-400">{description}</p>
        <p className="mt-2 text-[#ba9cff] opacity-[0.4] ">{tags}</p>
        
      </div>
    </div>
  );
};

export default ProjectCard;
