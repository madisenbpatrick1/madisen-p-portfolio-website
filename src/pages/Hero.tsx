import { motion } from "framer-motion";
import * as styles from "../styles/HeroStyles";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className="max-w-xl">
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Hi, I’m <span className="text-[#EC4899]">Madisen Patrick</span>
        </motion.h1>

        <p className={styles.subText}>
          I’m a software engineer and project manager who builds digital
          experiences that merge creativity and functionality.
        </p>

        <div className="flex space-x-4">
          <motion.a
            href="#projects"
            className={styles.buttonPrimary}
            whileHover={{ scale: 1.05 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className={styles.buttonSecondary}
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      <motion.div
        className="mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <img
          src="./images/Madisen Patrick Photo.JPEG"
          alt="Profile"
          className={styles.image}
        />
      </motion.div>
    </section>
  );
}
