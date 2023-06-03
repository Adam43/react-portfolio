import { } from 'react';

const About = () => {
  return (
    <div name='about' className='about w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I’m Kwame Bullen, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am trained in Full stack JavaScript and Technology Management. I am able to build impressive website experiences as well as lead a project through the SDLC life cycle. I have a keen eye for detail and a passion for ensuring client satisfaction. I stay up-to-date with the latest front-end technologies, including React, Tailwind, Bootstrap, and Material UI and have experience integrating with back-end APIs and databases. Are you looking for a Front-End Engineer?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
