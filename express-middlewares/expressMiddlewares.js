const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello');
});

const languages = 'languages';
app.get(`/${languages}`, (req, res) => {
  res.set('middleware-header', languages);
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date} ${time}`;
  console.log(`middleware-header = ${languages} requested on ${dateTime}`);
  res.json([
    'C',
    'Java',
    'Python',
    'Java Script',
    'Closure',
  ]);
});
const packages = 'packages';
app.get(`/${packages}`, (req, res) => {
  res.set('middleware-header', packages);
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date} ${time}`;
  console.log(`middleware-header = ${packages} requested on ${dateTime}`);
  res.json([
    'Nodemon',
    'Express',
    'body-parser',
    'lodash',
    'babel-core',
  ]);
});

app.listen(3000);
module.exports = app;
