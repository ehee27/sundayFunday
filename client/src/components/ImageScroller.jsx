import { useState } from 'react'
const imagePath = 'https://images.globusfamily.com/BrandsitesCommon/hotels/'

const ImageScroller = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1)
  return (
    <div className="flex flex-col items-center rounded-md shadow-inner shadow-zinc-200">
      <img
        className="w-[90%] h-[60%] rounded-md py-5"
        src={`${imagePath}/${data?.HotelCode._text}/${
          data?.HotelImages.HotelImage[parseInt(currentImageIndex)].Name._text
        }`}
      ></img>
      <div className="flex gap-2 overflow-x-scroll py-1">
        {data.HotelImages.HotelImage.map((image, i) => (
          <img
            key={i}
            onClick={() => setCurrentImageIndex(i)}
            className="h-20 w-20 hover:cursor-pointer hover:scale-105 transition-all"
            src={`${imagePath}${data?.HotelCode._text}/${image.Name._text}`}
          ></img>
        ))}
      </div>
    </div>
  )
}

export default ImageScroller
