const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res) => res.send('Hey, I am server response'));

app.get('/movie/:title', (req, res) => {
  res.send(`My favorite movie is ${req.params.title}`);
});

app.listen(port, () => console.log(`Express 101 listening on port ${port}!`));

module.exports = app;
