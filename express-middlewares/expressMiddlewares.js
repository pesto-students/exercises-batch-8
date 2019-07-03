const express = require('express');

const app = express();
const { languages, fiveFavoritePackages, timeNow } = require('./utils');

app.use((req, res, next) => {
  const { originalUrl } = req;
  res.setHeader('middleware-header', originalUrl);
  console.log(`time:- ${timeNow()}`);
  console.log(`middleware-header=${originalUrl}`);
  next();
});

app.get('/', (req, res) => res.send('Hello'));
app.get('/languages', (req, res) => res.json(languages));
app.get('/packages', (req, res) => res.json(fiveFavoritePackages));

const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`Server is now running on the port : ${port}`));
