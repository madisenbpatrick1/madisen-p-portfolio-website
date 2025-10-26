import { motion } from 'framer-motion';
import { blogStyles } from '../styles/BlogStyles'; // adjust path if needed

export default function Blog() {
  return (
    <div>
      <section className={blogStyles.container}>
        <div className={blogStyles.textWrapper}>
          <motion.h1
            className={blogStyles.heading}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Hi, I’m <span className={blogStyles.nameHighlight}>Madisen Patrick</span>
          </motion.h1>

          <p className={blogStyles.paragraph}>
            I’m a software engineer and project manager who builds digital experiences
            that merge creativity and functionality.
          </p>
        </div>
      </section>
    </div>
  );
}
