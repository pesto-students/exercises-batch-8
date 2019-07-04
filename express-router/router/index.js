const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const languages = [];

router.get('/', (req, res) => res.render('index.ejs', { languages }));

router.post('/', (req, res) => {
  languages.push({ id: languages.length, name: req.body.name });
  res.redirect('/');
});

router.patch('/:id', (req, res) => {
  languages[req.params.id].name = req.body.name;
  res.redirect('/');
});

router.delete('/:id', (req, res) => {
  languages.splice(req.params.id, 1);
  res.redirect('/');
});

router.get('/new', (req, res) => res.render('new.ejs'));

router.get('/:id/show', (req, res) => res.render('show.ejs', { language: languages[req.params.id] }));

router.get('/:id/edit', (req, res) => res.render('edit.ejs', { language: languages[req.params.id] }));

module.exports = router;
