import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

// Floating Background Icons
const floatingIcons = [
  { icon: <FaHtml5 className="text-orange-500" />, x: -150, y: -60, delay: 0 },
  { icon: <FaCss3Alt className="text-blue-500" />, x: 140, y: 80, delay: 1 },
  { icon: <FaJs className="text-yellow-500" />, x: -190, y: 130, delay: 0.5 },
  { icon: <FaReact className="text-cyan-400" />, x: 120, y: -140, delay: 1.2 },
  { icon: <FaNodeJs className="text-green-600" />, x: -70, y: 180, delay: 0.8 },
];

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "North Eastern Mindanao State University - Lianga Campus",
    logo: "/images/lianga.jpg",
    year: "2024 - Present",
    description: "Focused on software development, algorithms, and modern web technologies.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "North Eastern Mindanao State University - Tandag Campus",
    logo: "/images/tandag.png",
    year: "2022 - 2023",
    description: "Gained knowledge in problem-solving, mathematics, and programming.",
  },
  {
    degree: "High School Diploma",
    school: "Lianga National Comprehensive High School",
    logo: "/images/Compre.jpg",
    year: "2017 - 2021",
    description: "Excelled in logical theory and fundamental academic skills.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-16 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-950 text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Floating Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: item.x, y: item.y, rotate: 0, scale: 0.6 }}
          animate={{
            opacity: 0.2,
            x: item.x + (Math.random() * 40 - 20),
            y: item.y + (Math.random() * 40 - 20),
            rotate: Math.random() * 15 - 7.5,
            scale: 1
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: item.delay
          }}
          className="absolute text-6xl"
          style={{ top: `50%`, left: `50%`, transform: "translate(-50%, -50%)" }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-6 py-2 rounded-lg bg-indigo-600 text-white mb-4"
          >
            <h2 className="text-xl font-bold">Education</h2>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Academic Journey
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-indigo-500 mt-4"
          />
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded"></div>

          <div className="space-y-10">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col md:flex-row md:items-start md:space-x-6 space-y-4 md:space-y-0"
              >
                {/* Icon Container (For Large Screens) */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  className="hidden md:flex relative z-10 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white items-center justify-center rounded-full shadow-lg"
                >
                  <FaGraduationCap className="text-2xl" />
                </motion.div>

                {/* Education Details */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className="relative group w-full md:w-3/4"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 overflow-hidden">
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-600"></div>

                    {/* School Logo */}
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-md">
                      <img
                        src={edu.logo}
                        alt={`${edu.school} Logo`}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-lg"
                      />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">{edu.degree}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{edu.school}</p>
                      <div className="flex items-center mt-1">
                        <div className="h-0.5 w-8 bg-indigo-500 mr-2"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</p>
                      </div>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
