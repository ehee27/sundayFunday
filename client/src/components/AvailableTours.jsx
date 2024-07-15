// This comp fetches the data and renders a list of tours
// users can click any title to Link to the details page - limited data here
// tried to use onClick to target selected tour, tried to use Context, however it seemed most straightforward to utilize the 'details' design pattern
// also experimented with useRef() - can revisit that later

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const AvailableTours = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/api/globus/get-all-available-tours')
      .then(res => res.json())
      .then(res => setData(res.data.filter(item => item.Brand === 'GLOBUS')))
    // console.log('This...', data)
  }, [])
  return (
    <>
      {data !== null ? (
        <>
          {data.map((item, i) => (
            <div key={i} className="border-4 p-5 rounded-md">
              <Link to={`http://localhost:5173/tour-media/${item.TourNumber}`}>
                {item.Name}
              </Link>
            </div>
          ))}
        </>
      ) : (
        <span>The data is null</span>
      )}
    </>
  )
}

export default AvailableTours
