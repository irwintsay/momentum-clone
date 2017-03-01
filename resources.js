const router        = require('express').Router();

router.use('/', require('./controllers/home'));

module.exports = router;