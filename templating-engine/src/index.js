const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const languages = ['JavaScript', 'Haskell', 'Python'];

// Index Page
app.get('/', (req, res) => res.render('../views/pages/index', { languages }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});