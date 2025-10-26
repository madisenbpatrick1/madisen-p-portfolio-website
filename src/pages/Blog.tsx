import { motion } from "framer-motion";
import techBlogs from "../data/blogData/techBlogData";
import businessBlogs from "../data/blogData/businessBlogData";
import { blogStyles } from "../styles/BlogStyles";

export default function Blog() {
  return (
    <main className={blogStyles.container}>
      {/* Page Header */}
      <header className={blogStyles.header}>
        <motion.h1
          className={blogStyles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Blog & Essays
        </motion.h1>
        <p className={blogStyles.subtitle}>
          Exploring the intersection of <span className="text-blue-500">technology</span>,{" "}
          <span className="text-pink-500">business</span>, and the written word.
        </p>
      </header>

      {/* Tech Blogs Section */}
      <section className={blogStyles.section}>
        <h2 className={blogStyles.sectionTitle}>Tech & Engineering</h2>
        <div className={blogStyles.grid}>
          {techBlogs.map((post) => (
            <motion.div
              key={post.id}
              className={blogStyles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className={blogStyles.cardTitle}>{post.title}</h3>
              <p className={blogStyles.cardDescription}>{post.description}</p>
              <div className={blogStyles.tagContainer}>
                {post.tags.map((tag, idx) => (
                  <span key={idx} className={blogStyles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={`#/blog/${post.category}/${post.id}`} className={blogStyles.readMore}>
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business & Literature Section */}
      <section className={blogStyles.section}>
        <h2 className={blogStyles.sectionTitle}>Business & Literature</h2>
        <div className={blogStyles.grid}>
          {businessBlogs.map((post) => (
            <motion.div
              key={post.id}
              className={blogStyles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className={blogStyles.cardTitle}>{post.title}</h3>
              <p className={blogStyles.cardDescription}>{post.description}</p>
              <div className={blogStyles.tagContainer}>
                {post.tags.map((tag, idx) => (
                  <span key={idx} className={blogStyles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={`#/blog/${post.category}/${post.id}`} className={blogStyles.readMore}>
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
