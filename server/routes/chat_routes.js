const express = require('express');
const router = express.Router();

const chatController = require('../controller/chat');

router.get('/users', chatController.getUsers);


module.exports = router;
