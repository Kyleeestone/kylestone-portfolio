import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "North Eastern Mindanao State University - Lianga Campus",
    logo: "/images/lianga.jpg",
    year: "2023 - Present",
    description: "Focused on software development, algorithms, and modern web technologies.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "North Eastern Mindanao State University - Tandag Campus",
    logo: "/images/tandag.png",
    year: "2021 - 2023",
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
    <section id="education" className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold">Education</h2>
          <p className="text-lg mt-2 font-bold text-emerald-500">_my academic journey</p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-6 top-0 h-full w-1 bg-emerald-500 rounded"></div>

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
                <div className="hidden md:flex relative z-10 w-12 h-12 bg-emerald-500 text-white items-center justify-center rounded-full shadow-lg">
                  <FaGraduationCap className="text-2xl" />
                </div>

                {/* Education Details */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-3/4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  {/* School Logo */}
                  <img
                    src={edu.logo}
                    alt={`${edu.school} Logo`}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-lg shadow-md"
                  />

                  {/* Text Details */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">{edu.degree}</h3>
                    <p className="text-emerald-500 font-semibold">{edu.school}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
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

export default Education;
