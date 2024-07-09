import { apiSlice } from './apiSlice'
const hotelUrl = '/api/globus/get-hotel-codes'

export const hotelMediaSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // GET HOTEL CODES ---------------
    getHotelCodes: builder.query({
      query: () => hotelUrl,
    }),
  }),
})
