import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState({ personal: [], group: [], other: [] });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const personalRepoNames = ['GamifyLife', 'pixel-pals-2.0'];
  const groupRepoNames = { 'stevendreed': ['3600'], 'SnapperGee': ['bookworm'] };

  const fetchRepos = async (user, specificRepos = []) => {
    try {
      let url = `/api/github/${user}/repos`;
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
      const response = await fetch(`/api/github/${user}/${repoName}/readme`, {
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
      setFilteredProjects([...personalRepos, ...groupRepos, ...otherRepos]);
    };

    initializeRepos();
  }, []); 


  const renderProjects = (projectsArray) => {
    return (
      <div className='grid grid-cols-2 justify-center gap-4'>
        {projectsArray.map(repo => (
          <div key={repo.id} className='w-64 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg m-4'>
            <div className='relative'>
              <figure className='overflow-hidden'>
                {repo.imageUrl && (
                  <img src={repo.imageUrl} alt={`${repo.name} screenshot`} className='w-full h-32 object-cover' />
                )}
              </figure>
              <div className='p-4 text-center'>
                <h3 className='font-bold text-primary text-lg'>{repo.name}</h3>
                <p className='text-gray-300 text-sm'>{repo.description}</p>
                <a href={repo.html_url} target='_blank' rel='noopener noreferrer' className='text-highlight'>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  
    const allReposWithCategory = [
      ...repos.personal.map(repo => ({ ...repo, category: 'Personal' })),
      ...Object.entries(groupRepoNames).flatMap(([user, repoNames]) => {
        return repoNames.flatMap(repoName => {
          const foundRepo = repos.group.find(repo => repo.name === repoName && repo.owner.login === user);
          return foundRepo ? { ...foundRepo, category: 'Group' } : [];
        });
      }),
      ...repos.other.map(repo => ({ ...repo, category: 'Other' })),
    ];
  
    if (category === 'All') {
      setFilteredProjects(allReposWithCategory);
    } else {
      const filtered = allReposWithCategory.filter(repo => repo.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <section data-page='portfolio'>
      <header>
        <h2 className='text-highlight text-xl font-bold'>Portfolio</h2>
      </header>

      <ul className='flex justify-start items-center gap-6 pl-1 mb-5 text-white'>
        {['All', 'Personal', 'Group', 'Other'].map(category => (
          <li className='text-white transition-colors duration-300 hover:text-secondary' key={category}>
            <button
              className={category === selectedCategory ? 'text-secondary' : ''}
              onClick={() => handleFilterClick(category)}
              data-filter-btn
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    {renderProjects(filteredProjects)}
  </section>
  );
};

export default Projects;