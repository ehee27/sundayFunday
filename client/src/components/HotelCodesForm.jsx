import { useContext, useState } from 'react'
import { HotelsContext } from '../context/HotelsContext'

const HotelCodesForm = () => {
  const [selection, setSelection] = useState('')

  const { hotelData } = useContext(HotelsContext)

  let codes = hotelData.data?.slice(3229)

  const handleSelection = async e => {
    const response = await fetch(
      'http://localhost:4000/api/globus/get-hotel-media',
      {
        method: 'POST',
        body: { code: e.target.value },
      }
    )
    setSelection(response)
    // console.log('This...', e.target.value)
    console.log('This...', response)
  }
  //

  return (
    <div className="flex flex-col justify-center items-center p-5 animate-slidedown">
      <p className="text-md text-zinc-400">Select A Hotel</p>
      <div className="bg-zinc-100 rounded-md shadow-md p-3">
        <select
          className="border-2 rounded px-3 py-1"
          onChange={handleSelection}
        >
          {codes?.map((code, i) => (
            <option key={i}>{code}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default HotelCodesForm
