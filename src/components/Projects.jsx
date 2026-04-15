import { PROJECTS } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-16">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h1>

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col hover:border-purple-500/40 transition-colors duration-300 group"
                    >
                        {/* Image */}
                        <div className="overflow-hidden h-44">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                            <h3 className="text-white font-semibold text-base mb-2">{project.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed flex-1 mb-4">
                                {project.description}
                            </p>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-neutral-800 border border-neutral-700 text-neutral-300 px-2 py-0.5 rounded text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 mt-auto">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs text-white bg-purple-600 hover:bg-purple-500 px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                        <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
