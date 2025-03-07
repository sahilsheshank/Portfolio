"use client";

import { useRef } from "react";
import { PROJECTS } from "../constants";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const Project = ({ title, github, description, technologies, image }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section
                onClick={() => window.open(github, "_blank")}
                className="cursor-pointer bg-gray-100 max-w-[60rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
            >
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <div className="flex flex-row items-center gap-2">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        {/* <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold flex items-center gap-1">
                            GitHub <FaExternalLinkAlt />
                        </a> */}
                    </div>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {technologies.map((tech, index) => (
                            <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <img
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    quality={95}
                    className="absolute hidden sm:block top-8 -right-40 w-[32rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-56"
                />
            </section>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Projects</h1>
            <div className="flex flex-col items-center">
                {PROJECTS.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;