/* eslint-disable no-console */
const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  const data = 'Hey, I am server response';
  res.send(data);
});

app.get('/movie/:title', (req, res) => {
  const { title } = req.params;
  res.send(`My favorite movie is ${title}`);
});

app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));

module.exports = app;
