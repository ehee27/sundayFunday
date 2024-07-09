import { Link } from 'react-router-dom'

const Page3 = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5 animate-slidedown">
      <p className="text-md text-zinc-400">Welcome to Page 3</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Page3
