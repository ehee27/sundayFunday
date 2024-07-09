import { createContext, useState, useEffect } from 'react'

const initialState = {
  hotelData: [],
}

export const HotelsContext = createContext()

export const HotelsContextProvider = ({ children }) => {
  const [hotelData, setHotelData] = useState(initialState.hotelData)

  useEffect(() => {
    fetch('http://localhost:4000/api/globus/get-hotel-codes')
      .then(res => res.json())
      .then(res => setHotelData(res))
  }, [])

  return (
    <HotelsContext.Provider value={{ hotelData }}>
      {children}
    </HotelsContext.Provider>
  )
}
