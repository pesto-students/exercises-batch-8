const express = require('express');
const { languages } = require('./languages');
const { packages } = require('./packages');

const port = 3000;
const app = express();

app.use((req, res, next) => {
  const { path } = req;
  let pathName = path;
  if (path.length) {
    pathName = path.slice(1);
  }
  console.log(`${Date()} middleware-header=${pathName}`);
  res.header('middleware-header', pathName);
  next();
});

app.get('/', (req, res) => res.send('Hello'));

app.get('/languages', (req, res) => res.json({
  languages,
}));

app.get('/packages', (req, res) => res.json({
  packages,
}));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port: ${port}`));

module.exports = app;
