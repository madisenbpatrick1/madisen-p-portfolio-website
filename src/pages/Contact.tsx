import { motion } from "framer-motion";
import { contactStyles } from "../styles/ContactStyles";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <main className={contactStyles.container}>
            {/* Header */}
            <motion.header
                className={contactStyles.header}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className={contactStyles.title}>Let’s Connect ✨</h1>
                <p className={contactStyles.subtitle}>
                    Whether you want to collaborate, talk tech, or discuss your next project — I’d love to hear from you.
                </p>
            </motion.header>

            {/* Contact Card */}
            <motion.section
                className={contactStyles.card}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className={contactStyles.cardTitle}>Reach Out</h2>
                <p className={contactStyles.cardText}>
                    Feel free to contact me directly via email or connect with me on LinkedIn.
                </p>

                <div className={contactStyles.buttonContainer}>
                    <a
                        href="mailto:madisen.bpatrick@gmail.com"
                        className={contactStyles.emailButton}
                    >
                        <Mail className="w-5 h-5" />
                        <span>Email Me</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/madisen-patrick-238686195/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={contactStyles.linkedinButton}
                    >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </motion.section>
        </main>
    );
}
