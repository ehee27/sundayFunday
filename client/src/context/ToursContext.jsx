import { createContext, useState, useEffect } from 'react'

const initialState = {
  tours: [],
}

export const ToursContext = createContext()

export const ToursContextProvider = ({ children }) => {
  const [tourData, setTourData] = useState(initialState.tours)

  useEffect(() => {
    fetch('http://localhost:4000/api/globus/get-tour-media')
      .then(res => res.json())
      .then(res => setTourData(res))
  }, [])
  return (
    <ToursContext.Provider value={{ tourData }}>
      {children}
    </ToursContext.Provider>
  )
}
