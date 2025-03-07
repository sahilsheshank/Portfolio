import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { motion } from 'framer-motion'
const Navbar = () => {


  return (
    <nav className='mb-8 flex items-center justify-between py-2'>
      <div className='flex flex-shrink-0 items-center'>
        <p className='text-white text-3xl font-bold'>{`</>`}</p>

      </div>
      <div className='flex gap-4 items-center justify-center m-8 text-2xl'>
        <motion.a whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/sahil-sheshank-203557255/"><FaLinkedin /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} href="#"><FaInstagram /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} href="https://github.com/sahilsheshank"><FaGithub /></motion.a>
        <motion.a whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} href="https://leetcode.com/u/sahil_sheshank/"><SiLeetcode /></motion.a>
      </div>

    </nav>
  )
}

export default Navbar
