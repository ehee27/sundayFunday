const express = require('express')

const globusRouter = express.Router()
const callGetAllHotelCodes = require('../controllers/hotelCodes')

// GET HOTEL CODES
globusRouter.get('/get-hotel-codes', async (req, res) => {
  res.json({ data: await callGetAllHotelCodes() })
})
globusRouter.get('/get-hotel-media', async (req, res) => {
  res.json({ data: await callGetHotelMedia(req.hotelCode) })
})

module.exports = globusRouter
