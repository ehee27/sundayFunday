const express = require('express')
const { users } = require('../data.json')
const usersController = require('../controllers/usersController')

const userRouter = express.Router()

userRouter.get('/get-users', (req, res) => {
  res.json(usersController())
})

module.exports = userRouter
