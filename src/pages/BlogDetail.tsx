import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import techBlogs from "../data/blogData/techBlogData";
import businessBlogs from "../data/blogData/businessBlogData";
import { blogDetailStyles } from "../styles/BlogDetailStyles";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export default function BlogDetail() {
    const navigate = useNavigate();
    const { id, category } = useParams();
    const [content, setContent] = useState("");

    // Select blog data based on category
    const blogData = category === "tech" ? techBlogs : businessBlogs;
    const blog = blogData.find((b) => b.id.toString() === id);

     // Load Markdown content dynamically
    useEffect(() => {
        if (!blog) return;
        
        fetch(`/blogs/${category}/${blog.content}`)
            .then((res) => res.text())
            .then((text) => setContent(text))
            .catch(() => setContent("Failed to load blog content."));
    }, [category, blog]);


    if (!blog) {
        return <p className={blogDetailStyles.notFound}>Blog not found.</p>;
    }

   

    return (
        <main className={blogDetailStyles.container}>
            <motion.header
                className={blogDetailStyles.header}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* {blog.banner && (
                    <img
                        src={blog.banner}
                        alt={blog.title}
                        className={blogDetailStyles.banner}
                    />
                )} */}
                <h1 className={blogDetailStyles.title}>{blog.title}</h1>
                <p className={blogDetailStyles.date}>{blog.date}</p>
                <div className={blogDetailStyles.tagContainer}>
                    {blog.tags.map((tag, idx) => (
                        <span key={idx} className={blogDetailStyles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.header>

            <section className={blogDetailStyles.content}>
                <section className={blogDetailStyles.content}>
                    <div className="prose dark:prose-invert max-w-none">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                </section>

            </section>
            <div className="max-w-3xl mx-auto text-center mt-12">
                <button
                    onClick={() => navigate("/blog")}
                    className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition"
                >
                    ← Back to Blog List
                </button>
            </div>
        </main>
    );
}
