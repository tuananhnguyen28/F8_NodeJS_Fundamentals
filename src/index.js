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

app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/search', (req, res) => {
  console.log(req.query.name);
  res.render('search'); // exam: http://localhost:3000/search?name=nguyen tuan&age=28&tel= 037 898 3718
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));