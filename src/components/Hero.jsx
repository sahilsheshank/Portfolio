import React, { useState, useEffect, useRef } from 'react';
import { HERO_CONTENT } from "../constants";
import propic2 from "../assets/propic2.jpg"
import { motion } from 'framer-motion';
import { BsDownload } from "react-icons/bs";
import Contact from './Contact';
const Hero = () => {


    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    };

    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay },
        }
    })
    const roles = ["Full Stack Developer", "Frontend Developer", "MERN Stack Developer"];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 1000); // Change text every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 variants={container(0)}
                            initial="hidden" animate="visible" className='pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Sahil Sheshank</motion.h1>
                        <div className='flex flex-col'>
                            <motion.span variants={container(0.3)}
                                initial="hidden" animate="visible" className='bg-gradient-to-r from-white via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent  '>
                                Full Stack Developer
                            </motion.span>
                            <div className="flex justify-center mt-8">
                                <motion.button
                                    onClick={scrollToContact}
                                    variants={container(0.3)}
                                    initial="hidden" animate="visible"
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                    transition={{ duration: 0.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="mx-2 px-6 py-3 text-lg font-semibold rounded-full border border-neutral-600 text-white backdrop-blur-md transition-all duration-300"
                                >
                                    Contact Me
                                </motion.button>

                                <motion.button
                                    onClick={() => window.open("./Sahil-Sheshank-SDE-resume.pdf", "_blank")}
                                    variants={container(0.3)}
                                    initial="hidden" animate="visible"
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                    transition={{ duration: 0.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="mx-2 px-6 py-3 text-lg font-semibold rounded-full border flex  gap-2 items-center border-neutral-600 text-white backdrop-blur-md transition-all duration-300"
                                >   My Resume
                                    <BsDownload />
                                </motion.button>
                            </div>
                        </div>
                        <motion.p variants={container(0.6)}
                            initial="hidden" animate="visible" className='my-3 max-w-xl py-6 font-light text-xl tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>

                </div>
                <div className='w-full lg:w-1/2 lg:p-8 '>
                    <div className='flex justify-center '>

                        <motion.img initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}

                            className='rounded-full w-70 h-[22rem] mt-12 ring-4 ring-white shadow-lg' src={propic2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
