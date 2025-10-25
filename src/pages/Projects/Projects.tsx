import React from "react";
import { motion } from "framer-motion";
import codeProjectData from "../../data/codeProjects";

export default function Project() {
    return (
        <>
            <main className="min-h-screen bg-tanBg text-[#1E1E1E] px-6 md:px-12 py-16">
                {/* Header Section */}
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold text-bluePrimary mb-4"
                    >
                        Code & Projects
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-gray-700"
                    >
                        A collection of my engineering work — blending creativity, design,
                        and technical precision.
                    </motion.p>
                </header>

                {/* Project Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {codeProjectData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-pinkAccent/30"
                        >
                            <div>
                                <h2 className="text-2xl font-semibold text-bluePrimary mb-2">
                                    {project.name}
                                </h2>
                                <p className="text-gray-700 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="bg-bluePrimary/10 text-bluePrimary text-sm px-3 py-1 rounded-full font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-center bg-pinkAccent text-white px-5 py-2 rounded-xl font-semibold hover:bg-pinkAccent/80 transition"
                            >
                                View on GitHub
                            </a>
                        </motion.div>
                    ))}
                </section>
            </main>
        </>
    );
}
