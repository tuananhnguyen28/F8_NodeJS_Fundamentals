var express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show); // using method 'get/post' to using correct target controller
router.get('/', newsController.index);

module.exports = router;