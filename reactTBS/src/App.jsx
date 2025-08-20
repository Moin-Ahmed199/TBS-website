import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'

import Navbar from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Testimonials from './Components/Testimonials/Testimonials'
import About from './Components/About/About';
import Categories from './Components/Courses/CoursesCategory/Courses';
import PopulorCourses from './Components/Courses/PopulorCourses/PopulorCourses';
import Team from './Components/Faculty/Faculty';
import FounderSection from './Components/Founder/Founder';
import Services from './Components/CoursesService/CoursesServices';
import Slidermain from './Components/Slidermain/Slidermain';

function App() {

  return (
    <>
     
     <Navbar/>
     <Slidermain/>
     <Services/>
     <About/>
     <Categories/>
     <PopulorCourses/>
     <Team/>

   <FounderSection/>
        <Testimonials/>

     <Footer/>
     


    </>
  )
}

export default App
