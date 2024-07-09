// imported @reduxJS/toolkit and created the store
// then created apiSlice - check the browser to verify it's live
// then focus on slices

import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'

export const store = configureStore({
  reducer: {
    // hotel: hotelReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
