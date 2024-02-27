import React from 'react';

const Header = () => {
  return (
    <header className='bg-base flex items-center h-20 w-full pointer-events-auto'>
      <div className='container mx-auto flex items-center justify-between'>
        <a href='/' className='text-3xl font-bold text-highlight'>Full-Stack Developer</a>
        <nav>
          <ul className='flex text-lg text-white cursor-pointer space-x-4'>
            <li><a href='#about-me' className='hover:text-highlight'>About</a></li>
            <li><a href='#experience' className='hover:text-highlight'>Experience</a></li>
            <li><a href='#projects' className='hover:text-highlight'>Projects</a></li>
          </ul>
        </nav>
        <div className='relative'>
          <button className='px-4 py-2 border text-white bg-primary hover:bg-tertiary border-none cursor-pointer rounded-lg font-semibold'>Contact Me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;