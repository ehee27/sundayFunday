import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { HotelsContext } from '../context/HotelsContext'

const Page2 = () => {
  const { hotelData } = useContext(HotelsContext)
  console.log('This is data', hotelData)
  return (
    <div className="flex flex-col justify-center items-center p-5 animate-slidedown">
      <p className="text-md text-zinc-400">Welcome to Page 2</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Page2
