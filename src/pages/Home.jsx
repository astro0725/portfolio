import React from 'react';
import Header from '../components/header.jsx';
import About from '../components/about.jsx';
import Skills from '../components/skills.jsx';
import Projects from '../components/projects.jsx';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;