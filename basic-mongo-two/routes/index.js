const express = require('express');
const {
    getAllProjects,
    getProjectById,
    insertProject,
} = require('../Repositories/repositories');

const router = express.Router();

router.get('/', async (req, res) => {
  const projects = await getAllProjects();
  res.send(projects);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const project = await getProjectById(id);
  res.send(project);
});

router.post('/', async (req, res) => {
  // WIP
  const { developer, project } = req.body;
  const data = { developer, project };
  const insertedProject = insertProject(data);
  res.send(insertedProject);
});

module.exports = router;
