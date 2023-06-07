import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const blog = () => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        Previous
      </div>
    );
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        Next
      </div>
    );
  };

  return (
    <>
      <div className='flex flex-col mt-12 md:mt-28 items-center justify-center align-middle'>
        <h5 className='font-bold'><span>OUR BLOG</span></h5>
        <h1 className='text-2xl md:text-4xl font-bold'>Latest Company News</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-20 justify-center mt-6 md:mt-12">
        <div className="card pb-7">
          <Slider
            className="card-carousel"
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
          >
            <div>
              <img
                className="card-image"
                width={290}
                src="https://content.app-sources.com/s/255661236661311/thumbnails/640x480/Images/496002541-young-man-think.jpg"
                alt="Image 1"
              />
            </div>
            <div>
              <img
                className="card-image mb-1"
                width={290}
                src="https://content.app-sources.com/s/255661236661311/thumbnails/640x480/Images/496002537-man-working-on-.jpg"
                alt="Image 2"
              />
            </div>
          </Slider>
          <div className="card-content">
            <a href='/' className='title text-lg md:text-2xl'>Blog post three</a>
            <p className='mt-4'><span>This summary will show on Blog list page</span></p>
            <button className='aboutBtn'>Read more</button>
          </div>
        </div>

        <div className="card md:-ml-10">
          <img
            className="card-image mb-3"
            width={300}
            src="https://content.app-sources.com/s/255661236661311/uploads/Images/496002539-working-on-webs.jpg"
            alt="Image 2"
          />
          <div className="card-content">
            <a href='/' className='title text-lg md:text-2xl'>Blog post three</a>
            <p className='mt-4'><span>This summary will show on Blog list page</span></p>
            <button className='aboutBtn'>Read more</button>
          </div>
        </div>

        <div className="card">
          <img
            className="card-image mb-3"
            width={300}
            src="https://content.app-sources.com/s/255661236661311/uploads/Images/496002531-designer-wooden.jpg"
            alt="Image 3"
          />
          <div className="card-content">
            <a href='/' className='title text-lg md:text-2xl'>Blog post three</a>
            <p className='mt-4'><span>This summary will show on Blog list page</span></p>
            <button className='aboutBtn'>Read more</button>
          </div>
        </div>
      </div>
      <div className='banner flex flex-col gap-1 items-center justify-center mt-12 md:mt-20'>
        <h1 className='text-2xl md:text-4xl font-bold'>Do You Have A Project?</h1>
        <h1 className='text-2xl md:text-4xl font-bold'><span>Contact Us.</span></h1>
        <button className='contact mt-7'>Contact Us</button>
      </div>
    </>
  );
};

export default blog;

