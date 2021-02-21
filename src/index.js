// Install Express: npm install express
// Run Project: node index.js
// Install Nodemon: npm i nodemon --save-dev
// Run Project After Install Nodemon: npm start
// Install Morgan: npm i morgan --save-dev
// Install Express Handlebars: npm i express-handlebars

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));