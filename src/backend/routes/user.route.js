const express = require('express')
const AuthController = require('../controller/AuthController.controller')

const UserRouter = express.Router();
UserRouter.get('/login', AuthController.index)
UserRouter.post('/login', AuthController.login)
UserRouter.post('/register', AuthController.register)

module.exports = UserRouter
