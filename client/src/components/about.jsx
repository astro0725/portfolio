import React from 'react';

const About = () => {
  return (
    <div id='about-me' className='bg-base shadow-xl text-white rounded-lg font-sans p-6 w-5/6 mx-auto my-4'>
      <div className='flex flex-col md:flex-row'>
        <div className='mb-4 md:mr-4 flex-1'>
          <div className='text-sm uppercase tracking-widest font-bold text-highlight'>Hi I’m</div>
          <div className='text-3xl text-secondary font-extrabold my-2'>Angelica Strong</div>
          <p className='text-tertiary text-xs'>
            Full-stack developer with a solid foundation in programming languages with a relentless drive to learn and grow. 
          </p>
          <p className='text-white pt-3'>
            I am a passionate and creative developer with a strong background in team collaboration and on-the-fly problem solving. I have a strong passion for developing seamless user experiences and have keen eye for observing problems. While my knowledge is solely built around the fundamentals, I am always eager to learn new technologies and further advance my skills.
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