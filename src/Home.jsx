import React from 'react'
import backgroundImage from './assets/images/bg-pattern.svg'
import Card from './components/Card'

function Home() {
  return (
    <div className="h-screen font-manrope flex flex-col items-center " style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="text-center max-w-lg mx-auto pt-20">
        <h1 className="text-4xl  font-semibold mb-2 text-headcustom">Simple, traffic-based pricing </h1>
        <p className="text-15px text-paracustom mb-">Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <div>
        <Card/>
      </div>
    </div>
  )
}

export default Home
