import React, { useEffect, useState } from 'react'
import backgroundImage from './assets/images/bg-pattern.svg'
import darkModeImage from './assets/images/noun-dark-mode-4256401.svg'
import Card from './components/Card'
import { useSelector } from 'react-redux'



function Home() {
  const userStatus = useSelector((state)=> state?.user?.views)
  const [isDark , setIsDark]= useState(false)

  useEffect(()=>{
    console.log(userStatus)
  },[userStatus])

  const togglebtn = ()=>{
    setIsDark(!isDark)
  }

  return (
  <div className={`h-screen dark:bg-black font-manrope ${isDark ? 'dark' : ""} `} style={{backgroundImage: isDark ? "none" : `url( ${backgroundImage})`, display: 'grid', gap: '40px'}}>
    <div className="text-center max-w-lg mx-auto pt-12">
      <h1 className="text-4xl font-semibold mb-2 text-headcustom dark:text-white">Simple, traffic-based pricing</h1>
      <p className="text-15px text-paracustom mb-">Sign-up for our 30-day trial. No credit card required.</p>
    </div>
    <div className='md:mt-0'>
      <Card/>
    </div>
    <button onClick={togglebtn} className='flex justify-center items-center  text- black text-black dark:text-white'>{isDark ? "Light" : "Dark"}</button>
  </div>
  )
}

export default Home
