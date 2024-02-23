import React from 'react';

const Title = ({ title, des }: { title: string; des: string }) => {
  return (
    <div className='flex flex-col gap-4 font-titleFont mb-14'>
      <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>
        {title}
      </h3>
      <h1 className='text-[30px] text-[40px] text-gray-300 font-bold capitalize ml-[45px]'>
        {des}
      </h1>
    </div>
  );
};

export default Title;
