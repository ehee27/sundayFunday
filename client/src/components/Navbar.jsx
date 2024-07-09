import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-zinc-100 shadow-md flex gap-2 justify-center">
      <Link to="/">Home</Link>
      <Link to="/page2">Page2</Link>
      <Link to="/page3">Page3</Link>
    </div>
  )
}

export default Navbar
