const express = require('express')
require('dotenv').config()
const indexRouter = require('./routes/index-router')
const newRouter = require('./routes/new-router');
const path = require('node:path');
const messageRouter = require('./routes/message-router');
const app = express();

const PORT = 8000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use(express.urlencoded({extended: true}))
app.use(indexRouter)
app.use(newRouter)
app.use('/message',messageRouter)

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`)
})