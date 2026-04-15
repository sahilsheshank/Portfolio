import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'

const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Built" },
    { value: "85%+", label: "Test Coverage" },
    { value: "40%", label: "Bug Reduction" },
]

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-16'>
            <h1 className='my-20 text-center text-4xl'>
                About <span className='text-neutral-500'>Me</span>
            </h1>

            {/* Stats row */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4 mb-14"
            >
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-neutral-900 border border-neutral-800 hover:border-purple-500/40 transition-colors duration-300 rounded-2xl px-8 py-5 text-center min-w-[130px]"
                    >
                        <div className="text-2xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                            {stat.value}
                        </div>
                        <div className="text-neutral-500 text-sm mt-1">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>

            {/* About text */}
            <div className='flex items-center justify-center w-full'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className='my-2 max-w-[45rem] text-lg text-center pb-6 leading-relaxed text-neutral-300'>
                        {ABOUT_TEXT}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default About
