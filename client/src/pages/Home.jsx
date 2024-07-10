import Buttons from '../components/Buttons'
import { useContext } from 'react'
import { JobsContext } from '../context/JobsContext'
import HotelCodesForm from '../components/HotelCodesForm'
import HotelMedia from '../components/HotelMedia'

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center p-5">
        <p className="text-md text-zinc-400">Welcome</p>
      </div>
      <div className=""></div>

      <HotelMedia />
    </div>
  )
}

export default Home
