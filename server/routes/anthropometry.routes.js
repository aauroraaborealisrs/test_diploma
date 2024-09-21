const express = require('express');
const router = express.Router();
const anthropometryController = require('../controller/anthropometry.controller');

// Добавление данных антропометрии
router.post('/anthropometry', anthropometryController.createAnthropometry);

// Получение всех записей антропометрии
router.get('/anthropometry', anthropometryController.getAllAnthropometry);

// Получение данных антропометрии для конкретного пользователя
router.get('/anthropometry/:user_id', anthropometryController.getUserAnthropometry);

// Обновление данных антропометрии
router.put('/anthropometry', anthropometryController.updateAnthropometry);

// Удаление данных антропометрии
router.delete('/anthropometry/:id', anthropometryController.deleteAnthropometry);

module.exports = router;
