import React from 'react'
import './App.css'
import Carousel from './Components/Carousel.jsx' 
import Navbar from './Components/Navbar.jsx'
import Cards from './Components/Cards.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <>
     <Navbar />
     <Carousel />
     <Cards />
     <Footer />
    </>
  )
}

export default App