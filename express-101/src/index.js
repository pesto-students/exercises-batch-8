const express = require('express');

const app = express();

const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Hey, I am server response');
});
app.get('/movie/:movieTitle', (req, res) => {
  res.send(`My favorite movie is ${req.params.movieTitle}`);
});
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
module.exports = app;
