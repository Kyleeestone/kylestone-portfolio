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
    <nav
      className={`font-roboto font-bold fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[60%] p-2 sm:p-3 z-[999] ${
        darkMode ? "bg-gray-800" : "bg-white"
      } backdrop-blur-lg shadow-lg rounded-full flex justify-between items-center transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/KSC logo.webp"
          alt="Kyle Cervantes Logo"
          className={`w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full border ${
            darkMode ? "border-gray-700" : "border-gray-300"
          }`}
        />
      </div>

      {/* Nav Links */}
      <div className="text-xs sm:text-sm md:text-base flex flex-wrap gap-2 sm:gap-4 px-2 sm:px-4">
        {["home", "about", "projects", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`relative px-2 py-1 capitalize transition-all duration-300 ${
              activeSection === item
                ? (darkMode ? "text-indigo-400" : "text-indigo-600") + " font-semibold"
                : (darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-800 hover:text-indigo-600")
            }`}
          >
            {item}
            {activeSection === item && (
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  darkMode ? "bg-indigo-400" : "bg-indigo-600"
                } rounded-full transition-all`}
              ></span>
            )}
          </a>
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        className={`relative w-14 h-7 flex items-center ${
          darkMode
            ? "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900"
            : "bg-gradient-to-r from-gray-200 to-gray-300"
        } rounded-full p-1 transition-all duration-300 focus:outline-none`}
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
      >
        <div
          className={`absolute w-6 h-6 ${
            darkMode ? "bg-yellow-400" : "bg-white"
          } rounded-full shadow-md transition-transform duration-300 ${
            darkMode ? "translate-x-7" : "translate-x-0"
          }`}
        />
        <FaMoon className={`absolute left-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
        <FaSun className={`absolute right-2 text-sm ${darkMode ? "text-gray-200" : "text-yellow-500"}`} />
      </button>
    </nav>
  );
};

export default Navbar;
