import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#2563EB] text-white shadow-md">
      <motion.h1 
        className="text-2xl font-bold tracking-wide"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MP Portfolio
      </motion.h1>

      <div className="hidden md:flex space-x-8 text-lg font-medium">
        <a href="#/" className="hover:text-[#EC4899]">Home</a>
        <a href="#/about" className="hover:text-[#EC4899]">About</a>
        <a href="#/projects" className="hover:text-[#EC4899]">Projects</a>
        {/* <a href="#/blog" className="hover:text-[#EC4899]">Blog</a> */}
        <a href="#/contact" className="hover:text-[#EC4899]">Contact</a>
      </div>

      <button 
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="absolute top-16 right-8 bg-[#2563EB] p-4 rounded-xl flex flex-col space-y-4 md:hidden">
          <a href="#/">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}
