const express = require('express');

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const projectController = require('../controllers/project.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', projectController.test);
module.exports = router;
