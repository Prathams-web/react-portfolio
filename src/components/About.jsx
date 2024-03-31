import React from 'react'
// import aboutImg from '../assets/about.jpg'  
// import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"


function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>
            Resume
            {/* <span className='text-neutral-500'> Me</span> */}
        </h2>
        <div className='flex flex-wrap justify-center'>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className='w-full lg:w-2/3 lg:p-8'
            >
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src="https://res.cloudinary.com/dmj5vxvtq/image/upload/v1711892013/Resume/Prathamesh_Resume_New_t7k0ma_-_Portrait_Post_yl9j3y.png" alt="about" />
                </div>
            </motion.div>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className='w-full lg:w-2/3 '
            >
                {/* <div className='flex justify-center '>
                    <p className='my-2 max-w-xl py-6 text-center'>{ABOUT_TEXT}</p>
                </div> */}
            </motion.div>    
        </div>
    </div>
  )
}

export default About