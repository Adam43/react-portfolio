import { } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='home w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#b0cdf1]'>
          Kwame Bullen
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#a9a297] hover:translate-y-1 transition-all rounded'>
          I’m a <span className='inline border-b-4 border-pink-600'>Full Stack Developer.</span>
        </h2>
        <p className='text-[#a9a297] py-4 max-w-[700px]'>
          I am a full-stack developer specializing in building in Javascript and React to create dynamic and interactive visual experiences. Currently, I’m focused on building responsive full-stack web applications.
        </p>
        <div>
        <Link to="work" smooth={true} duration={500}>
          <button className='text-[#a9a297] border-[#a9a297] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
