const express = require('express');

const router = express.Router();

router.get('/languages', (req, res, next) => {
  const languages = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'C++' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'Lisp' },
    { id: 5, name: 'Perl' },
  ];
  const middlewareHeader = req.path.replace(/^\//, '');

  res.header('middleware-header', middlewareHeader);
  res.json(languages);
  next();
});

router.get('/packages', (req, res, next) => {
  const favoritePackages = [
    { id: 1, name: 'async' },
    { id: 2, name: 'lodash' },
    { id: 3, name: 'request' },
    { id: 4, name: 'express' },
    { id: 5, name: 'babel-core' },
  ];
  const middlewareHeader = req.path.replace(/^\//, '');

  res.header('middleware-header', middlewareHeader);
  res.json(favoritePackages);
  next();
});

module.exports = router;
