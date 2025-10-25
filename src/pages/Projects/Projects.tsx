import React from "react";
import { motion } from "framer-motion";
import codeProjectData from "../../data/codeProjects";
import { useTheme } from "../../components/common/ThemeContext";

export default function Project() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen bg-tanBg dark:bg-gray-900 text-[#1E1E1E] dark:text-gray-200 px-6 md:px-12 py-16 transition-colors duration-500">
      {/* Header Section */}
      <header className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-bluePrimary dark:text-blue-400 mb-4 transition-colors duration-500"
        >
          Code & Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-500"
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
            className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-pinkAccent/30 dark:border-pink-500/30"
          >
            <div>
              <h2 className="text-2xl font-semibold text-bluePrimary dark:text-blue-400 mb-2 transition-colors duration-500">
                {project.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-500">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-bluePrimary/10 dark:bg-blue-400/20 text-bluePrimary dark:text-blue-300 text-sm px-3 py-1 rounded-full font-medium transition-colors duration-500"
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
              className="inline-block text-center bg-pinkAccent dark:bg-pink-500 text-white px-5 py-2 rounded-xl font-semibold hover:bg-pinkAccent/80 dark:hover:bg-pink-400 transition-colors duration-300"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
