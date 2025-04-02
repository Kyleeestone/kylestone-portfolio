import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

// Floating Background Icons
const floatingIcons = [
  { icon: <FaHtml5 className="text-orange-500" />, x: -140, y: -60, delay: 0 },
  { icon: <FaCss3Alt className="text-blue-500" />, x: 150, y: 70, delay: 1 },
  { icon: <FaJs className="text-yellow-500" />, x: -200, y: 150, delay: 0.5 },
  { icon: <FaReact className="text-cyan-400" />, x: 130, y: -130, delay: 1.2 },
  { icon: <FaNodeJs className="text-green-600" />, x: -50, y: 200, delay: 0.8 },
];

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-950 text-gray-800 dark:text-gray-200 overflow-hidden"
    >
      {/* Floating Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: item.x, y: item.y, scale: 0.6 }}
          animate={{
            opacity: 0.15,
            x: item.x + (Math.random() * 40 - 20),
            y: item.y + (Math.random() * 40 - 20),
            rotate: Math.random() * 20 - 10,
            scale: 1,
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: item.delay,
          }}
          className="absolute text-7xl"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
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
            <h2 className="text-xl font-bold">About Me</h2>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Who I am
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-indigo-500 mt-4"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/3 p-4 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <img
                src="/images/graduate.jpg"
                alt="Kyle S. Cervantes"
                className="relative rounded-full w-40 sm:w-48 md:w-64 lg:w-72 h-40 sm:h-48 md:h-64 lg:h-72 object-cover border-4 border-indigo-500 shadow-xl"
              />
            </div>
          </motion.div>

          {/* About Me Text */}
          <div className="w-full md:w-2/3 p-4 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg leading-relaxed"
            >
              Hello! I'm{" "}
              <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Kyle S. Cervantes,
              </span>
              {" "}a passionate web developer with a strong focus on creating modern, user-friendly websites and applications. With a background in both front-end and back-end technologies, I thrive on crafting seamless digital experiences that are both functional and visually engaging. My journey as a developer started at a young age, and since then, I've been continuously learning and evolving to stay on top of the latest trends in the tech world.

              I specialize in HTML, CSS, JavaScript, React, and Node.js, and I love collaborating with others to bring ideas to life. When I'm not coding, you can find me exploring new tech, taking on freelance projects, or expanding my knowledge to solve even the toughest challenges.
            </motion.p>

            {/* Personal Info Section with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 backdrop-blur-lg bg-white/40 dark:bg-gray-800/50 p-5 rounded-xl shadow-lg border border-indigo-200 dark:border-indigo-900/30"
            >
              <div className="flex items-center mb-3">
                <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded mr-3"></div>
                <h3 className="text-lg font-bold text-black dark:text-white">Personal Info:</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
                <li><strong>First Name:</strong> Kyle</li>
                <li><strong>Nationality:</strong> Filipino</li>
                <li><strong>Middle Name:</strong> Sampiano</li>
                <li><strong>Age:</strong> 21</li>
                <li><strong>Last Name:</strong> Cervantes</li>
                <li><strong>Freelance:</strong> Available</li>
                <li><strong>Languages:</strong> Filipino, English</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          { number: "2+", label: "Years of Experience" },
          { number: "6+", label: "Happy Clients" },
          { number: "4+", label: "Achieved Certificates" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"
              >
                {stat.number}
              </motion.div>
              <div className="h-1 w-12 bg-indigo-500 my-2"></div>
              <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
