'use client'
import React,{useEffect} from 'react'
import Navbar from './components/home/Navbar'
import Hero from './components/home/Hero'
import Partners from './components/home/Partners'
import Getcard from './components/home/Getcard'
import Try from './components/home/Try'
import Packages from './components/home/Packages'
import Values from './components/home/Values'
import Contact from './components/home/Contact'
import Projects from './components/home/Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';

function page() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
   <main>
    <Hero/>
    <Partners/>
    <Values/>
    <Projects/>
    <Try/>
    <Contact/>
    
   </main>
  )
}

export default page