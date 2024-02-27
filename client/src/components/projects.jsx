import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);

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
      reposWithImages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      setRepos(reposWithImages);
    };

    initializeRepos();
  }, []);

  return (
    <div id='projects' className='bg-base shadow-xl text-white rounded-lg font-sans p-6 w-5/6 mx-auto my-4'>
      <h2 className="text-3xl text-secondary font-extrabold my-2">Projects</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {repos.map(repo => (
          <div key={repo.id} className="w-64 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg m-4">
            <div className="p-4">
              <h3 className="font-bold text-lg">{repo.name}</h3>
              {repo.imageUrl && (
                <img src={repo.imageUrl} alt={`${repo.name} screenshot`} className="my-2 max-h-40 w-full object-cover" />
              )}
              <p className="text-gray-300 text-sm">{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-300">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;