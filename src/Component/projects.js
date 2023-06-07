import React from 'react';
import p1 from '../Component/Images/projects/p1.png';
import p2 from '../Component/Images/projects/p2.png';
import p3 from '../Component/Images/projects/p3.png';
import p4 from '../Component/Images/projects/p4.png';

const projects = () => {
  return (
    <>
      <div className='ml-12 mt-16 md:mt-40'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4 md:mb-8'>
          Check Some of Our<br />Recent Projects
        </h1>
        <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.</h6>
        <div className='flex flex-wrap gap-5 mt-10'>
          <img src={p1} alt='Project 1' width={300} />
          <img src={p2} alt='Project 2' width={300} />
          <img src={p3} alt='Project 3' width={300} />
          <img src={p4} alt='Project 4' width={300} />
        </div>
      </div>
    </>
  );
};

export default projects;

