const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => res.send('Hey, I am server response'));
app.get('/movie/:title', (req, res) => {
  const { title } = req.params;
  return res.send(`My favorite movie is ${title}`);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port: ${port}`));

module.exports = app;
