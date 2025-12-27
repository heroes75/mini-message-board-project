const {Router} = require('express');
const messageController = require('../controllers/message-controller');
const messageRouter = Router();

messageRouter.get('/:messageId', messageController)

module.exports = messageRouter