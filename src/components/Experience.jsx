import React from 'react'
import { EXPERIENCES } from "../constants"
import { motion } from 'framer-motion'

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>
                Experience
            </motion.h1>

            {EXPERIENCES.map((exp, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>
                            {exp.year}
                        </p>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>
                            {exp.role} -{" "}
                            <span className='text-sm text-purple-100'>
                                {exp.company}
                            </span>
                        </h6>
                        <p className='mb-4 text-neutral-400'>
                            {exp.description}
                        </p>
                        {exp.technologies.map((tech, i) => (
                            <span
                                key={i}
                                className='mr-2 mt-4 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-normal text-white'>
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

export default Experience
