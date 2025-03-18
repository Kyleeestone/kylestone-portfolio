import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="w-full md:w-1/3 p-4 flex justify-center">
          <motion.img
            src="/images/graduate.jpg"
            alt="Kyle S. Cervantes"
            className="rounded-full w-40 sm:w-48 md:w-64 lg:w-72 h-40 sm:h-48 md:h-64 lg:h-72 object-cover border-4 border-emerald-500 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* About Me Text */}
        <div className="w-full md:w-2/3 p-4 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg leading-relaxed"
          >
            Passionate about{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700">
              creating modern, user-friendly websites
            </span>
            . I’m always exploring new technologies to build better digital experiences.
          </motion.p>

          {/* Personal Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 bg-gray-200 dark:bg-gray-800 p-5 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-bold text-black dark:text-white mb-3">
              Personal Info:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
              <li><strong>First Name:</strong> Kyle</li>
              <li><strong>Last Name:</strong> Cervantes</li>
              <li><strong>Age:</strong> 22</li>
              <li><strong>Nationality:</strong> Filipino</li>
              <li><strong>Freelance:</strong> Available</li>
              <li><strong>Languages:</strong> Filipino, English</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          { number: "2+", label: "Years of Experience" },
          { number: "6+", label: "Happy Clients" },
          { number: "4+", label: "Achieved Certificates" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative flex flex-col items-center p-4"
          >
            {/* Rotated Border Effect */}
            <div className="relative inline-block">
              <div className="absolute -top-1 -left-1 w-full h-full border-2 border-emerald-500 rotate-3 rounded-lg"></div>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700 border-2 border-emerald-500 rounded-lg px-4 py-2 inline-block">
                {stat.number}
              </div>
            </div>
            {/* Label */}
            <div className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
