import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

// Project Data
const projectData = [
  {
    title: "ROTC ENROLLMENT",
    description: "A full-stack enrollment system using PHP, CSS, and JavaScript.",
    imageUrl: "/images/Screenshot 2025-01-09 171730.png",
    githubUrl: "https://github.com/Kyleeestone/rotc_enrollment",
    websiteUrl: "https://project1.com",
  },
  {
    title: "Barangay GIS: Health Center Management Program",
    description: "A simple website in Amaga SDS with the information of individual records within that community.",
    imageUrl: "/images/Screenshot 2025-01-10 090507.png",
    githubUrl: "https://github.com/Kyleeestone/barangay_health/tree/master",
    websiteUrl: "https://project2.com",
  },
  {
    title: "My Portfolio",
    description: "A creative portfolio website designed with Tailwind CSS.",
    imageUrl: "/images/Screenshot 2025-03-10 113827.png",
    githubUrl: "https://github.com/Kyleeestone/kylestone",
    websiteUrl: "https://kylestone.vercel.app/",
  },
];

// Floating Background Elements
const floatingElements = [
  { class: "top-10 left-20 w-32 h-32 bg-indigo-400", delay: 0 },
  { class: "bottom-20 right-40 w-24 h-24 bg-purple-500", delay: 0.5 },
];

const Projects = () => {
  return (
    <section id="projects" className="relative p-10 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: el.delay }}
          className={`absolute rounded-full blur-3xl ${el.class}`}
        />
      ))}

      <div className="container mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 text-left"
        >
          <h2 className="inline-block px-6 py-2 rounded-lg bg-indigo-600 text-white mb-4">
            Projects
          </h2>
          <p className="text-4xl sm:text-5xl font-extrabold leading-tight">Some of My Best Work</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mt-4"
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Project Image */}
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Project Info */}
                <div className="p-6 text-center relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>

                  {/* Social Icons */}
                  <div className="mt-5 flex justify-center items-center space-x-6">
                    {[{ href: project.githubUrl, icon: faGithub }, { href: project.websiteUrl, icon: faGlobe }].map(
                      (social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg text-2xl flex items-center justify-center transition-transform hover:scale-110"
                          whileHover={{ rotate: 5 }}
                        >
                          {/* Outer Border Effect */}
                          <motion.div
                            className="absolute inset-0 border-2 border-indigo-500 rounded-full transform rotate-3"
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: 6 }}
                            transition={{ duration: 0.3 }}
                          />
                          <FontAwesomeIcon icon={social.icon} className="text-gray-800 dark:text-white" />
                        </motion.a>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
