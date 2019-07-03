const express = require('express');

const router = express.Router();
const languages = [
  { id: 1, name: 'JavaScript' },
];

router.get('/', (req, res) => {
  res.render('index.ejs', {
    languages,
  });
});

router.get('/:id', (req, res) => {
  res.render('index.ejs', {
    languages,
  });
});

module.exports = router;
