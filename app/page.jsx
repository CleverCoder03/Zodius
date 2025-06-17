import About from '@/components/About'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <About />
    </main>
  )
}

export default page