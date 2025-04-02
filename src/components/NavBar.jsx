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
    <nav className={`font-roboto font-bold fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[50%] p-3 ${darkMode ? 'bg-gray-800' : 'bg-white'} backdrop-blur-lg shadow-lg rounded-full flex justify-between items-center z-50 transition-all duration-300`}>

      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/images/KSC logo.webp"
          alt="Kyle Cervantes Logo"
          className={`w-10 h-10 object-cover rounded-full border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
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
                ? (darkMode ? 'text-indigo-400' : 'text-indigo-600') + ' font-semibold'
                : (darkMode ? 'text-gray-200 hover:text-indigo-400' : 'text-gray-800 hover:text-indigo-600')
            }`}
          >
            {item}
            {activeSection === item && (
              <span className={`absolute bottom-0 left-0 w-full h-0.5 ${darkMode ? 'bg-indigo-400' : 'bg-indigo-500'} rounded-full transition-all`}></span>
            )}
          </a>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        className={`relative w-14 h-7 flex items-center ${darkMode ? 'bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-gray-200 to-gray-300'} rounded-full p-1 transition-all duration-300 focus:outline-none`}
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
      >
        {/* Toggle Slider */}
        <div
          className={`absolute w-6 h-6 ${darkMode ? 'bg-yellow-400' : 'bg-white'} rounded-full shadow-md transition-transform duration-300 ${darkMode ? 'translate-x-7' : 'translate-x-0'}`}
        ></div>

        {/* Icons */}
        <FaMoon className={`absolute left-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`} />
        <FaSun className={`absolute right-2 ${darkMode ? 'text-gray-200' : 'text-yellow-500'} text-sm`} />
      </button>
    </nav>
  );
};

export default Navbar;
