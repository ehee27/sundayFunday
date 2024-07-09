import { Route, Routes } from 'react-router-dom'
import './App.css'
import { JobsContextProvider } from './context/JobsContext'
import { HotelsContextProvider } from './context/HotelsContext'
import Home from './pages/Home'
import Layout from './components/Layout'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

function App() {
  return (
    <>
      <JobsContextProvider>
        <HotelsContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
            </Route>
          </Routes>
        </HotelsContextProvider>
      </JobsContextProvider>
    </>
  )
}

export default App
