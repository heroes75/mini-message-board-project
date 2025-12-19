const { messages } = require("./index-controller")

function messageController(req, res) {
    const {messageId} = req.params
    res.render('message', {message: messages[messageId]})
}

module.exports = messageController