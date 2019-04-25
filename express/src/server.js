'use strict';

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'public');

const router = require('./routes/router.js');

app.use(router);

module.exports = port => {
  app.listen(port, () => {
    console.log(`Server up on port ${port}...`);
  });
};
