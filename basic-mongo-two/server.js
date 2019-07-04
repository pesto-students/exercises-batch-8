const express = require('express');
const { getAllProjects, getProject } = require('./database');

const PORT = 3000;
const app = express();

app.get('/projects', async (req, res) => {
  const projects = await getAllProjects();
  return res.json({
    projects,
  });
});

app.get('/projects/:id', async (req, res) => {
  const { id } = req.params;
  const project = await getProject(id);
  return res.json({
    project,
  });
});

app.listen(PORT, () => console.log(`Server Listening at ${PORT}`));
