const controller = require('../controllers/message_controller');
const express = require('express');
const router = express.Router();

router.post('/', controller.createMessage);
router.get('/', controller.getMessages);
router.get('/:id', controller.getMessageById);
router.put('/:id', controller.updateMessage);
router.delete('/:id', controller.deleteMessage);

module.exports = router;