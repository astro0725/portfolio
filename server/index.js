require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.get('/api/github/repos', async (req, res) => {
  try {
    const response = await fetch('https://api.github.com/users/astro0725/repos', {
      headers: {
        'Authorization': `token ${process.env.GITHUB_PAT}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    if (!response.ok) {
      console.error('Response not OK:', await response.text());
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.get('/api/github/:repoName/readme', async (req, res) => {
  const { repoName } = req.params;
  try {
    const response = await fetch(`https://api.github.com/repos/astro0725/${repoName}/readme`, {
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

app.get ('/api/github/groups', async (req, res) => {
  const { user, repoName } = req.params;
  try{
    const response = await fetch (`https://api.github.com/repos/${user}/${repoName}`, {
      headers: {
        'Authorization': `token ${process.env.GITHUB_PAT}`,
        'Accept': 'application/vnd.github+json',
      },
    });
    if (!response.ok) throw new Error (`Error fetching ${user}, ${repoName} server side: ${response.statusText}`);
    const data = await response.json();
  } catch (err) {
    console.error('Error fetching group data in serverside:', err);
    res.status(500).send('Server side error: ' + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});