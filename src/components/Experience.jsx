import { motion } from "framer-motion";
import { EDUCATION, COURSES } from "../constans/index";

const Experience = () => {
  return (
    <div className="bg-about-bg bg-cover bg-center min-h-screen flex flex-col justify-center items-center pb-4 px-4 md:px-8 lg:px-16 xl:px-32">
      <h1 className="py-8 text-center text-4xl ">Experience</h1>
      {EDUCATION.map((edu, index) => (
        <motion.div
          key={index}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.3 }}
          layout="position"
          className="rounded-xl p-5 bg-[#292f36] shadow-2xl w-full max-w-5xl mx-auto mb-5"
        >
          <h1 className="text-3xl font-semibold mb-5">Education Level</h1>

          <div className="mb-3 flex flex-wrap md:justify-between lg:justify-start">
            <div className="w-full md:w-3/4 lg:w-2/3">
              <h6 className="font-semibold text-lg">
                {edu.university}
                <span className="font-normal text-base text-slate-300">
                  {" "}
                  {edu.city}
                </span>
              </h6>
              <p className="mb-2">{edu.major}</p>
              <div className="flex flex-wrap gap-2">
                {edu.eduskills.map((eduskils, index) => (
                  <span
                    key={index}
                    className="rounded bg-green-700 px-2 py-1 text-sm font-medium text-white hover:cursor-pointer hover:bg-green-950"
                  >
                    {eduskils}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/3 text-right">
              <p className="text-slate-300">{edu.year}</p>
            </div>
          </div>
        </motion.div>
      ))}
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.6 }}
        layout="position"
        className="rounded-xl p-5 mb-5 bg-[#292f36] shadow-2xl w-full max-w-5xl mx-auto"
      >
        <h1 className="text-3xl font-semibold mb-5">
          Courses, Training and Certifications
        </h1>
        {COURSES.map((courses, index) => (
          <div
            key={index}
            className="mb-5 flex flex-wrap md:justify-between lg:justify-start"
          >
            <div className="w-full md:w-3/4 lg:w-2/3">
              <h6 className="font-semibold text-lg">
                {courses.academy}
                <span className="font-normal text-base text-slate-300">
                  {" "}
                  {courses.city}
                </span>
              </h6>
              <p className="mb-2">{courses.course}</p>
              <div className="flex flex-wrap gap-2">
                {courses.skills.map((skills, index) => (
                  <span
                    key={index}
                    className="rounded bg-green-700 px-2 py-1 text-sm font-medium text-white hover:cursor-pointer hover:bg-green-950"
                  >
                    {skills}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/3 text-right">
              <p className="text-slate-300">{courses.year}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
