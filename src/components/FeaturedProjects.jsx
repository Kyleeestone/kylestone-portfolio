import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa";

// Project Data
const projects = [
  {
    title: "Coming Soon",
    subtitle: "Exciting New Project",
    description:
      "A groundbreaking project is on the way! Stay tuned for something amazing that's going to elevate the web and app development experience.",
    imageUrl: "/images/Bulletin.webp",
    tags: ["Flutter", "Firebase", "Dart"],
    githubUrl: "#",
  },
];

// Floating Background Icons
const floatingIcons = [
  { icon: FaCode, x: -180, y: -80, delay: 0 },
  { icon: FaGithub, x: 160, y: 100, delay: 0.8 },
];

const FeaturedProjects = () => {
  return (
    <section className="relative py-12 bg-gray-100 dark:bg-gray-900 overflow-hidden">
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
          className="absolute text-8xl text-gray-300 dark:text-gray-700"
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
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-5xl font-extrabold"
          >
            Worthy Project
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-indigo-600 mt-4"
            />
          </motion.p>

        </div>

        {/* Project Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ rotate: 1 }}
            >
              {/* Project Image */}
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 sm:h-60 object-cover rounded-t-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-indigo-500 font-semibold">{project.subtitle}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex items-center gap-4">
                  {project.githubUrl !== "#" ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-white text-2xl hover:text-indigo-600 transition"
                    >
                      <FaGithub />
                    </a>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative px-5 py-2 bg-indigo-500 text-white font-semibold rounded-lg text-sm shadow-md flex items-center justify-center gap-2"
                    >
                      {/* Rotated Border Effect */}
                      <div className="absolute -top-1 -left-1 w-full h-full border-2 border-indigo-700 rotate-2 rounded-lg pointer-events-none"></div>
                      <span className="text-lg relative">soon...</span>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
