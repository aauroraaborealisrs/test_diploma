const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/users', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
