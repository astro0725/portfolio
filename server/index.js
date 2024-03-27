require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.get('/api/github/:user/repos', async (req, res) => {
  const { user } = req.params;
  const specificRepos = req.query.repos ? req.query.repos.split(',') : [];

  try {
    const response = await fetch(`https://api.github.com/users/${user}/repos`, {
      headers: {
        'Authorization': `token ${process.env.GITHUB_PAT}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    if (!response.ok) {
      console.error('Response not OK:', await response.text());
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    let data = await response.json();

    if (specificRepos.length > 0) {
      data = data.filter(repo => specificRepos.includes(repo.name));
    } else {
      if (user === 'astro0725') {
        const excludedRepos = ['will-you','portfolio', 'student-portfolio-css', 'astro0725', 'spawn-point', 'PixelPals', 'prework-study-guide', 'horiseon-refactor-challenge'];
        data = data.filter(repo => !excludedRepos.includes(repo.name));
      }
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.get('/api/github/:user/:repoName/readme', async (req, res) => {
  const { user, repoName } = req.params;
  try {
    const response = await fetch(`https://api.github.com/repos/${user}/${repoName}/readme`, {
      headers: {
        'Authorization': `token ${process.env.GITHUB_PAT}`,
        'Accept': 'application/vnd.github+json',
      },
    });
    if (!response.ok) throw new Error(`Failed to fetch README: ${response.statusText}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching README:', error);
    res.status(500).send('Server error');
  }
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});