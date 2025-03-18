import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

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

const FeaturedProjects = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Featured Projects</h2>
        <p className="text-emerald-500 text-lg font-bold">_worthy project</p>

        {/* Project Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Project Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 sm:h-60 object-cover rounded-t-xl"
              />
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-emerald-500 font-semibold">{project.subtitle}</p>
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
                      className="text-gray-800 dark:text-white text-2xl hover:text-emerald-600 transition"
                    >
                      <FaGithub />
                    </a>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative px-5 py-2 bg-emerald-500 text-white font-semibold rounded-lg text-sm shadow-md flex items-center justify-center gap-2"
                    >
                      {/* Rotated Border Effect */}
                      <div className="absolute -top-1 -left-1 w-full h-full border-2 border-emerald-700 rotate-2 rounded-lg pointer-events-none"></div>
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
