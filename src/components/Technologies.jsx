import React from 'react'
import { motion } from 'framer-motion'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb, SiJavascript, SiCplusplus, SiMysql, SiExpress } from 'react-icons/si'
import { FaNodeJs, FaCss3Alt } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";

const techStack = [
    { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, name: "ReactJS", duration: 2 },
    { icon: <TbBrandNextjs className='text-7xl' />, name: "Next.js", duration: 2.5 },
    { icon: <SiMongodb className='text-7xl text-green-500' />, name: "MongoDB", duration: 3 },
    { icon: <FaNodeJs className='text-7xl text-green-500' />, name: "Node.js", duration: 2.2 },
    { icon: <BiLogoPostgresql className='text-7xl text-cyan-400' />, name: "PostgreSQL", duration: 2.8 },
    { icon: <SiJavascript className='text-7xl text-yellow-400' />, name: "JavaScript", duration: 3.2 },
    { icon: <SiCplusplus className='text-7xl text-yellow-300' />, name: "C++", duration: 2.7 },
    { icon: <FaCss3Alt className='text-7xl text-sky-700' />, name: "CSS3", duration: 3.1 },
    { icon: <SiMysql className='text-7xl text-sky-700' />, name: "MySQL", duration: 2.3 },
    { icon: <SiExpress className='text-7xl text-gray-400' />, name: "Express.js", duration: 2.6 },
    { icon: <RiTailwindCssFill className='text-7xl text-sky-600' />, name: "Tailwind CSS", duration: 3 },
    { icon: <SiRedux  className='text-7xl text-purple-500' />, name: "Redux", duration: 3.3 },

]

// Bounce Effect for Different Durations
const iconVariants = (duration) => ({
    animate: {
        y: [5, -5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }} className='my-20 text-center text-4xl'>
                Technologies
            </motion.h1>
            <motion.div whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }} className='flex flex-wrap items-center justify-center gap-6'>
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        className='relative flex flex-col items-center'
                    >
                        {/* Tech Card (Hover over entire card) */}
                        <motion.div
                            className='relative flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-6 w-28 h-28'
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Icon with Different Bounce Timings */}
                            <motion.div variants={iconVariants(tech.duration)} animate="animate">
                                {tech.icon}
                            </motion.div>

                            {/* Tech Name (Appears on Hover) */}
                            <motion.span
                                className='absolute bottom-2 text-sm font-semibold text-white bg-neutral-900 px-3 py-1 rounded opacity-0'
                                initial={{ opacity: 0, y: 10 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {tech.name}
                            </motion.span>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Technologies
