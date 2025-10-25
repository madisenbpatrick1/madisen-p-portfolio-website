import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-24 dark:transition-colors duration-500">
            <div className="max-w-xl">
                <motion.h1
                    className="text-5xl font-extrabold mb-6 text-[#2563EB]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    Hi, I’m <span className="text-[#EC4899] ">Madisen Patrick</span>
                </motion.h1>

                <p className="text-lg text-gray-800 dark:text-gray-300 mb-8">
                    I’m a software engineer and project manager who builds digital experiences that merge creativity and functionality.
                </p>

                <div className="flex space-x-4">
                    <motion.a
                        href="#projects"
                        className="bg-[#2563EB] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1E40AF] dark:hover:bg-[#3B82F6] transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        View My Work
                    </motion.a>

                    <motion.a
                        href="#contact"
                        className="border-2 border-[#EC4899] text-[#EC4899] px-6 py-3 rounded-xl font-semibold hover:bg-[#EC4899] hover:text-white transition"
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
            className="w-87 md:w-100 rounded-full border-4 border-[#EC4899] shadow-lg"
                />
            </motion.div>
        </section>
    );
}
