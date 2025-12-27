const { getAllMessages } = require("../db/queries");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


async function indexController(req, res) {
  const allMessages = await getAllMessages()
  res.render('index', {messages: allMessages, title: 'Mini Messageboard'})
}

module.exports = {indexController, messages}