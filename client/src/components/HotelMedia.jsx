import { useEffect, useState } from 'react'
import ImageScroller from './ImageScroller'

const HotelMedia = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/api/globus/get-hotel-media')
      .then(res => res.json())
      .then(res => setData(res.data))
    console.log('This...', data)
  }, [])
  return (
    <>
      {data !== null ? (
        <div className="rounded-md shadow-md">
          <div className="flex flex-col items-start bg-sky-800 text-white rounded-t-md py-3 px-10 shadow-md shadow-zinc-400">
            {' '}
            <p className="text-7xl">{data.Name._text}</p>
            <p className="text-xl font-semibold mt-2">{data.Country._text}</p>
            <p className="text-md italic text-yellow-400 mt-2">
              {data.StarRating._text} Star
            </p>
          </div>

          {/* ///////////// CONTENT ////////// */}
          <div className="grid grid-cols-1 md:grid-cols-3 py-7 px-5">
            <div className="flex flex-col items-start px-3 pt-3 text-sm md:col-span-2">
              <p className="text-lg text-left">{data?.Description?._text}</p>

              <p className="text-lg text-left mt-5">
                {data?.RoomDescription?._text}
              </p>
              <div className="flex flex-col gap-2 mt-10 w-[100%] text-left">
                <p className="text-lg">
                  <span className="text-sky-800 font-black">
                    Distance to Airport:{' '}
                  </span>
                  <span>{data?.DistanceToAirport?._text}</span>
                </p>
                <p className="text-lg">
                  <span className="text-sky-800 font-black">
                    Distance to City Center:{' '}
                  </span>
                  <span>{data?.DistanceToCityCenter?._text}</span>
                </p>
                <p className="text-lg">
                  <span className="text-sky-800 font-black">
                    Distance to Metro Station:{' '}
                  </span>
                  <span>{data?.DistanceToMetroStation?._text}</span>
                </p>
              </div>
            </div>

            {/* /////// HERO IMAGE ///////// */}
            <ImageScroller data={data} />
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </>
  )
}

export default HotelMedia
