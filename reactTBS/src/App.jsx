import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'

import Navbar from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Testimonials from './Components/Testimonials/Testimonials'

function App() {

  return (
    <>
     
     <Navbar/>
     <Testimonials/>

     <Footer/>
     


    </>
  )
}

export default App
