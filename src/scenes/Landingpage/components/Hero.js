import React from 'react';
import { Link } from 'react-router-dom';
// import hero data
import { heroData } from '../data';

// import components
import Header from './Header';

const Hero = () => {
  // destructure hero
  const { title, subtitle, btnText, image } = heroData;
  return (
    <section className='bg-langit lg:h-[950px] py-5'>
      <Header />
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
          {/* text */}
          <div className='text-center xl:text-left xl:absolute'>
            {/* title */}
            <h1
              className='h1 xl:max-w-[700px] mb-6 xl:mb-12'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              {title}
            </h1>
            {/* subtitle */}
            <p
              className='lead xl:max-w-[380px] mb-6 lg:mb-12'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {subtitle}
            </p>
            <Link to="/Daftar"
              className='btn btn-primary mb-8 xl:mb-0'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {btnText}
            </Link>
          </div>
          {/* image */}
          <div
            className='xl:absolute xl:-right-72 xl:bottom-16'
            data-aos='fade-down'
            data-aos-delay='700'
          >
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
