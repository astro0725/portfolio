import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [isBottoms, setIsBottoms] = useState({
    'Front End': false,
    'Back End': false,
    'Other': false,
  });

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

  const handleScroll = (category) => (e) => {
    const element = e.target;
    const isBottom = element.scrollHeight - element.scrollTop === element.clientHeight ||
      element.scrollHeight - element.scrollTop <= element.clientHeight + 1; 
    setIsBottoms(prevIsBottoms => ({ ...prevIsBottoms, [category]: isBottom }));
  };

  const scrollToTop = (category) => {
    const element = document.getElementById(`${category}-skill`);
    if (element) {
      element.scrollTo({ top: 0, behavior: 'smooth' });
      setIsBottoms(prevIsBottoms => ({ ...prevIsBottoms, [category]: false }));
    }
  };  

  const renderSkillCard = (category, skills) => {
    const isScrollable = skills.length > 5;
  
    return (
      <div className='bg-body rounded-lg w-64'>
        <div className='bg-primary rounded-t-lg text-center'>
          {getIcon(category)}
          <h3 className='text-xl font-bold mt-2'>{category}</h3>
        </div>
        <div id={`${category}-skill`} className='max-h-40 overflow-y-auto text-center scrollbar-track scrollbar-thumb' onScroll={handleScroll(category)}>
          {skills.map(skill => <p key={skill} className='px-2 py-1'>{skill}</p>)}
        </div>
        {isScrollable && (
            <div className='text-sm text-center text-highlight'>
              {isBottoms[category] ? (
                <p onClick={() => scrollToTop(category)} className='cursor-pointer'>Back to top ↑</p>
              ) : (
                <p>Scroll to see more...</p>
              )}
            </div>
          )}
      </div>
    );
  };

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
