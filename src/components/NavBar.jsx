import React, { useState, useEffect } from "react";
import { useDarkMode } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let current = "";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="font-roboto font-bold fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[50%] p-3 bg-white/30 dark:bg-gray-900/50 backdrop-blur-lg shadow-lg rounded-full flex justify-between items-center z-50 transition-all">

      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/images/KSC logo.webp" // Update this path to your actual logo
          alt="Kyle Cervantes Logo"
          className="w-10 h-10 object-cover rounded-full border border-gray-300 dark:border-gray-700"
        />
      </div>

      {/* Navigation Links */}
      <div className="text-sm md:text-base flex gap-4 px-4">
        {["home", "about", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`relative px-2 py-1 transition-all duration-300 ${
              activeSection === item
                ? "text-emerald-700 dark:text-emerald-300 font-semibold"
                : "text-gray-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-300"
            }`}
          >
            {item}
            {activeSection === item && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 dark:bg-emerald-300 rounded-full transition-all"></span>
            )}
          </a>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        className="relative w-14 h-7 flex items-center bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-full p-1 transition-all duration-300 focus:outline-none"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
      >
        {/* Toggle Slider */}
        <div
          className={`absolute w-6 h-6 bg-white dark:bg-yellow-400 rounded-full shadow-md transition-transform duration-300 ${
            darkMode ? "translate-x-7" : "translate-x-0"
          }`}
        ></div>

        {/* Icons */}
        <FaMoon className="absolute left-2 text-gray-600 dark:text-gray-400 text-sm" />
        <FaSun className="absolute right-2 text-yellow-500 dark:text-gray-200 text-sm" />
      </button>
    </nav>
  );
};

export default Navbar;
