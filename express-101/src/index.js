const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hey, I am server response'));
app.get('/movies/:title', (req, res) => {
  res.send(`My favorite movie is ${req.params.title}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));

module.exports = app;
