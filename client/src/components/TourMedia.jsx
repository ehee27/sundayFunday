// This comp fetches the data and renders a list of tours
// users can click any title to Link to the details page - limited data here
// tried to use onClick to target selected tour, tried to use Context, however it seemed most straightforward to utilize the 'details' design pattern
// also experimented with useRef() - can revisit that later

import { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
// import { ToursContext } from '../context/ToursContext'

const TourMedia = () => {
  const [data, setData] = useState('')
  // const countRef = useRef(0)
  const tourRef = useRef('')

  useEffect(() => {
    fetch('http://localhost:4000/api/globus/get-tour-media')
      .then(res => res.json())
      .then(res => setData(res.data.filter(item => item.Brand === 'GLOBUS')))
    // console.log('This...', data)
  }, [])

  // const handleClick = value => {
  //   tourRef.current = value
  //   // setSelectedTour(value)
  //   // tourRef.current === value
  //   // console.log(selectedTour)
  //   console.log(tourRef.current)
  // }

  return (
    <>
      {data !== '' ? (
        <span>
          {data.map((item, i) => (
            <div key={i} className="p-5 rounded-md shadow-md">
              <Link
                to={`http://localhost:5173/tour-media/${item.TourNumber}`}
                // onClick={() => handleClick(item.TourNumber)}
                className=" hover:bg-zinc-100 hover:cursor-pointer"
              >
                {item.Name}
              </Link>
            </div>
          ))}
        </span>
      ) : (
        <span>The data is null</span>
      )}
    </>
  )
}

export default TourMedia
