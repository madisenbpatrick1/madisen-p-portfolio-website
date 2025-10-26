import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#2563EB] text-white dark:text-gray-100 shadow-md transition-colors duration-500">
      <motion.h1 
        className="text-2xl font-bold tracking-wide"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        MP Portfolio
      </motion.h1>

      <div className="hidden md:flex space-x-8 text-lg font-medium">
        <a href="#/" className="hover:text-[#EC4899] dark:hover:text-[#F472B6]">Home</a>
        <a href="#/about" className="hover:text-[#EC4899]dark:hover:text-[#F472B6]">About</a>
        <a href="#/projects" className="hover:text-[#EC4899] dark:hover:text-[#F472B6]">Projects</a>
        <a href="#/blog" className="hover:text-[#EC4899]">Blog</a>
        <a href="#/contact" className="hover:text-[#EC4899] dark:hover:text-[#F472B6]">Contact</a>
        <button
        onClick={toggleTheme}
        className="flex items-center gap-2 bg-pink-500 dark:bg-blue-600 text-white px-3 py-2 rounded-full transition hover:opacity-90"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        <span className="hidden ">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
      </div>

      <button 
        className="md:hidden text-white dark:text-gray-100"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="absolute top-16 right-8 bg-[#2563EB] dark:text-gray-100 p-4 rounded-xl flex flex-col space-y-4 md:hidden">
          <a href="#/">Home</a>
          <a href="#/about">About</a>
          <a href="#/projects">Projects</a>
          <a href="#/blog">Blog</a>
          <a href="#/contact">Contact</a>
          <button
        onClick={toggleTheme}
        className="flex items-center gap-2 bg-pink-500 dark:bg-blue-600 text-white px-3 py-2 rounded-full transition hover:opacity-90"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        <span className="hidden md:inline">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
        </div>
        
      )}
      
    </nav>
  );
}
