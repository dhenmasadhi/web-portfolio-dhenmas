import { TiHtml5 } from "react-icons/ti";
import {
  RiReactjsLine,
  RiJavascriptFill,
  RiBootstrapFill,
} from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss, SiMongodb, SiGithub } from "react-icons/si";
import { FaVuejs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { BiLogoVisualStudio, BiLogoFlutter } from "react-icons/bi";
import { motion } from "framer-motion";

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="bg-[#1a1e23] text-white py-8">
      <h1 className="py-8 md:mb-10 text-center text-4xl">Technologies</h1>

      <div className="flex flex-col items-center">
        <div className="mb-10 grid grid-cols-5 gap-3 text-sm sm:text-base md:hidden">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <TiHtml5 className="text-4xl text-orange-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <DiCss3 className="text-4xl text-blue-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <RiJavascriptFill className="text-4xl text-yellow-300" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <RiBootstrapFill className="text-4xl text-purple-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <SiTailwindcss className="text-4xl text-sky-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <RiReactjsLine className="text-4xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <FaVuejs className="text-4xl text-green-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <TbBrandNextjs className="text-4xl" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <FaNodeJs className="text-4xl text-green-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            v
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <GrMysql className="text-4xl text-blue-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <SiMongodb className="text-4xl text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <BiLogoFlutter className="text-4xl text-sky-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <FaGitAlt className="text-4xl text-red-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <BiLogoVisualStudio className="text-4xl text-sky-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-teal-800 p-2"
          >
            <SiGithub className="text-4xl" />
          </motion.div>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-8 gap-3">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <TiHtml5 className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <DiCss3 className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <RiJavascriptFill className="text-7xl text-yellow-300" />
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <RiBootstrapFill className="text-7xl text-purple-600" />
            </motion.div>
            <motion.div
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <SiTailwindcss className="text-7xl text-sky-400" />
            </motion.div>
            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <FaVuejs class="text-7xl text-green-400" />
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <TbBrandNextjs class="text-7xl" />
            </motion.div>
          </div>

          <div className="mt-5 mb-20 grid grid-cols-7 justify-items-center">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <FaNodeJs className="text-7xl text-green-600" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <GrMysql class="text-7xl text-blue-600" />
            </motion.div>
            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <SiMongodb class="text-7xl text-green-500" />
            </motion.div>
            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <BiLogoFlutter class="text-7xl text-sky-500" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <FaGitAlt class="text-7xl text-red-600" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <BiLogoVisualStudio class="text-7xl text-sky-600" />
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-teal-800 p-2"
            >
              <SiGithub class="text-7xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
