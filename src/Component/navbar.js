import React, { useState } from 'react';
import main from '../Component/Images/main.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className='max-width p-8'>
        <div className='flex items-center'>
          <h1 className='logo'>
            <span>DESIGN</span>ONE
          </h1>
          <div className='absolute left-5 right-5 top-28 text-center rounded nav-list md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-left md:flex md:items-center md:ml-20 hidden md:block'> <nav>
            <ul className='flex md:flex-row flex-col text-xl md:items-start md:justify-start font-bold md:mt-3'>
              <li>
                <button className='pt-3 md:pt-0 '>Home</button>
              </li>
              <li>
                <button className='py-3 md:pt-0 md:mx-5'>About Us</button>
              </li>
              <li>
                <button>Blog</button>
              </li>
              <li>
                <button className='py-3 md:pt-0 md:mx-5'>Services</button>
              </li>
            </ul>
          </nav>
            <ul className='md:flex items-center md:ml-52 font-bold md:text-2xl'>
              <li className='md:flex'>
                <h1>Call Us:</h1><span>0800 123-4567</span>
              </li>
              <li>
                <button className='contact md:text-lg md:ml-10 -py-20'>Contact Us</button>
              </li>
            </ul></div>
          {isOpen && (<div className='absolute left-5 right-5 top-28 text-center rounded nav-list md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-left md:flex md:items-center md:ml-20'> <nav>
            <ul className='flex md:flex-row flex-col text-xl md:items-start md:justify-start font-bold md:mt-3'>
              <li>
                <button className='pt-3 md:pt-0 '>Home</button>
              </li>
              <li>
                <button className='py-3 md:pt-0 md:mx-5'>About Us</button>
              </li>
              <li>
                <button>Blog</button>
              </li>
              <li>
                <button className='py-3 md:pt-0 md:mx-5'>Services</button>
              </li>
            </ul>
          </nav>
            <ul className='md:flex items-center md:ml-52 font-bold md:text-2xl'>
              <li className='md:flex'>
                <h1>Call Us:</h1><span>0800 123-4567</span>
              </li>
              <li>
                <button className='contact md:text-lg md:ml-10 -py-20'>Contact Us</button>
              </li>
            </ul></div>
          )}
          <button onClick={() => setIsOpen(!isOpen)} className='text-sm ml-12 font-bold md:hidden'>{isOpen ? "CLOSE":"MENU"}</button>
        </div>
      </header>
      <article className='flex flex-col md:flex-row mt-10 md:m-12'>
        <div className='ml-5'>
          <h4 className='font-bold'>
            <span>QUALITY IS WHAT WE STRIVE</span>
          </h4>
          <h1 className='text-4xl md:text-5xl font-bold mt-4'>
            Web Design &amp; Marketing Services
          </h1>
          <h4 className='mt-6'>
            <span>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor.
            </span>
          </h4>
          <div className='flex flex-col md:flex-row'>
            <button className='aboutBtn mt-4 md:mt-8'>MORE ABOUT US</button>
            <h6 className='font-semibold mt-4 md:mt-10 md:ml-6'>
              See live demo
            </h6>
          </div>
        </div>
        <div className='ml-7 mt-4 md:mt-0'>
          <img src={main} alt='Main' width={600} height={600} />
        </div>
      </article>
    </div>
  );
};

export default Navbar; 