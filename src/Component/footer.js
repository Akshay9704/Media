import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-5 md:ml-20 mt-8 md:mt-20 mb-8 md:mb-20">
        <div>
          <h2 className="title text-2xl md:text-3xl font-bold mb-4 md:mb-7">DESIGNONE</h2>
          <h5>info@domain.com</h5>
          <h5>0800 123-4567</h5>
        </div>
        <div>
          <h3 className="title text-xl md:text-xl font-semibold mb-4 md:mb-7">NAVIGATION</h3>
          <h5>Home</h5>
          <h5>Our Work</h5>
          <h5>About the Company</h5>
          <h5>Contact Us</h5>
        </div>
        <div>
          <h3 className="title text-xl md:text-xl font-semibold mb-4 md:mb-7">CONTACTS</h3>
          <h5>Home</h5>
          <h5>Our Work</h5>
          <h5>About the Company</h5>
          <h5>Contact Us</h5>
        </div>
        <div className='-ml-4 md:ml-0'>
          <h3 className="title text-xl md:text-xl font-semibold mb-4 md:mb-7 md:-mt-5">NEWSLETTER</h3>
          <h5>123 Avenue Road<br />New York, NY</h5>
          <div>
            <button>f</button>
            <button>t</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

