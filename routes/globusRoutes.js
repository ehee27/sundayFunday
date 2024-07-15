const express = require('express')

const globusRouter = express.Router()
const callGetAllHotelCodes = require('../controllers/hotelCodes')
const callGetHotelMedia = require('../controllers/hotelMedia')
const callGetAllAvailableTours = require('../controllers/availableTours')
const callGetTourMedia = require('../controllers/availableTours')
const callGetToursByBrand = require('../controllers/tourMediaByBrand')

// GET HOTEL CODES
globusRouter.get('/get-hotel-codes', async (req, res) => {
  res.json({ data: await callGetAllHotelCodes() })
})
globusRouter.get('/get-hotel-media', async (req, res) => {
  // const { code } = req.body
  res.json({ data: await callGetHotelMedia() })
})
globusRouter.get('/get-all-available-tours', async (req, res) => {
  res.json({ data: await callGetAllAvailableTours() })
})
globusRouter.get('/get-tour-media', async (req, res) => {
  res.json({ data: await callGetTourMedia() })
})
globusRouter.get('/get-tour-media-by-brand', async (req, res) => {
  res.json({ data: await callGetToursByBrand() })
})

module.exports = globusRouter
