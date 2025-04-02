import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faHiking, faBasketballBall, faFootballBall } from "@fortawesome/free-solid-svg-icons";

// Floating Background Icons
const floatingIcons = [
  { icon: faGamepad, x: -150, y: -60, delay: 0 },
  { icon: faBasketballBall, x: 140, y: 80, delay: 1 },
  { icon: faFootballBall, x: -190, y: 130, delay: 0.5 },
  { icon: faHiking, x: 120, y: -140, delay: 1.2 },
];

const hobbiesData = [
  { name: "Dota 2", icon: faGamepad },
  { name: "Mobile Legends", icon: faGamepad },
  { name: "NBA 2K", icon: faGamepad },
  { name: "Hiking", icon: faHiking },
  { name: "Basketball", icon: faBasketballBall },
  { name: "Softball", icon: faFootballBall },
];

const Hobbies = () => {
  return (
    <motion.section
      id="hobbies"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-950 text-gray-900 dark:text-white overflow-hidden"
    >
      {/* Floating Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: item.x, y: item.y, scale: 0.5 }}
          animate={{
            opacity: 0.2,
            x: item.x + (Math.random() * 30 - 15),
            y: item.y + (Math.random() * 30 - 15),
            scale: 1,
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: item.delay,
          }}
          className="absolute text-7xl text-indigo-200 dark:text-indigo-900"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <FontAwesomeIcon icon={item.icon} />
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
            <h2 className="text-xl font-bold">Interests & Hobbies</h2>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            What I enjoy
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-indigo-500 mt-4"
          />
        </div>

        {/* Hobbies Grid Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl h-full overflow-hidden">
                {/* Icon */}
                <motion.div
                  className="p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md mr-4 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={hobby.icon} className="text-2xl" />
                </motion.div>

                {/* Hobby Name */}
                <div>
                  <p className="text-xl font-bold text-gray-800 dark:text-white">
                    {hobby.name}
                  </p>
                  <div className="h-0.5 w-12 bg-indigo-500 mt-2"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Hobbies;
