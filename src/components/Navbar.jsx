import React from 'react'
// import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='mb-20 flex justify-between items-center py-6'>
      <div className='flex flex-shrink-0 items-center'>
        {/* <img className='mx-2 w-10' src={logo} alt="logo" /> */}
      </div>
      <div className='m-8 flex justify-center items-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/prathamesh-tirlotkar" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Prathams-web" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaSquareXTwitter /></a>
      </div>
    </nav>
  )
}

export default Navbar