import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faHiking, faBasketballBall, faFootballBall } from "@fortawesome/free-solid-svg-icons";

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
    <section id="hobbies" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-left">Hobbies</h2>
          <p className="text-lg mt-2 text-left font-bold text-emerald-500">_things I love doing in my free time.</p>
        </div>

        {/* Hobbies Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ rotate: 2 }}
            >
              {/* Rotated Border Effect */}
              <motion.div
                className="absolute inset-0 w-full h-full border-4 border-emerald-500 rounded-lg"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 8 }}
                transition={{ type: "spring", stiffness: 200 }}
              ></motion.div>

              <motion.div
                className="relative p-4 rounded-full bg-emerald-500 text-white shadow-md"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={hobby.icon} className="text-3xl sm:text-4xl" />
              </motion.div>
              <p className="text-lg font-semibold mt-3 relative">{hobby.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
