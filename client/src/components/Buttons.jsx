import { useState } from 'react'
const buttonNames = [
  { id: 1, name: 'GET JOBS' },
  { id: 2, name: 'GET USERS' },
]

const Buttons = () => {
  const [data, setData] = useState(null)
  const [transition, setTransition] = useState(false)

  const handleClick = () => {
    setTransition(true)
    setTimeout(async () => {
      const response = await fetch('http://localhost:4000/api/get-jobs')
        .then(res => res.json())
        .then(res => console.log(res))
      setData(response)
      setTransition(false)
      // console.log('This is data', data)
    }, 1000)
  }
  return (
    <div className="bg-zinc-100 flex flex-col justify-center items-center gap-4 shadow-md p-3">
      <div className="flex gap-4 py-3 px-5">
        {buttonNames?.map((button, i) => (
          <button
            key={i}
            className="border-2 border-transparent bg-zinc-400/80 text-white rounded py-1 px-3 shadow-md shadow-zinc-400 animate-slidedown hover:bg-zinc-400 hover:shadow-zinc-300 transition-all"
            onClick={handleClick}
          >
            {button.name}
          </button>
        ))}
      </div>

      <div className=" bg-white p-3 rounded shadow-inner shadow-zinc-300">
        {data !== null ? (
          <>
            TRUE
            {/* {data?.map((item, i) => (
              <div key={i}>{item.title}</div>
            ))} */}
          </>
        ) : (
          <span>FALSE</span>
        )}
      </div>
    </div>
  )
}

export default Buttons
