import React from 'react';
import About from '../Component/Images/about.jpg';

const about = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row gap-5 md:gap-24 m-4 md:m-24 mt-8 md:mt-36'>
        <div>
          <h5 className='font-bold mt-20'><span>ABOUT US</span></h5>
          <h1 className='text-4xl md:text-5xl font-semibold mt-2'>
            Leading Agency That Helps<br />
            Small And Medium<br />
            Businesses
          </h1>
          <p className='mt-10 text-base md:text-lg'>
            <span>
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat."
            </span>
          </p>
          <h4 className='mt-10 text-base md:text-lg font-bold'>
            - Ingrid S., Business Owner
          </h4>
          <button className='contact mt-8'>Contact Us</button>
        </div>
        <div>
          <img src={About} alt='About' width={800} />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center align-middle'>
        <h2 className='text-3xl md:text-4xl font-bold'>
          We are working on over <span>500</span>
        </h2>
        <h2 className='text-3xl md:text-4xl font-bold'>
          <span>International Projects</span> each year
        </h2>
      </div>
      <div className='flex flex-wrap mt-12 justify-center items-center gap-5'>
        <div className='border-0 py-8 md:py-12 px-10 md:px-28 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            <span>13k+</span>
          </h1>
          <h5 className='mt-3'>
            <span>Total Customers</span>
          </h5>
        </div>
        <div className='middle border-0 py-8 md:py-12 px-10 md:px-28 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            <span>42</span>
          </h1>
          <h5 className='mt-3 text-white'>International Awards</h5>
        </div>
        <div className='border-0 py-8 md:py-12 px-10 md:px-28 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            <span>400M+</span>
          </h1>
          <h5 className='mt-3'>
            <span>Revenue Generated</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default about;

