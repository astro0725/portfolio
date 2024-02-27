import React, { useState, useEffect } from 'react';

const Projects = () => {
  const personalRepoNames = ['GamifyLife', 'pixel-pals-2.0']; 
  const groupRepoNames = ['bookworm', '3600']; 

  const [repos, setRepos] = useState({ personal: [], group: [], other: [] });

  const fetchRepos = async () => {
    try {
      const response = await fetch('/api/github/repos');
      if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
      const data = await response.json();
      return data.filter(repo => !['portfolio', 'student-portfolio-css', 'astro0725', 'spawn-point', 'PixelPals', 'prework-study-guide', 'horiseon-refactor-challenge'].includes(repo.name));
    } catch (error) {
      console.error('Error fetching repos:', error);
    }
  };

  const fetchReadme = async (repoName) => {
    try {
      const response = await fetch(`/api/github/${repoName}/readme`, {
        headers: { 'Accept': 'application/vnd.github+json' }
      });
      if (!response.ok) {
        console.error(`Failed to fetch README: ${response.statusText}`);
        return {};
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching README:', error);
      return {};
    }
  };

  const transformImageUrl = (readmeContent, repoName) => {
    const imageUrlMatch = readmeContent.match(/\!\[.*?\]\((.*?)\)/);
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;
    return imageUrl && !imageUrl.startsWith('http') 
      ? `https://raw.githubusercontent.com/astro0725/${repoName}/main/${imageUrl}` 
      : '/placeholder.png'; 
  };

  useEffect(() => {
    const initializeRepos = async () => {
      const filteredData = await fetchRepos();
      if (!filteredData) return;

      const reposWithImages = await Promise.all(filteredData.map(async (repo) => {
        const readmeData = await fetchReadme(repo.name);

        if (Object.keys(readmeData).length === 0) {
          return { ...repo, imageUrl: '/placeholder.png' };
        }

        const readmeContent = atob(readmeData.content);
        const fullImageUrl = transformImageUrl(readmeContent, repo.name);

        return { ...repo, imageUrl: fullImageUrl };
      }));

      // Categorize repos before setting the state
      let personalRepos = [];
      let groupRepos = [];
      let otherRepos = [];

      // Sort the reposWithImages if necessary, before categorization
      reposWithImages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

      // Categorize the repositories
      for (const repo of reposWithImages) {
        if (personalRepoNames.includes(repo.name)) {
          personalRepos.push(repo);
        } else if (groupRepoNames.includes(repo.name)) {
          groupRepos.push(repo);
        } else {
          otherRepos.push(repo);
        }
      }

      // Set the state with categorized repos
      setRepos({
        personal: personalRepos,
        group: groupRepos,
        other: otherRepos,
      });
    };

    initializeRepos();
  }, []);

  const renderProject = (projectsArray) => {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {projectsArray.map(repo => (
          <div key={repo.id} className="w-64 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg m-4">
            <div className="relative">
              <figure className="overflow-hidden">
                {repo.imageUrl && (
                  <img src={repo.imageUrl} alt={`${repo.name} screenshot`} className="w-full h-40 object-cover" />
                )}
              </figure>
              <div className="p-4 text-center">
                <h3 className="font-bold text-primary text-lg">{repo.name}</h3>
                <p className="text-gray-300 text-sm">{repo.description}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-highlight">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id='projects' className='bg-base shadow-xl text-white rounded-lg font-sans p-6 w-5/6 mx-auto my-4'>
      <h2 className="text-3xl text-secondary font-extrabold my-2">Projects</h2>
      <div className="flex flex-wrap -mx-2">
      <div className="w-full md:w-1/3 px-2">
        <h2 className="text-xl font-bold mb-4">Personal</h2>
        {renderProject(repos.personal)}
      </div>
      <div className="w-full md:w-1/3 px-2">
        <h2 className="text-xl font-bold mb-4">Group</h2>
        {renderProject(repos.group)}
      </div>
      <div className="w-full md:w-1/3 px-2">
        <h2 className="text-xl font-bold mb-4">Other</h2>
        {renderProject(repos.other)}
      </div>
    </div>
    </div>
  );
};

export default Projects;