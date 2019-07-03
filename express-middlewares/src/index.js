/* eslint-disable no-console */
const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use((req, res, next) => {
  const { originalUrl } = req;
  res.setHeader('middleware-header', originalUrl);
  console.log('Time:- ', new Date());
  console.log(`middleware-header=${originalUrl}`);
  next();
});

app.get('/', (req, res) => res.render('index', { data: 'Hello' }));

const languages = ['JavaScript', 'Python', 'TypeScript', 'Java', 'C'];

app.get('/languages', (req, res) => res.json({ languages }));

const packages = ['Express', 'body-parser', 'create-react-app', 'bcrypt', 'passport'];

app.get('/packages', (req, res) => res.json({ packages }));

app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
