const router          = require('express').Router();
const controller      = require('./controller');

router.get('/unsplash', controller.getRandomBackground);

module.exports = router;