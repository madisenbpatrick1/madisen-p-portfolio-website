import React, { useState } from "react";
import { motion } from "framer-motion";
import aboutSections from "../../data/aboutSections";

export default function About() {
    const [activeSection, setActiveSection] = useState("overview");

    const section = aboutSections.find((s) => s.key === activeSection);

    return (
        <div className="flex flex-col min-h-screen">

            <header className="w-full text-[#EC4899] py-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">Madisen Patrick</h1>
            </header>
            <div className="flex justify-center mt-6">
                <a
                    href="/resume/Madisen-Patrick-resume-oct-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex items-center gap-3
                        bg-gradient-to-r from-blue-600 to-pink-500
                        text-white font-semibold
                        py-2 px-6
                        rounded-full
                        shadow-lg
                        transform transition
                        hover:scale-105 hover:shadow-xl
                        focus:outline-none focus:ring-4 focus:ring-pink-300
                        active:scale-95
                        max-w-xs
                        "
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


            {/* About Content Section */}
            <section className="flex flex-col md:flex-row flex-grow px-8 md:px-16 py-16">
                {/* Sidebar Tabs */}
                <aside className="md:w-1/4 mb-8 md:mb-0 flex flex-col gap-4">
                    {aboutSections.map((s) => (
                        <button
                            key={s.key}
                            className={`py-2 px-4 text-left rounded-lg transition ${activeSection === s.key
                                ? "bg-pink-100 text-pink-700 font-semibold"
                                : "hover:bg-gray-100 text-gray-700"
                                }`}
                            onClick={() => setActiveSection(s.key)}
                        >
                            {s.title}
                        </button>
                    ))}
                </aside>

                {/* Main Section */}
                <main className="md:w-3/4 md:pl-12">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">{section?.title}</h2>

                    {/* Contact Section */}
                    {section?.key === "contactMe" ? (
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:madisen.bpatrick@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:underline"
                            >
                                📧 madisen.bpatrick@gmail.com
                            </a>
                            <a
                                href="https://www.linkedin.com/in/madisen-patrick-238686195/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:underline"
                            >
                                💼 LinkedIn Profile
                            </a>
                        </div>
                    ) : section?.content ? (
                        <p className="text-gray-800">{section.content}</p>
                    ) : null}

                    {/* Experience / Education Cards */}
                    {section?.items && (
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            {section.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                                >
                                    {item.logo && (
                                        <img
                                            src={item.logo}
                                            alt={("company" in item ? item.company : item.institution) || ""}
                                            className="w-16 h-16 object-contain rounded-lg"
                                        />
                                    )}
                                    <div>
                                        <h3 className="font-semibold text-lg text-blue-800">
                                            {"company" in item ? item.company : item.institution}
                                        </h3>
                                        <p className="text-gray-600">
                                            {"role" in item ? item.role : item.degree}
                                        </p>
                                        <p className="text-gray-700 mt-1">{item.description}</p>
                                        <p className="text-gray-400 mt-1 text-sm">{item.years}</p>
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
