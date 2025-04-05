import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa";

// Programming Languages Data (Replacing Java with Tailwind CSS)
const languages = [
  {
    name: "JavaScript",
    icon: "🟨",
    description: "A versatile language used for web development.",
    link: "#",
  },
  {
    name: "Python",
    icon: "🐍",
    description: "A powerful language used in many fields like AI and web dev.",
    link: "#",
  },
  {
    name: "Tailwind CSS", // Replaced Java with Tailwind CSS
    icon: "🎨", // Tailwind's icon (representing design)
    description: "A utility-first CSS framework for rapidly building custom designs.",
    link: "#",
  },
  {
    name: "Flutter",
    icon: "🦋",
    description: "An open-source UI toolkit for building natively compiled applications.",
    link: "#",
  },
  {
    name: "React",
    icon: "⚛️",
    description: "A JavaScript library for building user interfaces.",
    link: "#",
  },
  {
    name: "HTML",
    icon: "📄",
    description: "The standard markup language for creating web pages.",
    link: "#",
  },
  {
    name: "CSS",
    icon: "🎨",
    description: "A style sheet language used for describing the presentation of a document.",
    link: "#",
  },
];

// Floating Background Icons
const floatingIcons = [
  { icon: FaCode, x: -180, y: -80, delay: 0 },
  { icon: FaGithub, x: 160, y: 100, delay: 0.8 },
];

const LanguagesSection = () => {
  return (
    <section className="relative py-8 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: item.x, y: item.y, scale: 0.5 }}
          animate={{
            opacity: 0.15,
            x: item.x + (Math.random() * 30 - 15),
            y: item.y + (Math.random() * 30 - 15),
            scale: 1.1,
          }}
          transition={{
            duration: 6 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: item.delay,
          }}
          className="absolute text-6xl text-gray-300 dark:text-gray-700"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <item.icon />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 sm:px-8">
        {/* Title */}
        <div className="text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-block px-6 py-2 rounded-lg bg-indigo-600 text-white mb-4"
          >
            Featured Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Skills & Technologies
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-indigo-600 mt-4"
            />
          </motion.p>
        </div>

        {/* Language Buttons */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.05] hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ rotate: 1 }}
            >
              {/* Language Icon */}
              <motion.div
                className="w-full h-32 sm:h-40 flex items-center justify-center bg-gray-100 dark:bg-gray-700 group"
              >
                <span className="text-5xl sm:text-6xl">{language.icon}</span>
              </motion.div>

              {/* Pop-up Background Effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-indigo-500 opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 0.9, opacity: 0.2 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="p-4 sm:p-6">
                {/* Language Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{language.name}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">{language.description}</p>

                {/* Button */}
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href={language.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold rounded-lg text-sm sm:text-lg shadow-md hover:bg-indigo-700 transform transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
                  >
                    {/* Rotated Border Effect */}
                    <div className="absolute -top-1 -left-1 w-full h-full border-2 border-indigo-700 rotate-2 rounded-lg pointer-events-none"></div>
                    <span className="relative">{language.name}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
