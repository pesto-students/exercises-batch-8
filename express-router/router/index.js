const express = require('express');

const router = express.Router();

const service = require('../service');

router.get('/edit', (req, res) => {
  res.render('edit');
});

router.get('/', (req, res) => {
  res.render('index', {
    languages: service.getAll(),
  });
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/', (req, res) => {
  console.log(req);
  service.add(req.body.name);
  res.status(201);
  res.send(`${req.body.name} Language Added`);
});

router.get('/edit', (req, res) => {
  res.render('edit');
});

module.exports = router;
