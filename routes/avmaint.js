const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.avmaint.getAll);
// router.get('/:city', ctrl.avmaint.getAvmaintById);

module.exports = router;