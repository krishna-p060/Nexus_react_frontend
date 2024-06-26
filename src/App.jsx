import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import AttendeeList from './components/AttendeeList'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <AttendeeList />
    </div>
  )
}

export default App