'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.use('*', (req, res) => {
  res.render('error');
});

module.exports = router;
