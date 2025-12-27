const {Router} = require('express');
const {newController, newPost, constraint} = require('../controllers/new-controller');
const newRouter = Router();

newRouter.get('/new', newController)
newRouter.post('/new', constraint, newPost)

module.exports = newRouter