import React, { useEffect } from 'react'
import backgroundImage from './assets/images/bg-pattern.svg'
import Card from './components/Card'
import { useSelector } from 'react-redux'
import userSlice from './store/userSlice'

function Home() {
  const userStatus = useSelector(state => state.userSlice)
  return (
    <div className="h-full font-manrope flex flex-col " style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="text-center max-w-lg mx-auto pt-12">
        <h1 className="text-4xl  font-semibold mb-2 text-headcustom">Simple, traffic-based pricing </h1>
        <p className="text-15px text-paracustom mb-">Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <div className='md:mt-0'>
        <Card/>
      </div>
      <h1 className='flex justify-center'>{userStatus}h</h1>
    </div>
  )
}

export default Home
