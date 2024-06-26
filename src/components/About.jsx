import imageSrc from "../assets/dhenmas.jpg";
import { motion } from "framer-motion";
import { aboutText } from "../constans/index";

const About = () => {
  return (
    <div className="bg-about-bg bg-cover bg-center min-h-screen flex flex-col justify-center items-center pb-4">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="flex justify-center md:justify-end">
          <h1 className="max-w-fit rounded-br-3xl rounded-tl-3xl border-[3px] text-3xl md:text-5xl font-bold px-3 py-2 bg-[#292f36] bg-opacity-50 mb-8 mt-4 md:mr-16 shadow-lg">
            About Me
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: window.innerWidth > 1024 ? -80 : -15 }}
            transition={{ duration: 1 }}
            layout="position"
            className="flex justify-center md:justify-center"
          >
            <img
              className="h-[350px] md:h-[540px] rounded-lg md:rounded-[30px] shadow-2xl"
              src={imageSrc}
              alt="Profile"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: window.innerWidth > 1024 ? 80 : 15 }}
            transition={{ duration: 1 }}
            layout="position"
            className="flex md:py-8 justify-center items-center"
          >
            <p className="text-base font-extralight rounded-xl p-8 bg-[#292f36] shadow-2xl text-center] ">
              {aboutText}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
