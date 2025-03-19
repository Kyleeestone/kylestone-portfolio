import React from "react";
import { FaFacebookF, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 rounded-full shadow-lg px-6 py-3 flex items-center space-x-4 border border-gray-300 dark:border-gray-700">
      {[
        { href: "https://www.facebook.com/share/15t6Eai5Rd/", icon: <FaFacebookF />, label: "Facebook" },
        { href: "mailto:kylestonehudas@gmail.com", icon: <FaEnvelope />, label: "Email" },
        { href: "https://github.com/Kyleeestone/", icon: <FaGithub />, label: "GitHub" },
      ].map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-black dark:text-white text-xl p-2 rounded-full transition-transform transform hover:scale-110"
          aria-label={social.label}
        >
          {/* Rotated Border Effect */}
          <span className="absolute inset-0 border-2 border-emerald-500 rounded-full rotate-6 transition-all duration-300 group-hover:rotate-0"></span>
          {/* Social Icon */}
          <span className="relative z-10">{social.icon}</span>
        </a>
      ))}
    </footer>
  );
};

export default Footer;
