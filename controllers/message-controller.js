const { getMessageInfo } = require("../db/queries");
const { messages } = require("./index-controller")

async function messageController(req, res) {
    console.log('start message controller')
    const {messageId} = req.params;
    const message = await getMessageInfo(messageId)
    console.log('message:', message[0])
    res.render('message', {message: message[0]})
    console.log('end message controller')
}

module.exports = messageController