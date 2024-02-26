import React from 'react';

const About = () => {
  return (
    <div id='about-me' className='bg-base shadow-xl text-white rounded-lg font-sans p-6 w-5/6 mx-auto my-4'>
      <div className='flex flex-col md:flex-row'>
        <div className='mb-4 md:mr-4 flex-1'>
          <div className='text-sm uppercase tracking-widest font-bold text-highlight'>Hi I’m</div>
          <div className='text-3xl text-secondary font-extrabold my-2'>Angelica Strong</div>
          <p className='text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      <div className='self-start md:self-center bg-white text-black w-24 h-24 flex items-center justify-center'>
        IMG
      </div>
    </div>
  </div>
  );
};

export default About;