import React from 'react'
import "./About.css"
import { motion } from "framer-motion"

function About() {
    
  return (
    <>
    <motion.section
      className='AboutContainer'
      initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration:1,delay:.1}}

      >

   
    </motion.section>
    </>
  )
}

export default About