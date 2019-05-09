const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.status(200).send('Proof of life!');
});

app.use('*', (req, res) => {
  res.status(404).send('Page missing');
});

app.use((err, req, res, next) => {
  res.status(500).send('Server error');
});

app.listen(3000, () => {
  console.log('server is up on 3000');
});
