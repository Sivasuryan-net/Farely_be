const express = require('express');
const router = express.Router();

router.use('/users', require('./user_route'));
router.use('/entries', require('./entry_route'));
router.use('/messages', require('./message_route'));

module.exports = router;