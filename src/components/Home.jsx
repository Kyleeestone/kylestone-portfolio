import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import profilePic from "/images/graduate.jpg";

// Floating Icons Configuration
const floatingIcons = [
  { icon: <FaHtml5 className="text-orange-500" />, x: -120, y: -70, delay: 0 },
  { icon: <FaCss3Alt className="text-blue-500" />, x: 140, y: 60, delay: 1 },
  { icon: <FaJs className="text-yellow-500" />, x: -180, y: 180, delay: 0.5 },
  { icon: <FaReact className="text-cyan-400" />, x: 150, y: -150, delay: 1.2 },
  { icon: <FaNodeJs className="text-green-600" />, x: -60, y: 220, delay: 0.8 },
];

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-end text-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-950 pb-4 px-4 overflow-hidden"
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

      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full px-4">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative group flex justify-center items-center w-full md:w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
          <img
            src={profilePic}
            alt="Profile"
            className="relative w-full h-auto rounded-full object-cover shadow-lg border-4 border-indigo-500"
          />
        </motion.div>

        {/* Text Content */}
        <div className="font-serif font-semibold max-w-xl text-center md:text-left md:ml-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            Hello{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            👋
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-wide text-gray-800 dark:text-gray-100"
          >
            I'm a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 underline decoration-indigo-500">
              student
            </span>{" "}
            learning to develop{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 underline decoration-indigo-500">
              web
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 underline decoration-indigo-500">
            mobile applications
            </span>
            .
          </motion.h1>
        </div>
      </div>

      {/* Projects & Social Media */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center w-full max-w-lg gap-6">
        {/* View Projects Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="relative px-6 py-3 text-lg font-extrabold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition transform"
        >
          <div className="absolute -top-1 -left-1 w-full h-full border-2 border-indigo-700 rotate-2 rounded-lg"></div>
          Projects
        </motion.a>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          {[
            { href: "https://www.facebook.com/share/15t6Eai5Rd/", icon: <FaFacebook />, color: "border-blue-600" },
            { href: "https://github.com/Kyleeestone/", icon: <FaGithub />, color: "border-gray-700" },
            { href: "https://www.instagram.com/its_kookiiiee?igsh=MWI1c3dhcm5uNmJ6cQ==", icon: <FaInstagram />, color: "border-pink-500" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="relative p-3 rounded-full shadow-lg text-2xl sm:text-3xl flex items-center justify-center bg-white dark:bg-gray-800"
            >
              <div
                className={`absolute -top-1 -left-1 w-full h-full border-2 ${social.color} rotate-2 rounded-full`}
              ></div>
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
