const express = require('express');
const app = express();


app.get('/', (req, res) => res.send(`Hey, I am server response`));
app.get('/movie/:title', (req, res) => {
  const { title } = req.params;
  res.send(`My favorite movie is ${title}`);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port: ${port}`));