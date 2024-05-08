import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SlArrowRightCircle } from "react-icons/sl";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mx-8 md:mt-16">
        <h1
          className="mt-28 border px-4 md:px-6 py-3 md:text-2xl font-bold mx-auto"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 255, 91, 0.15), rgba(0, 255, 255, 0.15))",
          }}
        >
          Welcome To My Portfolio
        </h1>
        <h1 className="mt-8 md:mt-12 text-3xl font-medium md:text-6xl">
          Hi! I'm Dhenmas Adhimaulana Saputra,
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-[#97f9eb] to-green-500 bg-clip-text tracking-tight text-transparent">
          Full-Stack Developer
        </h1>
        <p className="md:mx-40 text-sm md:text-base font-extralight">
          I'm passionate full stack developer with a knack for crafting robust
          and scalable web applications. I have honed skill in front-end
          technologies like ReactJS and VueJS, as well as back-end technologies
          like NodeJS, ExpressJS, MySQL, and MongoDB. I help business grow by
          crafting amazing web experiences. If you’re looking for a developer
          that likes to get stuff done
        </p>
      </div>
      <div className="flex justify-center items-center mt-4 gap-x-2 text-3xl">
        <a
          className="hover:scale-125"
          href="https://www.linkedin.com/in/dhenmasadhi/"
        >
          <FaLinkedin />
        </a>
        <a
          className="hover:scale-125"
          href="https://www.instagram.com/dhenmasm?igsh=MTM3aTNwb3M5eXk1OQ=="
        >
          <FaInstagram />
        </a>
        <a className="hover:scale-125" href="https://github.com/dhenmasadhi">
          <FaGithub />
        </a>
      </div>
      <div className="flex justify-center items-center my-7 gap-10 mb-10 md:mb-32">
        <button className="flex justify-center items-center gap-x-2 underline font-semibold text-xl hover:scale-110">
          Let's Talk!
          <SlArrowRightCircle />
        </button>
        <button className="rounded-lg px-2 py-2 bg-green-600 hover:bg-green-900 hover:scale-110 font-semibold">
          Curriculum Vitae
        </button>
      </div>
    </div>
  );
};

export default Hero;
