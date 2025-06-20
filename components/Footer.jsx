import React from 'react'

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black font-circular-web'> 
        <div className='container mx-auto flex flex-col items-center justify-between px-4 md:flex-row'>
            <p className='text-center text-sm md:text-left'>&copy;Zodius 2025. All rights reserved</p>
            <p className='text-center text-sm md:text-left'>Developed By - <a className='underline' href="https://www.linkedin.com/in/vishal-mishra-190421213/" target="_blank" rel="noopener noreferrer">Vishal Mishra</a></p>
        </div>
    </footer>
  )
}

export default Footer