const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send({ test:'GMIT' });
});

app.listen(5000);/local port for testing - 5000
