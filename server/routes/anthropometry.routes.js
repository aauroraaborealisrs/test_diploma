const express = require('express');
const router = express.Router();
const anthropometryController = require('../controller/anthropometry.controller');

router.post('/anthropometry', anthropometryController.createAnthropometry);

router.get('/anthropometry', anthropometryController.getAllAnthropometry);

router.get(
  '/anthropometry/:user_id',
  anthropometryController.getUserAnthropometry
);

router.put('/anthropometry', anthropometryController.updateAnthropometry);

router.delete(
  '/anthropometry/:id',
  anthropometryController.deleteAnthropometry
);

module.exports = router;
