const {Router} = require('express');
const indexRouter = Router();
const {indexController} = require('../controllers/index-controller')

indexRouter.get('/', indexController)

module.exports = indexRouter
