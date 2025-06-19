import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default page