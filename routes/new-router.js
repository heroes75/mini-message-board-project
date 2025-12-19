const {Router} = require('express');
const {newController, newPost} = require('../controllers/new-controller');
const newRouter = Router();

newRouter.get('/new', newController)
newRouter.post('/new', newPost)

module.exports = newRouter