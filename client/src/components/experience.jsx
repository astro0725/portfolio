import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = {
    'Front End': ['HTML', 'CSS', 'SASS/SCSS', 'React', 'JavaScript', 'TypeScript', 'Redux', 'TailwindCSS'],
    'Back End': ['NodeJS', 'ExpressJS', 'MySQL', 'Sequelize', 'NoSQL', 'MongoDB', 'Mongoose', 'GraphQL'],
    'Other': ['GitHub', 'Render', 'Heroku', 'Netlify', 'Webpack', 'Apollo', 'Websocket', 'Firebase', 'AWS'],
  };

  const getIcon = (category) => {
    let iconSrc;
    switch (category) {
      case 'Front End':
        iconSrc = '/html.svg';
        break;
      case 'Back End':
        iconSrc = '/code.svg';
        break;
      case 'Other':
        iconSrc = '/other.svg';
        break;
      default:
        iconSrc = ''; 
        break;
    }
    return iconSrc ? <img src={iconSrc} className='mx-auto' alt={`${category} icon`} /> : null;
  };

  const renderSkillCard = (category, skills) => (
    <div className='bg-body w-64 rounded-lg overflow-hidden text-center'>
      <div className='bg-primary'>
        {getIcon(category)}
        <h3 className='text-xl font-bold mt-2'>{category}</h3>
      </div>
      {skills.map(skill => <p key={skill}>{skill}</p>)}
    </div>
  );

  const renderSkills = () => (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {Object.entries(skills).map(([category, skills]) => renderSkillCard(category, skills))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return renderSkills();
      case 'certification':
        return (
          <div className='flex flex-col items-center justify-center p-10'>
            <div className='flex items-center justify-center'>
              <img src='/coming-soon.svg' alt='Clock Icon' className='w-64 h-64' />
            </div>
            <p className='text-lg font-semibold mt-4'>COMING SOON</p>
          </div>
        );
      default:
        return <div>Tab not found</div>;
    }
  };

  return (
    <div id='experience' className='bg-base shadow-xl text-white rounded-lg font-sans p-6 w-5/6 mx-auto my-4'>
      <h2 className='text-3xl text-secondary font-extrabold my-2'>Experience</h2>
      <div className='flex flex-wrap justify-center gap-4 mb-4'>
        <button
          className={`px-6 py-2 text-sm font-bold uppercase rounded transition duration-300 ease-in-out ${
            activeTab === 'skills' ? 'bg-primary' : 'bg-tertiary'
          }`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </button>
        <button
          className={`px-6 py-2 text-sm font-bold uppercase rounded transition duration-300 ease-in-out ${
            activeTab === 'certification' ? 'bg-primary' : 'bg-tertiary'
          }`}
          onClick={() => setActiveTab('certification')}
        >
          Certification
        </button>
      </div>
      <div className='flex justify-center space-x-16'>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Experience;
