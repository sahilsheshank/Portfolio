import React from 'react'
import { EXPERIENCES } from "../constants"
import { motion } from 'framer-motion'
import { MdLocationOn } from 'react-icons/md'

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-16'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>
                Work <span className='text-neutral-500'>Experience</span>
            </motion.h1>

            <div className="relative max-w-3xl mx-auto px-4">
                {/* Vertical timeline line */}
                <div className="absolute left-[27px] top-2 bottom-0 w-px bg-gradient-to-b from-purple-500 via-purple-500/30 to-transparent" />

                {EXPERIENCES.map((exp, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className='relative pl-16 mb-10'
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-[20px] top-5 w-4 h-4 rounded-full border-2 border-purple-500 bg-neutral-950 z-10 shadow-[0_0_8px_2px_rgba(168,85,247,0.4)]" />

                        {/* Card */}
                        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-purple-500/40 transition-colors duration-300">

                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                                    <p className="text-purple-400 font-medium text-sm mt-0.5">{exp.company}</p>
                                    <p className="text-neutral-500 text-xs flex items-center gap-1 mt-1">
                                        <MdLocationOn className="text-xs" />
                                        {exp.location}
                                    </p>
                                </div>
                                <span className="text-xs text-neutral-400 bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                                    {exp.year}
                                </span>
                            </div>

                            {/* Bullet points */}
                            <ul className="space-y-2 mb-5">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i} className="text-neutral-400 text-sm flex gap-2.5 leading-relaxed">
                                        <span className="text-purple-500 mt-0.5 flex-shrink-0">▸</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-neutral-800 text-neutral-300 border border-neutral-700 px-2.5 py-1 rounded-md text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experience
