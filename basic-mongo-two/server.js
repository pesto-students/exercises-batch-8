const express = require('express');
const bodyParser = require('body-parser');
const {
  getAllProjects,
  getProject,
  addProject,
  updateProject,
} = require('./database');

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.post('/projects', async (req, res) => {
  const { developer, project } = req.body;
  await addProject({ developer, project });
  return res.json({
    message: 'Project added',
  });
});

app.put('/projects/:id', async (req, res) => {
  const { developer, project } = req.body;
  const { id } = req.params;
  await updateProject(id, { developer, project });
  return res.json({
    message: 'Project added',
  });
});

app.listen(PORT, () => console.log(`Server Listening at ${PORT}`));
