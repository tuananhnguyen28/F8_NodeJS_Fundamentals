// Install Express: npm install express
// Run Project: node index.js
// Install Nodemon: npm i nodemon --save-dev
// Run After Install Nodemon: npm start

const express = require('express');
const app = express();
const port = 3000;

app.get('/tin-tuc', (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  return res.send('Hello The Blog Website');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));