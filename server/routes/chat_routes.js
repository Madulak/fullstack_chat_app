const express = require('express');
const router = express.Router();

const chatController = require('../controller/chat');

const middleware = require('../middleware/isAuth');

router.get('/users', chatController.getUsers);

router.get('/user/:id', chatController.getSingleUser);

router.post('/message/:id', middleware, chatController.sendMessage);


module.exports = router;
