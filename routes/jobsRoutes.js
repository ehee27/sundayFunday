const express = require('express')
// const { jobs } = require('../data.json')
const jobsRouter = express.Router()
const jobsController = require('../controllers/jobsController')

jobsRouter.get('/get-jobs', (req, res) => {
  res.json(jobsController())
})

module.exports = jobsRouter
