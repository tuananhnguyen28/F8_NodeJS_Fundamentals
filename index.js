// Install Syntax: npm install express
// Run Syntax: node index.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  return res.send('Hello The Blog Website');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));