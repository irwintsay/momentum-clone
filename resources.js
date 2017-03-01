const router        = require('express').Router();

router.use('/', require('./controllers/home'));
router.use('/api', require('./controllers/api'));

module.exports = router;