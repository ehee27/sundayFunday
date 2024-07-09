import { createContext, useEffect, useState } from 'react'
const initialState = {
  jobs: [{ id: 1, name: 'Job27' }],
}

export const JobsContext = createContext()

export const JobsContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState(initialState.jobs)

  useEffect(() => {
    fetch('http://localhost:4000/api/get-jobs')
      .then(res => res.json())
      .then(res => setJobs(res))
  }, [])

  return (
    <JobsContext.Provider value={{ jobs }}>{children}</JobsContext.Provider>
  )
}
