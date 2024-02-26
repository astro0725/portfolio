import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='bg-base shadow-xl text-white rounded-lg font-sans p-6 w-5/6 mx-auto my-4'>
      <div className='text-3xl text-secondary font-extrabold my-2'>Skills</div>
      <div className='flex justify-center space-x-16'>
        <div className='bg-gray-800 w-64 rounded-lg overflow-hidden'>
          <div className='bg-tertiary p-4 flex items-center justify-between'>
            <img src='/html.svg' alt='Front End' className='h-8' />
            <span className='text-white font-bold'>Front End</span>
          </div>
          <div className='p-4 text-gray-300 text-center'>
            <p>HTML</p>
            <p>CSS</p>
            <p>SASS/SCSS</p>
            <p>React</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Redux</p>
            <p>TailwindCSS</p>
          </div>
        </div>
        <div className='bg-gray-800 w-64 rounded-lg overflow-hidden'>
          <div className='bg-tertiary p-4 flex items-center justify-between'>
            <img src='/code.svg' alt='Back End' className='h-8' />
            <span className='text-white font-bold'>Back End</span>
          </div>
          <div className='p-4 text-gray-300 text-center'>
            <p>NodeJS</p>
            <p>ExpressJS</p>
            <p>MySql</p>
            <p>Sequelize</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>GraphQL</p>
          </div>
        </div>
        <div className='bg-gray-800 w-64 rounded-lg overflow-hidden'>
          <div className='bg-tertiary p-4 flex items-center justify-between'>
            <img src='/other.svg' alt='Other' className='h-8' />
            <span className='text-white font-bold'>Other</span>
          </div>
          <div className='p-4 text-gray-300 text-center'>
            <p>Github</p>
            <p>Render</p>
            <p>Heroku</p>
            <p>Webpack</p>
            <p>Apollo</p>
            <p>Websocket</p>
            <p>Firebase</p>
            <p>AWS</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Skills;