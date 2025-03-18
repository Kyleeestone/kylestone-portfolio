import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

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

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto">
        {/* Title Left-Aligned */}
        <div className="mb-6">
          <h2 className="text-5xl font-extrabold text-left">Projects</h2>
          <p className="text-lg mt-2 text-left font-bold text-emerald-500">_here are some of my projects.</p>
        </div>

        {/* Centered Project Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 transition-transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Outer Rotated Border Effect for Card */}
                <div className="absolute -top-1 -left-1 w-full h-full border-2 border-emerald-500 rotate-3 rounded-lg transition-transform group-hover:rotate-6 z-0"></div>

                {/* Project Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-lg relative z-10"
                />

                {/* Project Info */}
                <div className="p-4 text-center relative z-10">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>

                  {/* Social Icons */}
                  <div className="mt-5 flex justify-center items-center space-x-6">
                    {[
                      { href: project.githubUrl, icon: faGithub, color: "border-gray-700" },
                      { href: project.websiteUrl, icon: faGlobe, color: "border-green-500" },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-2xl flex items-center justify-center transition-transform transform hover:scale-110 z-10"
                      >
                        {/* Outer Rotated Border Effect for Icons */}
                        <div
                          className={`absolute -top-1 -left-1 w-full h-full border-2 ${social.color} rotate-3 rounded-full transition-transform group-hover:rotate-6 z-0`}
                        ></div>
                        <FontAwesomeIcon icon={social.icon} className="text-gray-800 dark:text-white" />
                      </a>
                    ))}
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
