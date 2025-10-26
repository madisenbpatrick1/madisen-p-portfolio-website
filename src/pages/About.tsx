import React, { useState } from "react";
import aboutSections from "../data/aboutSections";
import * as styles from "../styles/AboutStyles";

export default function About() {
  const [activeSection, setActiveSection] = useState("overview");
  const section = aboutSections.find((s) => s.key === activeSection);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Madisen Patrick</h1>
      </header>

      {/* Resume Button */}
      <div className={styles.resumeWrapper}>
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
      </div>

      {/* Main Content */}
      <section className={styles.sectionWrapper}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {aboutSections.map((s) => (
            <button
              key={s.key}
              className={styles.sidebarButton(activeSection === s.key)}
              onClick={() => setActiveSection(s.key)}
            >
              {s.title}
            </button>
          ))}
        </aside>

        {/* Content */}
        <main className={styles.mainSection}>
          <h2 className={styles.sectionTitle}>{section?.title}</h2>

          {/* Contact Section */}
          {section?.key === "contactMe" ? (
            <div className="flex flex-col gap-3">
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
            </div>
          ) : section?.content ? (
            <p className={styles.paragraph}>{section.content}</p>
          ) : null}

          {/* Cards */}
          {section?.items && (
            <div className={styles.cardsGrid}>
              {section.items.map((item, idx) => (
                <div key={idx} className={styles.card}>
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={
                        ("company" in item ? item.company : item.institution) ||
                        ""
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
                    <p className={styles.cardDescription}>
                      {item.description}
                    </p>
                    <p className={styles.cardYears}>{item.years}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </section>
    </div>
  );
}
