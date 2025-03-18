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
    <section id="contact" className="p-20 bg-white dark:bg-gray-900 flex flex-col items-center">
      <div className="container mx-auto flex flex-wrap items-center justify-center">

        {/* Left Side - Pixel Art Avatar */}
        <div className="hidden md:block w-1/3">
          <motion.img
            src="/images/PRINCESS-04613.jpg"  // Replace with your pixel avatar
            alt="Pixel Avatar"
            className="w-60 h-60 md:w-60 md:h-60 lg:w-70 lg:h-70 mx-auto rounded-full border"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Contact Form Card */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 w-full md:w-2/3 lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
            Let's Work Together!
          </h2>
          <p className="text-center pb-5 text-emerald-500 font-bold">Feel free to reach out to me for any inquiries or collaboration.
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
              className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="w-full p-4 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            ></textarea>

            {/* Stylized Button */}
            <motion.button
              whileHover={{ scale: 1.05, rotate: "-2deg" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full p-4 bg-emerald-500 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:bg-emerald-600"
              style={{ transform: "rotate(-2deg)" }} // Slight rotation effect
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
