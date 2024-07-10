import { useEffect, useState } from 'react'

const HotelMedia = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:4000/api/globus/get-hotel-media')
      .then(res => res.json())
      .then(res => setData(res.data))
    console.log(data)
  }, [])
  return (
    <>
      {data !== null ? (
        <div className="border-4 border-zinc-100/50 rounded-md shadow-md py-3 px-5">
          <p className="text-xl">
            <span>{data.Name._text}</span> -{' '}
            <span className="text-yellow-600">
              {data.StarRating._text} Star
            </span>
          </p>
          <p className="font-bold text-zinc-500 mt-3">{data.Country._text}</p>
          {/* <p className="text-sm">{data.StreetAddress._text}</p> */}

          <div className="py-1 px-3 mt-3 text-sm">
            <p>{data.Description._text}</p>
            <br></br>
            <p>{data.RoomDescription._text}</p>
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </>
  )
}

export default HotelMedia
