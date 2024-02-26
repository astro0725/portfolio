import React from 'react';
import Header from '../components/header.jsx';
import About from '../components/about.jsx';
import Experience from '../components/experience.jsx';
import Projects from '../components/projects.jsx';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;