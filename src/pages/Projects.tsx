import React from "react";
import { motion } from "framer-motion";
import codeProjectData from "../data/codeProjects";
import * as styles from "../styles/ProjectsStyles";

export default function Project() {
  return (
    <main className={styles.main}>
      {/* Header Section */}
      <header className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          Code & Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.subtitle}
        >
          A collection of my engineering work — blending creativity, design,
          and technical precision.
        </motion.p>
      </header>

      {/* Project Grid */}
      <section className={styles.grid}>
        {codeProjectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={styles.card}
          >
            <div>
              <h2 className={styles.projectTitle}>{project.name}</h2>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
