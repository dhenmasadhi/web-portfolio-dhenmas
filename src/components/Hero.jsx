import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SlArrowRightCircle } from "react-icons/sl";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mx-8 md:mt-16">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-28 border px-4 md:px-6 py-3 md:text-2xl font-bold mx-auto"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 255, 91, 0.15), rgba(0, 255, 255, 0.15))",
          }}
        >
          Welcome To My Portfolio
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 md:mt-12 text-3xl font-medium md:text-6xl"
        >
          Hi! I'm Dhenmas Adhimaulana Saputra,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-[#97f9eb] to-green-500 bg-clip-text tracking-tight text-transparent"
        >
          Full-Stack Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="md:mx-40 text-sm md:text-base font-extralight"
        >
          I'm passionate full stack developer with a knack for crafting robust
          and scalable web applications. I have honed skill in front-end
          technologies like ReactJS and VueJS, as well as back-end technologies
          like NodeJS, ExpressJS, MySQL, and MongoDB. I help business grow by
          crafting amazing web experiences. If you’re looking for a developer
          that likes to get stuff done
        </motion.p>
      </div>
      <div className="flex justify-center items-center mt-4 gap-x-2 text-3xl">
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hover:scale-125"
          href="https://www.linkedin.com/in/dhenmasadhi/"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="hover:scale-125"
          href="https://www.instagram.com/dhenmasm?igsh=MTM3aTNwb3M5eXk1OQ=="
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="hover:scale-125"
          href="https://github.com/dhenmasadhi"
        >
          <FaGithub />
        </motion.a>
      </div>
      <div className="flex justify-center items-center my-7 gap-10 mb-10 md:mb-32">
        <motion.button
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex justify-center items-center gap-x-2 underline font-semibold text-xl hover:scale-110"
        >
          Let's Talk!
          <SlArrowRightCircle />
        </motion.button>
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="rounded-lg px-2 py-2 bg-green-600 hover:bg-green-900 hover:scale-110 font-semibold"
        >
          Curriculum Vitae
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
