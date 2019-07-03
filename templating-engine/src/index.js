const express = require('express');

const app = express();

const languages = ['JavaScript', 'Haskell', 'Python'];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs', { languages });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
