import React, { useState } from 'react';
import ContactModal from './contact';

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

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
          <button id='contact' onClick={openModal} className='px-4 py-2 border text-white bg-primary hover:bg-tertiary border-none cursor-pointer rounded-lg font-semibold'>Contact Me</button>
        </div>
      </div>
      <ContactModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
