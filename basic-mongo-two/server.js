const express = require('express');
const { getAllProjects } = require('./database');

const PORT = 3000;
const app = express();

app.get('/projects', async (req, res) => {
  const projects = await getAllProjects();
  return res.json({
    projects,
  });
});

app.listen(PORT, () => console.log(`Server Listening at ${PORT}`));
