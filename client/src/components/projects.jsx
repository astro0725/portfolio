import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/astro0725/repos')
      .then(response => response.json())
      .then(async data => {
        const reposToIgnore = ['portfolio', 'student-portfolio-css', 'astro0725', 'spawn-point', 'PixelPals', 'prework-study-guide', 'horiseon-refactor-challenge'];
        let filteredData = data.filter(repo => !reposToIgnore.includes(repo.name));

        const reposWithImages = await Promise.all(filteredData.map(async repo => {
          try {
            const readmeResponse = await fetch(`https://api.github.com/repos/astro0725/${repo.name}/readme`, {
              headers: { 'Accept': 'application/vnd.github+json' }
            });
            const readmeData = await readmeResponse.json();
            const readmeContent = atob(readmeData.content);
            const imageUrlMatch = readmeContent.match(/\!\[.*?\]\((.*?)\)/);
            const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;

            const fullImageUrl = imageUrl && !imageUrl.startsWith('http') ? 
              `https://raw.githubusercontent.com/astro0725/${repo.name}/main/${imageUrl}` : 
              imageUrl;

            return {
              ...repo,
              imageUrl: fullImageUrl,
            };
          } catch (error) {
            console.error('Error fetching README:', error);
            return { ...repo, imageUrl: null };
          }
        }));

        reposWithImages.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        setRepos(reposWithImages);
      })
      .catch(error => console.error(error));
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
