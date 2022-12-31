import React from 'react';
import { Link } from 'react-router-dom';
// import about data
import { aboutData } from '../data';

const About = () => {
  // destructure about
  const { image, title, subtitle,btnText } = aboutData;
  return (
    <section
      className='bg-langitbening'
    >
      <div className='container mx-auto'>
        <div className=' rounded-[50px] min-h-[100px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0'>
          {/* image */}
          <div className='flex-1 m-12' data-aos='zoom-in-left'>
            <img src={image} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 xl:pr-12'>
            <h2 className='h2 mb-10' data-aos='fade-up' data-aos-delay='300'>
              {title}
            </h2>
            <Link to="/Daftar"
              className='btn btn-primary mb-8 xl:mb-0'
              data-aos='fade-up'
              data-aos-delay='600'
            >
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
