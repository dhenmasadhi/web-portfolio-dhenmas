import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hypmemd",
        "template_v9inbzf",
        form.current,
        "YsT1vIxsVJNCU0xJm"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Pesan terkirim!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert("Gagal mengirim pesan, silakan coba lagi.");
        }
      );
  };
  return (
    <div>
      <div className="bg-[#1a1e23] text-white py-8" id="contact">
        <h1 className="mb-5 text-center text-4xl">Contact Me</h1>
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex justify-center items-center"
        >
          <h3 className="px-5 py-1 mb-3 text-center text-xl text-green-400 font-bold border-2 rounded-sm border-green-600">
            Send Me A Massage
          </h3>
        </motion.div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-md mx-8 md:mx-auto"
        >
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-0 w-full mb-5 group"
          >
            <input
              type="text"
              name="from_name"
              id="from_name"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="from_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Name
            </label>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative z-0 w-full mb-5 group"
          >
            <input
              type="email"
              name="from_email"
              id="from_email"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="from_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative z-0 w-full mb-5 group"
          >
            <textarea
              name="message"
              id="message"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required=""
              rows="5"
              cols="50"
            ></textarea>
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Massage
            </label>
          </motion.div>

          <motion.button
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 1.2 }}
            type="submit"
            className="flex items-center justify-center gap-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 "
          >
            Send Massage <IoIosSend />
          </motion.button>
        </form>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between mx-8">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Dhenmas
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              className="text-gray-500 hover:text-green-900 dark:hover:text-white ms-5"
              href="https://www.instagram.com/dhenmasm?igsh=MTM3aTNwb3M5eXk1OQ=="
            >
              <FaInstagram />
            </a>
            <a
              className="text-gray-500 hover:text-green-900 dark:hover:text-white ms-5"
              href="https://www.linkedin.com/in/dhenmasadhi/"
            >
              <FaLinkedin />
            </a>

            <a
              className="text-gray-500 hover:text-green-900 dark:hover:text-white ms-5"
              href="https://github.com/dhenmasadhi"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
