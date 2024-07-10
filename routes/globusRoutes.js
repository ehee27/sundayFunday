const express = require('express')

const globusRouter = express.Router()
const callGetAllHotelCodes = require('../controllers/hotelCodes')
const callGetHotelMedia = require('../controllers/hotelMedia')
// const callGetHotelMedia = require('../controllers/hotelMedia')

// GET HOTEL CODES
globusRouter.get('/get-hotel-codes', async (req, res) => {
  res.json({ data: await callGetAllHotelCodes() })
})
globusRouter.get('/get-hotel-media', async (req, res) => {
  // const { code } = req.body
  res.json({ data: await callGetHotelMedia() })
})

module.exports = globusRouter
