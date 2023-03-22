import React from 'react'
import "./StartAnimation.css"
import { motion } from "framer-motion"
function StartAnimation() {
  return (
    <>
    <div className="startAnimation">
        <motion.span initial={{y:0 , opacity:1 }} animate={{y:-100 , opacity:0}} transition={{duration:1.5 , delay:.3}}></motion.span>
        <motion.span initial={{y:0 , opacity:1 }} animate={{y:100 , opacity:0}}  transition={{duration:1.5 , delay:.3}}></motion.span>
        <motion.span initial={{y:0 , opacity:1 }} animate={{y:-100 , opacity:0}}  transition={{duration:1.5 , delay:.3}}></motion.span>
    </div>   
    </>
  )
}

export default StartAnimation