const {messages} = require('./index-controller')

function newController(req, res) {
    res.render('form', {title: 'New'})
}

function newPost(req, res) {
    console.log('req.body:', req.body)
    const {text, user} = req.body
    messages.push({text: text, user: user, added: new Date()})
    res.redirect('/')
}

module.exports = {newController, newPost}