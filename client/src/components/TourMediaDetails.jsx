// tried to use Context - wouldn't hold value on re-render/refresh
// using 'useParams' to grab TourNumber from /id

import { useContext, useState, useEffect } from 'react'
// import { ToursContext } from '../context/ToursContext'
import { useParams } from 'react-router-dom'

const TourMediaDetails = () => {
  const [selectedTour, setSelectedTour] = useState(null)
  // const { tourData } = useContext(ToursContext)
  const { id } = useParams()

  useEffect(() => {
    fetch('http://localhost:4000/api/globus/get-tour-media')
      .then(res => res.json())
      .then(res =>
        setSelectedTour(res.data.filter(item => item.TourNumber === id))
      )
    console.log('This...', selectedTour)
  }, [])
  return (
    <div className="p-10">
      {selectedTour !== null ? (
        <>
          <p>{selectedTour[0].Name}</p>
          <p>{selectedTour[0].TourNumber}</p>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  )
}

export default TourMediaDetails
