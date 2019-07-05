const express = require('express');
const dotenv = require('dotenv');
const { getDb } = require('./database');

const app = express();
const port = 3000;

dotenv.config();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => res.redirect('/projects'));

app.get('/projects', async (req, res) => {
  const db = await getDb();
  const projectsCollection = db.collection('projects');
  const projects = projectsCollection.find();
  res.send('All projects', { projects });
});

app.get('/projects/:id', (req, res) => {
  res.send('Single Project');
});

app.post('/projects', (req, res) => {
  res.send('Projects will be added');
});

app.put('/project/:id', (req, res) => {
  res.send('project will be edited');
});

app.delete('/projects:id', (req, res) => {
  res.redirect('/projects');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
