const express = require('express');

const app = express();

app.use((req, res, next) => {
  const url = req.originalUrl.slice(1);
  res.setHeader('middleware-header', url);
  console.log(`Some user visited ${url} at ${new Date()}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello');
});
app.get('/languages', (req, res) => {
  const languages = ['java', 'js', 'python', 'ruby', 'haskell'];
  res.setHeader('Content-Type', 'application/json');
  res.send(languages);
});
app.get('/packages', (req, res) => {
  const packages = [
    'express',
    'body-parser',
    'socket.io',
    'jest',
    'nodemailer'
  ];
  res.setHeader('Content-Type', 'application/json');
  res.send(packages);
});

app.listen(3000, () => {
  console.log('listening to 3000');
});
