import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8jv8mtr", // Replace with your EmailJS Service ID
        "template_0d0c1hp", // Replace with your EmailJS Template ID
        formRef.current,
        "66khAmrY4EB00TYi_" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          setIsSent(true);
          e.target.reset();
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white flex flex-col items-center overflow-hidden"
    >
      {/* Floating Background Effects */}
      <motion.div
        className="absolute top-10 left-16 w-44 h-44 bg-indigo-400 blur-3xl opacity-25 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.25 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-36 h-36 bg-purple-600 blur-3xl opacity-25 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.25 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", delay: 1 }}
      />

      <div className="container mx-auto flex flex-wrap items-center justify-center">
        {/* Left Side - Avatar Image */}
        <div className="flex justify-center md:block w-full md:w-1/3 mb-6 md:mb-0">
          <motion.img
            src="/images/graduate.jpg"
            alt="Profile Avatar"
            className="w-40 h-40 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 mx-auto rounded-full border-4 border-indigo-400 shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Contact Form Card */}
        <motion.div
          className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-3xl shadow-xl p-10 w-full md:w-2/3 lg:w-1/2 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
            Let's Connect!
          </h2>
          <p className="text-center pb-6 text-indigo-500 font-semibold text-lg">
            Reach out for projects, collaborations, or just a friendly chat!
          </p>

          {/* Contact Details */}
          <div className="flex flex-col items-center space-y-4 text-gray-700 dark:text-gray-300 mb-8">
            <p className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-indigo-500" />
              <span className="font-medium">kylestonehudas@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} className="text-indigo-500" />
              <span className="font-medium">+09692091713 | 09128956187</span>
            </p>
            <p className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-500" />
              <span className="font-medium">Lianga, Surigao, Del Sur</span>
            </p>
          </div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-5"
          >
            <motion.input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 shadow-sm"
              whileFocus={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(79, 70, 229, 0.3)" }}
              required
            />
            <motion.textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 shadow-sm"
              whileFocus={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(79, 70, 229, 0.3)" }}
              required
            ></motion.textarea>

            {/* Animated Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 6px 12px rgba(79, 70, 229, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-md transform transition-all duration-300 hover:from-indigo-600 hover:to-purple-600"
            >
              Send Message ✉️
            </motion.button>

            {isSent && (
              <motion.p
                className="text-indigo-500 mt-4 text-center font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Message sent successfully! 🎉
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
