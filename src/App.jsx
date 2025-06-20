import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import LandingPage from './pages/LandingPage'
import NoPage from './pages/NoPage'
import FoamParties from './pages/FoamParties'
import MovieSnow from './pages/MovieSnow'
import Faq from './pages/Faq'
import Prices from './pages/Prices'
import Locations from './pages/Locations'
import './App.css'
import ScrollToTop from './pages/components/ScrollToTop'
import Navbar from './pages/components/Navbar'
import Footer from './pages/components/Footer'


function App() {

  return (
    <>
    <div className='App'>


      <BrowserRouter>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path='/home' element={<LandingPage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/foam-parties' element={<FoamParties/>} />
          <Route path='/movie-snow-parties' element={<MovieSnow/>} />
          <Route path='/faq' element={<Faq/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/prices' element={<Prices/>} />
          <Route path='/locations' element={<Locations/>} />
          <Route path='*' element={<NoPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
    </>
  )
}

export default App
