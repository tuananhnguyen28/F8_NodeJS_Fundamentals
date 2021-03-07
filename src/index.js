// Install Express: npm install express
// Run Project: node index.js
// Install Nodemon: npm i nodemon --save-dev
// Run Project After Install Nodemon: npm start
// Install Morgan: npm i morgan --save-dev
// Install Express Handlebars: npm i express-handlebars
// Install Node Sass: npm i node-sass --save-dev
// How to run Node Sass: npm run watch (configured in package.json)
// How to configure Node Sass (running multiple folders): node-sass --watch <input:root folder> --output <output: roor folder>

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));