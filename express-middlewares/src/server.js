const express = require('express');

const PORT = 3000;
const app = express();

const languages = ['Python', 'JavaScript', 'C', 'Java', 'Lisp'];
const packages = ['express', 'nodemon', 'create-react-app', 'redux', 'react-router-dom'];

app.use(express.json({ extended: false }));

app.use((req, res, next) => {
  const { path } = req;
  const properPath = path.slice(1);
  res.set('middleware-header', properPath);
  console.log(`req made at ${Date()}, middleware-header=${properPath}`);
  next();
});

app.get('/', (req, res) => res.send('Hello'));

app.get('/languages', (req, res) => res.json({ languages }));
app.get('/packages', (req, res) => res.json({ packages }));

app.listen(PORT, () => console.log(`Server started on ${PORT}...`));
