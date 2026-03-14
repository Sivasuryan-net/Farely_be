const controller = require('../controllers/entry_controller');
const express = require('express');
const router = express.Router();

router.post('/', controller.createEntry);
router.get('/', controller.getEntries);
router.get('/:id', controller.getEntryById);
router.put('/:id', controller.updateEntry);
router.delete('/:id', controller.deleteEntry);

module.exports = router;
