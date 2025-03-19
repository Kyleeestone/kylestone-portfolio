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

    emailjs.sendForm(
      "service_8jv8mtr",  // Replace with your EmailJS Service ID
      "template_0d0c1hp", // Replace with your EmailJS Template ID
      formRef.current,
      "66khAmrY4EB00TYi_"   // Replace with your EmailJS Public Key
    )
    .then(
      () => {
        setIsSent(true);
        e.target.reset();
      },
      (error) => {
        console.error("Error:", error.text);
      }
    );
  };

  return (
    <section id="contact" className="px-6 py-20 bg-white dark:bg-gray-900 flex flex-col items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
        
        {/* Pixel Avatar */}
        <div className="w-full md:w-1/3 flex justify-center">
          <motion.img
            src="/images/PRINCESS-04613.jpg"
            alt="Pixel Avatar"
            className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full border"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Contact Form */}
        <motion.div
          className="w-full md:w-2/3 lg:w-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
            Let's Work Together!
          </h2>
          <p className="text-center text-emerald-500 font-bold mb-6">
            Feel free to reach out to me for any inquiries or collaboration.
          </p>

          {/* Contact Details */}
          <div className="space-y-3 text-center text-gray-700 dark:text-gray-300 mb-6">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="text-emerald-500 mr-2" />
              kylestonehudas@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="text-emerald-500 mr-2" />
              +09692091713 | 09128956187
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-emerald-500 mr-2" />
              Lianga, Surigao, Del Sur
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
            className="flex flex-col space-y-4"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            ></textarea>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05, rotate: "-2deg" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full p-4 bg-emerald-500 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:bg-emerald-600"
            >
              Message Me
            </motion.button>

            {isSent && <p className="text-green-500 mt-2 text-center">Message sent successfully!</p>}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
