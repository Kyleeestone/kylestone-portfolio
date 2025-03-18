import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import profilePic from "/images/graduate.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-end text-center bg-oklch(0.97 0 0) dark:bg-gray-900 pb-4 px-4"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full border-emerald-500">
        {/* Profile Picture */}
        <motion.img
          src={profilePic}
          alt="Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-48 sm:w-56 md:w-64 lg:w-80 h-auto rounded-full mb-6 md:mb-0 object-cover shadow-lg border-4 border-emerald-500"
        />

        {/* Text Content */}
        <div className="font-serif font-semibold max-w-xl text-center md:text-left md:ml-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            Hello, just call me{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700">
              Kyle
            </span>
            .
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-wide text-gray-800 dark:text-gray-100"
          >
            I'm a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 underline decoration-teal-500">
              student
            </span>{" "}
            enjoying to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 underline decoration-teal-500">
              develop
            </span>{" "}
            web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 underline decoration-teal-500">
              applications
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
          className="relative px-6 py-3 text-lg font-extrabold text-white bg-emerald-500 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transition transform"
        >
          {/* Outer Border */}
          <div className="absolute -top-1 -left-1 w-full h-full border-2 border-green-700 rotate-2 rounded-lg"></div>
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
              {/* Outer Border Effect */}
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
