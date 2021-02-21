// Install Express: npm install express
// Run Project: node index.js
// Install Nodemon: npm i nodemon --save-dev
// Run Project After Install Nodemon: npm start
// Install Morgan: npm i morgan --save-dev

const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get('/tin-tuc', (req, res) => {

  return res.send('Hello The Blog Website');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));