const express = require('express');

const port = 3000;

const app = express();

app.use((req, res, next) => {
  res.set('middleware-header', req.url);
  next();
});

app.get('/', (req, res) => res.send('Hello'));

app.get('/languages', (req, res) =>
  res.send({ languages: ['Javascript', 'Java', 'C', 'C++', 'Python'] }));

app.get('/packages', (req, res) =>
  res.send({ packages: ['express', 'fs', 'axios', 'body-parser', 'lodash'] }));

app.listen(port, () => console.log(`Express 101 listening on port ${port}!`));

module.exports = app;
