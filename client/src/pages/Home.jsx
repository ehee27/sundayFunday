import Buttons from '../components/Buttons'
import { useContext } from 'react'
import { JobsContext } from '../context/JobsContext'
import HotelCodesForm from '../components/HotelCodesForm'

const Home = () => {
  const { jobs } = useContext(JobsContext)
  // console.log('These are the jobs', jobs)
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center p-5">
        <p className="text-md text-zinc-400">Welcome to the Homepage</p>
      </div>
      <div className="">
        {' '}
        <Buttons />
        {jobs?.map((job, i) => (
          <p key={i}>{job.name}</p>
        ))}
      </div>
      <HotelCodesForm />
    </div>
  )
}

export default Home
