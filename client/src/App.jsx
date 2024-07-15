import { Route, Routes } from 'react-router-dom'
import './App.css'
import { JobsContextProvider } from './context/JobsContext'
import { HotelsContextProvider } from './context/HotelsContext'
import Home from './pages/Home'
import Layout from './components/Layout'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import AvailableTours from './components/AvailableTours'
import TourMedia from './components/TourMedia'
import { ToursContextProvider } from './context/ToursContext'
import TourMediaDetails from './components/TourMediaDetails'

function App() {
  return (
    <>
      <JobsContextProvider>
        <HotelsContextProvider>
          <ToursContextProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/tours" element={<AvailableTours />} />
                <Route path="/tour-media" element={<TourMedia />} />
                <Route path="/tour-media/:id" element={<TourMediaDetails />} />
              </Route>
            </Routes>
          </ToursContextProvider>
        </HotelsContextProvider>
      </JobsContextProvider>
    </>
  )
}

export default App
