import React from 'react';
import design from '../Component/Images/services/design.png';
import marketing from '../Component/Images/services/marketing.png';
import copy from '../Component/Images/services/copy.png';

const services = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center align-middle mt-10 md:mt-0'>
        <h5 className='font-bold mb-2'><span>WHAT WE DO</span></h5>
        <h2 className='md:text-4xl text-3xl font-bold'>We Aim To Give Our Best</h2>
        <h2 className='md:text-4xl text-3xl font-bold'>Services At All Time</h2>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-20 mt-10 text-xl'>
        <div className='flex flex-col items-center gap-4 font-semibold'>
          <img src={design} alt='Web Design' />
          <h3>Web Design & Development</h3>
        </div>
        <div className='flex flex-col items-center gap-4 font-semibold'>
          <img src={marketing} alt='Marketing' />
          <h3>Marketing Campaigns</h3>
        </div>
        <div className='flex flex-col items-center gap-4 font-semibold'>
          <img src={copy} alt='Copywriting' />
          <h3>Copywriting</h3>
        </div>
      </div>
    </>
  );
};

export default services;

