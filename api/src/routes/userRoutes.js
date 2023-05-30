const { Router } = require('express');
const { UserController } = require('../controllers');
UserController
const userRouter = Router();

userRouter.get('', (req,res) => new UserController(req,res).getAll());

module.exports = userRouter;