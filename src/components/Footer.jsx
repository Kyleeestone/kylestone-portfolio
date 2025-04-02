import React from "react";
import { FaFacebookF, FaGithub, FaEnvelope } from "react-icons/fa";
import { useDarkMode } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    } rounded-full shadow-lg px-6 py-3 flex items-center space-x-4 border ${
      darkMode ? 'border-gray-700' : 'border-gray-300'
    } transition-colors duration-300`}>
      {[
        { href: "https://www.facebook.com/share/15t6Eai5Rd/", icon: <FaFacebookF />, label: "Facebook" },
        { href: "mailto:kylestonehudas@gmail.com", icon: <FaEnvelope />, label: "Email" },
        { href: "https://github.com/yourgithub", icon: <FaGithub />, label: "GitHub" },
      ].map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative ${
            darkMode ? 'text-indigo-200' : 'text-gray-800'
          } text-xl p-2 rounded-full transition-transform transform hover:scale-110 group`}
          aria-label={social.label}
        >
          {/* Rotated Border Effect */}
          <span className="absolute inset-0 border-2 border-indigo-600 rounded-full rotate-6 transition-all duration-300 group-hover:rotate-0"></span>
          {/* Social Icon */}
          <span className={`relative z-10 ${darkMode ? 'text-indigo-200' : 'text-indigo-600'}`}>
            {social.icon}
          </span>
        </a>
      ))}
    </footer>
  );
};

export default Footer;
