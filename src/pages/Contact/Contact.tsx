
import { motion } from 'framer-motion';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
export default function Contact() {
    return (
        <div>
            <Navbar />
            <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-24">
                <div className="max-w-xl">
                    <motion.h1
                        className="text-5xl font-extrabold mb-6 text-[#2563EB]"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        Hi, I’m <span className="text-[#EC4899]">Madisen Patrick</span>
                    </motion.h1>

                    <p className="text-lg text-gray-800 mb-8">
                        I’m a software engineer and project manager who builds digital experiences that merge creativity and functionality.
                    </p>
                </div>
            </section>
            <Footer/>
        </div>
    );
}