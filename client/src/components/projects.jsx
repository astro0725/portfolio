import React, { useState, useEffect } from 'react';

const base_url = import.meta.env.BASE_URL || 'http://localhost:3000';

const Projects = () => {
  const [repos, setRepos] = useState({ personal: [], group: [], other: [] });

  const personalRepoNames = ['GamifyLife', 'pixel-pals-2.0'];
  const groupRepoNames = { 'stevendreed': ['3600'], 'SnapperGee': ['bookworm'] };

  const fetchRepos = async (user, specificRepos = []) => {
    try {
      let url = `${base_url}/api/github/${user}/repos`;
      if (specificRepos.length > 0) {
        url += `?repos=${specificRepos.join(',')}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching repos:', error);
      return [];
    }
  };

  const fetchReadme = async (fullName) => {
    try {
      const [user, repoName] = fullName.split('/');
      const response = await fetch(`${base_url}/api/github/${user}/${repoName}/readme`, {
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

  const transformImageUrl = (readmeContent, fullName) => {
    const imageUrlMatch = readmeContent.match(/\!\[.*?\]\((.*?)\)/);
    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;
    if (imageUrl && !imageUrl.startsWith('http')) {
      const [user, repoName] = fullName.split('/');
      return `https://raw.githubusercontent.com/${user}/${repoName}/main/${imageUrl}`;
    } else {
      return imageUrl || '/placeholder.png';
    }
  };

  useEffect(() => {
    const initializeRepos = async () => {
      const myRepos = await fetchRepos('astro0725');

      const groupReposPromises = Object.entries(groupRepoNames).map(async ([user, repos]) => {
        return Promise.all(repos.map(repo => fetchRepos(user, [repo])));
      });
      const groupReposResults = (await Promise.all(groupReposPromises)).flat(2); 

      const allFetchedRepos = [...myRepos, ...groupReposResults];

      const reposWithImages = await Promise.all(allFetchedRepos.map(async (repo) => {
        const readmeData = await fetchReadme(repo.full_name);
        if (Object.keys(readmeData).length === 0) {
          return { ...repo, imageUrl: '/placeholder.png' };
        }

        const readmeContent = atob(readmeData.content);
        const fullImageUrl = transformImageUrl(readmeContent, repo.full_name);

        return { ...repo, imageUrl: fullImageUrl };
      }));

      let personalRepos = [], groupRepos = [], otherRepos = [];

      reposWithImages.forEach(repo => {
        const repoName = repo.name;
        if (personalRepoNames.includes(repoName)) {
          personalRepos.push(repo);
        } else if (Object.values(groupRepoNames).flat().includes(repoName)) {
          groupRepos.push(repo);
        } else {
          otherRepos.push(repo);
        }
      });

      setRepos({
        personal: personalRepos,
        group: groupRepos,
        other: otherRepos,
      });
    };

    initializeRepos();
  }, []);

  const renderProjects = (projectsArray) => {
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

  const renderCategory = (categoryName, projectsArray) => {
    return (
      <div id={`${categoryName}`} className="w-full md:w-1/3 px-2 h-96 overflow-auto">
        <h2 className="text-xl text-center font-bold mb-4">{categoryName}</h2>
        {renderProjects(projectsArray)}
      </div>
    );
  };

  return (
    <div id='projects' className='bg-base shadow-xl text-white rounded-lg font-sans p-6 w-5/6 mx-auto my-4'>
      <h2 className="text-3xl text-secondary font-extrabold my-2">Projects</h2>
      <div className="flex flex-wrap -mx-2">
        {renderCategory('Personal', repos.personal)}
        {renderCategory('Group', repos.group)}
        {renderCategory('Other', repos.other)}
      </div>
    </div>
  );
};

export default Projects;