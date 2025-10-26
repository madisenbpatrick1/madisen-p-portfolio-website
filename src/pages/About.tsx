import React, { useState } from "react";
import aboutSections from "../data/aboutSections";
import * as styles from "../styles/AboutStyles";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [activeSection, setActiveSection] = useState("overview");
  const section = aboutSections.find((s) => s.key === activeSection);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.headerWrapper}>
        <motion.h1
          className={styles.headerTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Madisen Patrick
        </motion.h1>
      </header>

      {/* Resume Button */}
      <motion.div
        className={styles.resumeWrapper}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a
          href="/resume/Madisen-Patrick-resume-oct-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m0 0V6m0 6v6m12-6a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          View Full Resume
        </a>
      </motion.div>

      {/* Main Content */}
      <section className={styles.sectionWrapper}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {aboutSections.map((s) => (
            <motion.button
              key={s.key}
              className={styles.sidebarButton(activeSection === s.key)}
              onClick={() => setActiveSection(s.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {s.title}
            </motion.button>
          ))}
        </aside>

        {/* Content */}
        <main className={styles.mainSection}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {section?.title}
          </motion.h2>

          {/* Contact Section */}
          <AnimatePresence mode="wait">
            {section?.key === "contactMe" ? (
              <motion.div
                className="flex flex-col gap-3"
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="mailto:madisen.bpatrick@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  📧 madisen.bpatrick@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/madisen-patrick-238686195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  💼 LinkedIn Profile
                </a>
              </motion.div>
            ) : section?.content ? (
              <motion.p
                key="content"
                className={styles.paragraph}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {section.content}
              </motion.p>
            ) : null}
          </AnimatePresence>

          {/* Cards */}
          <div className={styles.cardsGrid}>
            {section?.items?.map((item, idx) => (
              <motion.div
                key={idx}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={
                      ("company" in item ? item.company : item.institution) || ""
                    }
                    className={styles.cardImage}
                  />
                )}
                <div>
                  <h3 className={styles.cardCompany}>
                    {"company" in item ? item.company : item.institution}
                  </h3>
                  <p className={styles.cardRole}>
                    {"role" in item ? item.role : item.degree}
                  </p>
                  <p className={styles.cardDescription}>{item.description}</p>
                  <p className={styles.cardYears}>{item.years}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}
