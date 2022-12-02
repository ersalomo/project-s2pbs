// const router = require('express').Router()
import { Router } from "express"
import AuthController from '../controller/AuthController.controller.js'
export const UserRouter = Router()
UserRouter.get('/login',AuthController.index)
UserRouter.post('/login',AuthController.login)
UserRouter.post('/register',AuthController.register)